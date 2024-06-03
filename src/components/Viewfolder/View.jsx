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


    // const handleInvestNow =()=>{
    //     alert()
    // }

    const handleInvestNow = async () => {
        const url = 'http://localhost:5000/useranimalinvest/investnow'
        const postuser = {
            productId: id,
            Email: User.email
        }

        try {
            const response = await axios.post(url,
                postuser
            );
            //    console.log(response.data);
            if (response.data.message == "Successfully saved") {
                localStorage.setItem("UserData", JSON.stringify(response.data.userData))
                alert(response.data.message)
            } else {
                alert('Investment failed!');
            }
        } catch (error) {
            console.error('Error during investment:', error);
            alert('An error occurred during investment')
        }
    };


    return (
        <>
            <Sidenav />
            <div  className='alldivcontainers'>
                <div className="container border border-2 shadow-lg col-6" style={{alignItems:"center"}}>
                    <h2>{product.name}</h2>
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <div className='justify-content-center d-flex'>
                        <button style={{ backgroundColor: "#FA7179" }} className='btn btn-primary text-white w-50 rounded-5 my-3 justify-content-center' onClick={handleInvestNow}> Invest Now</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default View;