import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import '../theme-assets/css/vendors.css';
import '../theme-assets/css/plugins/charts/chartist.css';
import '../theme-assets/css/app-lite.css';
import '../theme-assets/css/core/menu/menu-types/vertical-menu.css';
import '../theme-assets/css/core/colors/palette-gradient.css';
import '../theme-assets/css/pages/dashboard-ecommerce.css';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Ensure this is imported

const History = () => {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [currentInvestment, setCurrentInvestment] = useState(null); // Updated state
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = JSON.parse(localStorage.getItem('UserData'));
        const token = localStorage.getItem('UserData');
        if (getUser && token) {
            const url = "http://localhost:5000/useranimalinvest/getHistory";
            let email = getUser.email;

            axios.post(url, { email })
                .then((response) => {
                    setHistory(response.data.history);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const time = (time) => {
        const utcDate = new Date(time);
        const localDateString = utcDate.toLocaleString();
        return localDateString;
    };

    const handleShowModal = (investment) => {
        setCurrentInvestment(investment);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentInvestment(null);
    };

    if (loading) {
        return <p className='text-center'>Loading...</p>;
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <Sidenav />
            <div className="container alldivcontainers">
                <h2 className="text-center my-2">Investment History</h2>
                <div>
                    {history.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-bordered table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {history.map((investment, index) => (
                                        <tr key={investment._id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{investment.productName}</td>
                                            <td>₦{investment.productPrice}</td>
                                            <td>{time(investment.investmentDate)}</td>
                                            <td>
                                                <button className='btn btn-primary' onClick={() => handleShowModal(investment)}>
                                                <i class="ri-file-image-line"></i>
                                                </button>
                                            </td>
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

            <Modal show={showModal} onHide={handleCloseModal} className='shadow-lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Investment Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className=''>


                        {currentInvestment ? (
                            <>
                                {currentInvestment.productImage ? (
                                    <img
                                        src={currentInvestment.productImage}
                                        alt="Product"
                                        className="img-fluid mx-auto d-flex"
                                        style={{ width: "400px", height: "400px", objectFit: "cover", borderRadius: "500vh"}}
                                    />
                                ) : (
                                    <p>No image available</p>
                                )}
                                <div className="mt-2 ">
                                    <div className="p-1">
                                        <div className=' d-flex'>
                                            <div>
                                                <p className="">Product Name:</p>
                                            </div>
                                            <div style={{ marginLeft: "5px" }}>
                                                {currentInvestment.productName}
                                            </div>
                                        </div>
                                        <div className=' d-flex'>
                                            <div>
                                                <p className="">Price: </p>
                                            </div>
                                            <div style={{ marginLeft: "5px" }}>
                                                ₦{currentInvestment.productPrice}
                                            </div>
                                        </div>
                                        <div className=' d-flex'>
                                            <div>
                                                <p className="">Date: </p>
                                            </div>
                                            <div className='text-muted' style={{ marginLeft: "5px" }}>
                                                {formatDate(currentInvestment.investmentDate)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p>No investment details available</p>
                        )}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button> */}
                </Modal.Footer>
            </Modal>

        </>
    );
};

export default History;
