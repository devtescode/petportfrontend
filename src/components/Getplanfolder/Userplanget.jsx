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

    const handleLikeClick = async (planId, currentLikes) => {
        const userData = JSON.parse(localStorage.getItem("UserData"));
        const userId = userData.userId;

        if (!userId) {
            console.error('User ID is missing');
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/useranimalinvest/likeplan', {userId, planId });
            setPlans(plans.map(plan =>
                plan._id === planId
                    ? {
                        ...plan,
                        likes: response.data.likes,
                        likesCount: response.data.likesCount
                    }
                    : plan
            ));
            console.log(response.data.likes);
            
        } catch (error) {
            console.error('Error liking plan:', error);
        }
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
                                plans.map(plan => {
                                    const userData = JSON.parse(localStorage.getItem("UserData"));
                                    const userId = userData.userId;

                                    // Ensure `plan.likes` is an array or default to an empty array
                                    const isLiked = Array.isArray(plan.likes) && plan.likes.includes(userId);

                                    return (
                                        <div key={plan._id} className="col-md-4">
                                            <div className="card mb-4 imgbgstylingcon">
                                                <div className="imgbgstyling">
                                                    <div className="imgstybg">
                                                        {plan.image && (
                                                            <img src={plan.image} className="card-img-top" alt={plan.name} />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <h3 className="card-title">Animal Name: {plan.name}</h3>
                                                    <p className="card-text">Description: {plan.description}</p>
                                                    <p className="card-text">Price: ₦{plan.price}</p>
                                                    <button onClick={() => handleInvestClick(plan._id)} className="investBtn btn btn-primary text-white w-100 rounded-5">View Investment</button>
                                                    <div className='d-flex justify-content-around mt-2'>
                                                        <div className='' style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}>
                                                            <i
                                                                className={`ri-thumb-up-${isLiked ? 'fill' : 'line'} text-primary`}
                                                                onClick={() => handleLikeClick(plan._id, plan.likesCount)}
                                                                style={{ fontSize: '2rem', marginRight: '0.5rem', cursor: 'pointer' }} // Increased size and added margin
                                                            ></i>
                                                            <span>{plan.likesCount || 0}</span>
                                                        </div>

                                                        <div>
                                                            <i className="ri-chat-4-line"  style={{ fontSize: '2rem', marginRight: '0.5rem', cursor: 'pointer' }} ></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Userplanget;
