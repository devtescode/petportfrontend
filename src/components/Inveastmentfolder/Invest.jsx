// components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Sidenav from '../Sidenavbarfolder/Sidenav';

const Invest = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [User, setUser] = useState([]);
    const [allProducts, setAllproducts] = useState([]);
    const navigate = useNavigate()
    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:5000/useranimalinvest/productid/${id}`);
    //             setProduct(response.data);
    //             setLoading(false);
    //         } catch (error) {
    //             console.error('Error fetching product:', error);
    //         }
    //     };
    //     fetchProduct();
    // }, [id]);

    useEffect(() => {
        const getuser = JSON.parse(localStorage.getItem('UserData'));
          console.log(getuser);
        if (getuser) {
            setUser(getuser)

            // getuser.products.map((product) => {
            //     console.log(product.length);
            //     setProduct(product)
            // })
        }
        else {
            navigate('/login')
        }
    }, [])


    // if (loading) {
    //     return <p>Loading...</p>;
    // }


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
            <div className="container">
                <div style={{ width: "80%", position: "absolute", height: "100%", top: "0", right: "0" }}>

                    <div className='mt-5 ms-3'>

                        <h4>All your Investment</h4>
                    </div>


                    {User.products && User.products.length > 0 && (
                        <div className="row gap-3 mx-auto text-center justify-content-center">
                            {User.products.map(product => (
                                <div key={product.id} className="borde rounded shadow-lg  col-sm-12 col-md-6 col-lg-3 mb-4">
                                    <h2 className='my-2'>{product.name}</h2>
                                    <img src={product.image} alt={product.name} style={{ width: '80%', height: '40%' }} className='img-fluid mb-3' />
                                    <p>{product.description}</p>
                                    <p>Price: ${product.price}</p>
                                    <button className='btn btn-primary text-white w-100 rounded-5 mb-3' onClick={() => handleInvestNow(product.id)}>Invest Now</button>
                                </div>
                            ))}

                        </div>
                    )}
                </div>


            </div>
        </>
    );
}

export default Invest;
