import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import './planget.css';

const Userplanget = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.get('http://localhost:5000/useranimalinvest/getuserplans');
                setPlans(response.data.plans);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching plans:', error);
                setLoading(false);
            }
        };
        fetchPlans();
        const intervalId = setInterval(() => {
            fetchPlans();
        }, 5000); 
        return () => clearInterval(intervalId);
    }, []); 

    const handleInvestClick = (planId) => {
        navigate(`/userview/${planId}`);
    };

    return (
        <>
            <Sidenav />
            <div className='alldivcontainers'>
                <div className="container">
                    <h2 className='mt-1'>Plan List</h2>
                    <div className="row">
                        {loading ? (
                            <p className="text-center">Loading...</p>
                        ) : (
                            plans.length === 0 ? (
                                <p className="text-center text-danger fw-bold">There are no plans added yet.</p>
                            ) : (
                                plans.map(plan => (
                                    <div key={plan._id} className="col-md-4">
                                        <div className="card mb-4">
                                            {plan.image && (
                                                <img src={plan.image} className="card-img-top" alt={plan.name} />
                                            )}
                                            <div className="card-body">
                                                <h3 className="card-title">{plan.name}</h3>
                                                <p className="card-text">{plan.description}</p>
                                                <p className="card-text">Price: ₦{plan.price}</p>
                                                <button onClick={() => handleInvestClick(plan._id)} className='btn btn-primary text-white w-100 rounded-5'>View Investment</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Userplanget;
