// components/Product.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import '../theme-assets/css/vendors.css';
import '../theme-assets/css/plugins/charts/chartist.css';
import '../theme-assets/css/app-lite.css'
import '../theme-assets/css/core/menu/menu-types/vertical-menu.css'
import '../theme-assets/css/core/colors/palette-gradient.css'
import '../theme-assets/css/pages/dashboard-ecommerce.css'

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/useranimalinvest/product');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleInvestClick = (productId) => {
        navigate(`/view/${productId}`);
    };
    return (
        <>
            <Sidenav/>
            <div className='alldivcontainers'>
                <div className="container">
                    <h2 className='mt-1'>Product List</h2>
                    <div className="row">
                        {loading ? (
                            <p className="text-center">Loading...</p>
                        ) : (
                            products.map(product => (
                                <div key={product.id} className="col-md-4">
                                    <div className="card"> 
                                        <img src={product.image} className="card-img-top" alt={product.name} style={{ height: "350px" }} />
                                        <div className="card-body">
                                            <h3 className="card-title">{product.name}</h3>
                                            <p className="card-text">{product.description}</p>
                                            <p className="card-text">Price: ₦{product.price}</p>
                                            <button onClick={() => handleInvestClick(product.id)} className='btn btn-primary text-white w-100 rounded-5'>View Investment</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
