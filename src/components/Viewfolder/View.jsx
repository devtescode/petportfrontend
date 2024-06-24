// components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import '../theme-assets/css/vendors.css';
import '../theme-assets/css/plugins/charts/chartist.css';
import '../theme-assets/css/app-lite.css'
import '../theme-assets/css/core/menu/menu-types/vertical-menu.css'
import '../theme-assets/css/core/colors/palette-gradient.css'
import '../theme-assets/css/pages/dashboard-ecommerce.css'

const View = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [User, setUser] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/useranimalinvest/productid/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    useEffect(() => {
        const getuser = JSON.parse(localStorage.getItem('UserData'));
        //   console.log(getuser);
        if (getuser) {
            setUser(getuser)
        }
        else {
            navigate('/login')
        }
    }, [])


    if (loading) {
        return <p>Loading...</p>;
    }
    const handleInvestNow = async () => {
        const url = 'http://localhost:5000/useranimalinvest/investnow';
        const postuser = {
            productId: id,
            Email: User.email
        };

        try {
            const response = await axios.post(url, postuser);
            if (response.data.message === "Successfully saved") {
                localStorage.setItem("UserData", JSON.stringify(response.data.userData));
                alert(response.data.message);
            } else {
                alert('Investment failed!');
            }
        } catch (error) {
            if (error.response) {
                alert(`${error.response.data}`);
            } else if (error.request) {
                alert('No response received from server.');
            } else {
                alert(`Error: ${error.message}`);
            }
            console.error('Error during investment:', error);
        }
    };

    return (
        <>
            <Sidenav />
            <div className='alldivcontainers d-flex shadow-lg' style={{ alignItems: "center" }}>
                <div className="container bg-white col-md-6 rounded-3 p-1 p-sm-2" style={{ alignItems: "center" }}>
                    <h2>{product.name}</h2>
                    <img src={product.image} alt={product.name} className='card-img-top mx-auto d-block col-6 bg-dark' />
                    <div className='mt-2 text-center'>
                        <p>{product.description}</p>
                        <p>Price: ₦{product.price}</p>
                    </div>
                    <div className='justify-content-center d-flex'>
                        <button style={{ backgroundColor: "#FA7179" }} className='btn btn-primary text-white justify-content-center' onClick={handleInvestNow}> Invest Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default View;
