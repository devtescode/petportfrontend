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

const Invest = ({}) => {
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
        // console.log(getuser);
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
        const url = 'https://petportbackend.onrender.com/useranimalinvest/investnow'
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
            <Sidenav/>
            <div className="container">
                <div className='alldivcontainers'>
                    {User && User.products ? (
                        User.products.length > 0 ? (
                            <div>
                                <h2 className="text-center my-4">All your Investments</h2>
                                <div className="row gap-3 mx-auto text-center justify-content-center">
                                    {User.products.map(product =>
                                        product && ( // Ensure product is not null or undefined
                                            <div key={product.id} className="border rounded shadow-lg col-sm-12 col-md-6 col-lg-3 mb-4">
                                                <h2 className='my-2'>{product.name}</h2>
                                                <img src={product.image} alt={product.name} style={{ width: '80%', height: '40%' }} className='img-fluid mb-3' />
                                                <p>{product.description}</p>
                                                <p>Price: ₦{product.price}</p>
                                        
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="text-center text-danger fw-bold d-flex fs-4" style={{alignItems:"center"}}>
                                <p>No investment added yet.</p>
                            </div>
                        )
                    ) : (
                        <div className="text-center">
                            <p>Loading investments...</p>
                        </div>
                    )}



                </div>


            </div>
        </>
    );
}

export default Invest;
