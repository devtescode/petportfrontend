import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserForm.css';

const UserForm = ({ user, onSave, isVisible, onClose }) => {
    const [formData, setFormData] = useState({
        Fullname: '',
        Number: '',
        Email: '',
        Password: '',
        Product: [],
        Balance: 0,
        Uploadimg: '',
        Totalinvest: 0,
        Amountinvest: 0,
        Codetoken: '',
        tokenGenerationAttempts: 0,
        firstAttemptTimestamp: '',
        history: [],
        role: 'user'
    });

    useEffect(() => {
        if (user) {
            setFormData(user);
            fetchUserHistory(user.Email);
        } else {
            setFormData({
                Fullname: '',
                Number: '',
                Email: '',
                Password: '',
                Product: [],
                Balance: 0,
                Uploadimg: '',
                Totalinvest: 0,
                Amountinvest: 0,
                Codetoken: '',
                tokenGenerationAttempts: 0,
                firstAttemptTimestamp: '',
                history: [],
                role: 'user'
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let parsedValue = value;
        if (['Number', 'Balance', 'Totalinvest', 'Amountinvest', 'Codetoken', 'tokenGenerationAttempts'].includes(name)) {
            parsedValue = parseFloat(value) || 0;
        }
        setFormData({ ...formData, [name]: parsedValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const hideModal = () => {
            // Hide modal using Bootstrap's JavaScript API
            const modal = window.bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
            modal.hide();
        };

        if (user && user._id) {
            axios.put(`http://localhost:5000/useranimalinvest/putall/${user._id}`, formData)
                .then(response => {
                    onSave(response.data);
                    hideModal();
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: `₦${response.data.Balance} Is Successfully Funded To ${response.data.Fullname} Account`,
                    });
                })
                .catch(error => {
                    console.error('There was an error updating the user!', error);
                });
        } else {
            axios.post('http://localhost:5000/useranimalinvest/postall', formData)
                .then(response => {
                    onSave(response.data);
                    hideModal();
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Successfully Updated",
                    });
                })
                .catch(error => {
                    console.error('There was an error creating the user!', error);
                });
        }
    };

    const fetchUserHistory = (email) => {
        axios.post('http://localhost:5000/useranimalinvest/getHistory', { email })
            .then(response => {
                setFormData(prevData => ({
                    ...prevData,
                    history: response.data.history
                }));
            })
            .catch(error => {
                console.error('There was an error fetching the user history!', error);
            });
    };

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">User Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 mx-auto border border-1 border-light p-2">
                                        <div>
                                            <label>Full Name</label>
                                            <input type="text" name="Fullname" className='form-control' value={formData.Fullname} onChange={handleChange} required />
                                        </div>
                                        <div>
                                            <label>Number</label>
                                            <input type="number" name="Number" className='form-control' value={formData.Number} onChange={handleChange} required />
                                        </div>
                                        <div>
                                            <label>Email</label>
                                            <input type="email" name="Email" className='form-control' value={formData.Email} onChange={handleChange} required />
                                        </div>
                                        <div>
                                            <label>Password</label>
                                            <input type="password" name="Password" className='form-control' disabled value={formData.Password} onChange={handleChange} required />
                                        </div>
                                        <div>
                                            <label>Balance</label>
                                            <input type="number" name="Balance" className='form-control' value={formData.Balance} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label>Upload Image</label>
                                            <input type="text" disabled name="Uploadimg" className='form-control' value={formData.Uploadimg} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label>Total Invest</label>
                                            <input type="number" name="Totalinvest" className='form-control' value={formData.Totalinvest} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label>Amount Invest</label>
                                            <input type="number" name="Amountinvest" className='form-control' value={formData.Amountinvest} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label>Code Token</label>
                                            <input type="number" name="Codetoken" className='form-control' value={formData.Codetoken} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label>Token Generation Attempts</label>
                                            <input type="number" name="tokenGenerationAttempts" className='form-control' value={formData.tokenGenerationAttempts} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label>First Attempt Timestamp</label>
                                            <input type="datetime-local" name="firstAttemptTimestamp" className='form-control' value={formData.firstAttemptTimestamp} onChange={handleChange} />
                                        </div>
                                        <div>
                                            <label>Role</label>
                                            <select name="role" className='form-control' value={formData.role} onChange={handleChange}>
                                                <option value="user">User</option>
                                                <option value="admin">Admin</option>
                                            </select>
                                        </div>
                                        <div className=' my-2'>
                                            <label className=''>History</label>
                                            <div className='text-start'>
                                            <ul>
                                                    {formData.history.length > 0 ? formData.history.map((entry, index) => (
                                                        <li key={index}>
                                                            <strong>Date:</strong> {new Date(entry.investmentDate).toLocaleString()} <br />
                                                            <strong>Product Name:</strong> {entry.productName} <br />
                                                            <strong>Price:</strong> ₦{entry.productPrice}<br/>
                                                            <strong>InvestmentPeriod:</strong> {entry.investmentPeriod}
                                                            <br/>
                                                            <strong>Investment URL:</strong> {entry.productImage}
                                                            <br/>
                                                            <strong>Investment Earn:</strong> {entry.investmentPrice}
                                                            <br/>
                                                        </li>
                                                    )) : <li>No investment history available.</li>}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Close</button>
                            <button type="submit" className='btn btn-success'>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserForm;
