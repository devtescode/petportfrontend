import React, { useEffect, useState } from 'react';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import axios from 'axios';
import { API_URLS } from '../../utils/apiConfig';

const Wallet = () => {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [getUser, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // State to handle loading status

    useEffect(() => {
        const getUserFromLocal = JSON.parse(localStorage.getItem('UserData'));
        if (!getUserFromLocal || getUserFromLocal.length === 0) {
            alert('User not found, please log in again');
        } else {
            setUser(getUserFromLocal);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); 
        const sendToBack = {
            email: getUser.email,
            amount: parseInt(amount, 10) 
        };
        try {
            const response = await axios.post(API_URLS.fundaccount, sendToBack);
            if (response.data.status) {
                window.location.href = response.data.authorization_url; 
            } else {
                setMessage('Funding failed');
            }
        } catch (error) {
            console.error('Error funding account:', error);
            setMessage('An error occurred while funding the account');
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <>
            <Sidenav />
            <div className="alldivcontainers d-flex justify-content-center align-items-center">
                <div className="border-0 col-md-8 col-sm-12">
                    <div className="card-body border-1 border border-light text-center">
                        <h2 className="mb-4 text-primary">Fund Account</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 text-start">
                                <label htmlFor="amount" className="form-label fw-bold">
                                    Amount
                                </label>
                                <input
                                    id="amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="form-control form-control-lg"
                                    placeholder="Enter amount"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                                disabled={isLoading} // Disable button when loading
                            >
                                {isLoading ? 'Processing...' : 'Fund Account'}
                            </button>
                        </form>
                        {message && (
                            <p className="mt-3 text-danger fw-semibold">
                                {message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wallet;
