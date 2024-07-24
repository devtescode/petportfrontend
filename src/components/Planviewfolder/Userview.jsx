import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import axios from 'axios';

const Userview = () => {
    const { id } = useParams();
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPlan = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/useranimalinvest/getplan/${id}`);
                setPlan(response.data.plan);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching plan:', error);
            }
        };

        fetchPlan();

        const getUser = JSON.parse(localStorage.getItem('UserData'));
        if (!getUser) {
            navigate('/login');
        } else {
            setUser(getUser);
        }
    }, [id, navigate]);

    const handleInvestNow = async () => {
        if (!user) {
            alert('You need to be logged in to invest!');
            navigate('/login');
            return;
        }

        const url = 'http://localhost:5000/useranimalinvest/investnow';
        const postData = {
            planId: id,
            email: user.email
        };

        try {
            const response = await axios.post(url, postData);
            if (response.data.message === 'Successfully saved') {
                localStorage.setItem('UserData', JSON.stringify(response.data.userData));
                alert(response.data.message);
            } else {
                alert('Investment failed!');
            }
        } catch (error) {
            console.error('Error during investment:', error);
            alert('An error occurred during investment.');
        }
    };
    
    if (loading) {
        return <p>Loading...</p>;
    }

    if (!plan) {
        return <p>Plan not found.</p>;
    }

    return (
        <>
            <Sidenav/>
            <div className='alldivcontainers d-flex shadow-lg' style={{ alignItems: 'center' }}>
                <div className="container bg-white col-md-6 rounded-3 p-1 p-sm-2">
                    <h2>{plan.name}</h2>
                    <img src={plan.image} alt={plan.name} className='card-img-top mx-auto d-block col-6 bg-dark' />
                    <div className='mt-2 text-center'>
                        <p>{plan.description}</p>
                        <p>Price: ₦{plan.price}</p>
                    </div>
                    <div className='justify-content-center d-flex'>
                        <button style={{ backgroundColor: '#FA7179' }} className='btn btn-primary text-white justify-content-center' onClick={handleInvestNow}>Invest Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Userview