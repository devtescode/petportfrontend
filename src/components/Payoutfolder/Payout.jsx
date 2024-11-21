import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import { API_URLS } from '../../utils/apiConfig';

const Payout = () => {
    const [payouts, setPayouts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPayoutDetails = async () => {
        try {
            const userEmail = JSON.parse(localStorage.getItem("UserData"))?.email;
           
            
            if (!userEmail) {
                setError('No email found in user data.');
                return;
            }

            const response = await axios.get(API_URLS.payoutdetails, {
                params: { email: userEmail }
            });
            console.log(response);
            

            if (response.data.success) {
                setPayouts(response.data.payouts);
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('Error fetching payout details');
            console.error('Error fetching payout details:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPayoutDetails();
    }, []);

    return (
        <>
            <Sidenav />
            <div className="alldivcontainers">
                <div className="p-0 p-sm-2">
                    <h2>Payout</h2>
                    <div className="border">
                        {loading ? (
                            <div className="spinner-container">
                                <div className="spinner"></div> {/* Add a spinner here */}
                                <p>Loading...</p>
                            </div>
                        ) : error ? (
                            <p className="error-message">{error}</p> // Display error message if any
                        ) : payouts.length > 0 ? (
                            payouts.map((payout, index) => (
                                <div key={index} className="payout-item">
                                    <p><strong>Plan ID:</strong> {payout.planId || 'N/A'}</p>
                                    <p><strong>Investment Period:</strong> {payout.investmentPeriod || 'N/A'}</p>
                                    <p><strong>Investment Price:</strong> ₦{payout.investmentPrice || 'N/A'}</p>
                                    <p><strong>Expected Earnings:</strong> ₦{payout.expectedEarnings || 'N/A'}</p>
                                    <p><strong>Payout Date:</strong> {payout.endDate ? new Date(payout.endDate).toDateString() : 'N/A'}</p>
                                    <hr />
                                </div>
                            ))
                        ) : (
                            <p>No payouts available.</p> // Display if no payouts are found
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payout;
