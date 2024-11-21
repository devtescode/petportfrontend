import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import '../theme-assets/css/vendors.css';
import '../theme-assets/css/plugins/charts/chartist.css';
import '../theme-assets/css/app-lite.css';
import '../theme-assets/css/core/menu/menu-types/vertical-menu.css';
import '../theme-assets/css/core/colors/palette-gradient.css';
import '../theme-assets/css/pages/dashboard-ecommerce.css';
import { API_URLS } from '../../utils/apiConfig';

const View = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [investmentPeriod, setInvestmentPeriod] = useState('');
    const [percentage, setPercentage] = useState('');
    const [investmentPrice, setInvestmentPrice] = useState(0); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(API_URLS.getplan(id));
                setProduct(response.data.plan);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem('UserData'));
        if (getUser) {
            setUser(getUser);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    useEffect(() => {
        // Update percentage and price based on investment period
        if (investmentPeriod.includes('3-month')) {
            setPercentage('10%');
        } else if (investmentPeriod.includes('6-month')) {
            setPercentage('20%');
        } else if (investmentPeriod.includes('9-month')) {
            setPercentage('30%');
        } else {
            setPercentage('');
        }

        const selectedPrice = investmentPeriod.split('-₦')[1];
        setInvestmentPrice(selectedPrice ? parseFloat(selectedPrice) : 0); 
    }, [investmentPeriod]);

    if (loading) {
        return <p className='text-center'>Loading...</p>;
    }

    const handleInvestNow = async () => {
        if (!investmentPeriod) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please select an investment period.",
            });
            return;
        }
    
        const [period, price] = investmentPeriod.split('-₦');
        const investmentAmount = investmentPrice;
    
        // Calculate payout amount based on percentage
        let payoutPercentage = 0;
        if (period === '3-month') payoutPercentage = 10;
        if (period === '6-month') payoutPercentage = 20;
        if (period === '9-month') payoutPercentage = 30;
    
        const payoutAmount = investmentAmount + (investmentAmount * payoutPercentage) / 100;
    
        // Calculate payout date
        const currentDate = new Date();
        const payoutDate = new Date(currentDate);
        payoutDate.setMonth(payoutDate.getMonth() + parseInt(period.split('-')[0]));
    
        const postUser = {
            planId: id,
            email: user.email,
            productImage: product.image,
            investmentPeriod: period,
            investmentPrice: investmentAmount,
            payoutAmount,
            payoutDate, // Save payout details
        };
    
        Swal.fire({
            title: "Are you sure?",
            text: `You are about to invest ₦${investmentAmount}. You will receive ₦${payoutAmount} after ${period}.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, invest!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.post(API_URLS.planinvestnow, postUser);
                    if (response.data.success) {
                        localStorage.setItem('PayoutData', JSON.stringify({ payoutAmount, payoutDate }));
    
                        Swal.fire({
                            title: "Successful!",
                            text: response.data.message,
                            icon: "success",
                            confirmButtonText: "OK",
                        });
                    } else {
                        Swal.fire({
                            title: "Investment Failed",
                            text: response.data.message || "Please try again.",
                            icon: "error",
                            confirmButtonText: "OK",
                        });
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "Something went wrong. Please try again later.",
                        icon: "error",
                        confirmButtonText: "OK",
                    });
                }
            }
        });
    };
    

    return (
        <>
            <Sidenav />
            <div className="alldivcontainers d-flex shadow-lg" style={{ alignItems: 'center' }}>
                <div className="container bg-white col-md-6 rounded-3 p-1 p-sm-2" style={{ alignItems: 'center' }}>
                    <h2 className=''>{product.name}</h2>
                    <img src={product.image} alt={product.name} className="card-img-top mx-auto d-block col-12" />
                    <div className="mt-2 text-center">
                        <p>{product.description}</p>
                        {/* <p>Price: g₦{product.price}</p> */}
                    </div>
                    <select
                        name="investmentPeriod"
                        id="investmentPeriod"
                        className='form-control my-2'
                        value={investmentPeriod}
                        onChange={(e) => setInvestmentPeriod(e.target.value)}
                    >
                        <option value="">Select Investment Period</option>
                        <option value={`3-month-₦${product.investmentPeriods['3-month']}`}>3-month ₦{product.investmentPeriods['3-month']}</option>
                        <option value={`6-month-₦${product.investmentPeriods['6-month']}`}>6-month ₦{product.investmentPeriods['6-month']}</option>
                        <option value={`9-month-₦${product.investmentPeriods['9-month']}`}>9-month ₦{product.investmentPeriods['9-month']}</option>
                    </select>  
                    <select name="" id="" className='form-control my-2' disabled>
                        <option value="">{percentage}</option> 
                    </select> 

                    <div className="text-center">
                        <button className="btn btn-primary" onClick={handleInvestNow}>
                            Invest Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default View;
