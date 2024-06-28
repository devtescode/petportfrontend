import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import '../theme-assets/css/vendors.css';
import '../theme-assets/css/plugins/charts/chartist.css';
import '../theme-assets/css/app-lite.css';
import '../theme-assets/css/core/menu/menu-types/vertical-menu.css';
import '../theme-assets/css/core/colors/palette-gradient.css';
import '../theme-assets/css/pages/dashboard-ecommerce.css';

const History = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem('UserData'));
        const token = localStorage.getItem('UserData');
        if (getUser && token) {
            const url = "http://localhost:5000/useranimalinvest/getHistory";
            let email = getUser.email
            console.log(email, url);

            axios.post(url, { email })
                .then((response) => {
                    setHistory(response.data.history);
                    console.log(response);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            navigate('/login');
        }
    }, []);

    const time = (time) => {
        const utcDate = new Date(time);
        const localDateString = utcDate.toLocaleString();
        return localDateString;
    };

    if (loading) {
        return <p className='text-center'>Loading...</p>;
    }

    return (
        <>
            <Sidenav />
            <div className="container alldivcontainers">
                <h2 className="text-center my-2">Investment History</h2>
                <div className=''>
                    {history.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {history.map((investment, index) => (
                                        <tr key={investment._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{investment.productName}</td>
                                            <td>₦{investment.productPrice}</td>
                                            <td>{time(investment.investmentDate)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="text-center text-danger fw-bold d-flex fs-4" style={{ alignItems: "center" }}>
                            <p>No investments made yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default History;
