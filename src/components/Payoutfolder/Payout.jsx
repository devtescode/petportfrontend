import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import { API_URLS } from '../../utils/apiConfig';

const Payout = () => {
    const [investments, setInvestments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPayoutDetails = async () => {
        const email = JSON.parse(localStorage.getItem('UserData'))?.email; // Retrieve email from localStorage
        if (!email) {
            setError('User email not found. Please log in again.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get(API_URLS.payoutdetails, {
                params: { email },
            });

            if (response.data.success) {
                setInvestments(response.data.investments);
            } else {
                setError(response.data.message || 'Failed to fetch payout details.');
            }
        } catch (err) {
            console.error('Error fetching payout details:', err);
            setError('An error occurred while fetching payout details.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPayoutDetails();
    }, []);

    if (loading) {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h3>Loading Payout Details...</h3>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ textAlign: 'center', color: 'red', marginTop: '50px' }}>
                <h3>Error:</h3>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <>
            <Sidenav />
            <div className="alldivcontainers">
                <div className="p-0 p-sm-2">
                    <h2>Payout</h2>
                    <div>
                        {investments.length > 0 ? (
                            investments.map((investment, index) => (
                                <div
                                    key={index}
                                    style={{
                                        border: '1px solid #ddd',
                                        borderRadius: '5px',
                                        margin: '10px 0',
                                        padding: '15px',
                                        backgroundColor: '#f9f9f9',
                                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: '#333' }}>
                                        {/* <li><strong>Plan ID:</strong> {investment.productId}</li> */}
                                        <li><strong>Plan Name:</strong> {investment.productName}</li>
                                        <li><strong>Investment Price:</strong> ₦{investment.productPrice}</li>
                                        <li><strong>Investment Period:</strong> {investment.investmentPeriod}s</li>
                                        <li><strong>Expected Earnings:</strong> ₦{investment.expectedEarnings}</li>
                                        <li>
                                            <strong>End Date:</strong>{' '}
                                            {investment.endDate
                                                ? new Date(investment.endDate).toDateString()
                                                : 'N/A'}
                                        </li>
                                    </ul>
                                    <img
                                        src={investment.productImage}
                                        alt={investment.productName}
                                        style={{
                                            width: '100%',
                                            maxWidth: '200px',
                                            display: 'block',
                                            margin: '20px auto',
                                            borderRadius: '5px',
                                            border: '1px solid #ccc',
                                        }}
                                    />
                                </div>
                            ))
                        ) : (
                            <p style={{ textAlign: 'center', color: '#555' }}>
                                No investment details available.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payout;
