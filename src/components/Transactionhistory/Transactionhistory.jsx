import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import { API_URLS } from '../../utils/apiConfig';
import "./Transactionhistory.css"
const Transactionhistory = () => {
    const [transactions, setTransactions] = useState([]);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUserFromLocal = JSON.parse(localStorage.getItem('UserData'));
        if (!getUserFromLocal || getUserFromLocal.length === 0) {
            alert('User not found, please log in again');
            return;
        }

        const fetchTransactionHistory = async () => {
            try {
                const response = await axios.post(API_URLS.transctionhistory, {
                    email: getUserFromLocal.email,
                });
                setTransactions(response.data);
            } catch (error) {
                setMessage('Error fetching transaction history');
            } finally {
                setIsLoading(false);
            }
        };

        fetchTransactionHistory();
    }, []);

    return (
        <>
            <Sidenav />
            <div className="alldivcontainers">
            <div className="text-center">
                            <h1>Transaction History</h1>
                        </div>
                {isLoading ? (
                    <p className='text-center'>Loading...</p>
                ) : message ? (
                    <p className="text-danger">{message}</p>
                ) : (
                    <div className="table-responsive">
                        
                        <table className="table">

                            <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Reference</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Payment Method</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((transaction, index) => (

                                    <tr key={transaction.reference}>

                                        <td>{index + 1}</td>
                                        <td>{transaction.reference}</td>
                                        <td>{transaction.amount} NGN</td>
                                        <td>{transaction.status}</td>
                                        <td>{transaction.paymentMethod}</td>
                                        <td>{new Date(transaction.paidAt).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

        </>
    );
};

export default Transactionhistory;
