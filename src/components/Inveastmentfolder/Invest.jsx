// components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Sidenav from '../Sidenavbarfolder/Sidenav';

const ProductDetail = () => {
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
    if(getuser){
        setUser(getuser)
    }
    else{
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
            <div style={{ width: "80%", position: "absolute", height: "100%", top: "0", right: "0" }}>
                <div className="container border border-2 col-6">
                    <h2>{product.name}</h2>
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button className='btn btn-primary text-white w-100 rounded-5 my-3' onClick={handleInvestNow}> Invest Now</button>    
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
