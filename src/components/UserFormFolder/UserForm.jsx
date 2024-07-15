import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './UserForm.css';
const UserForm = ({ user, onSave, isVisible, onClose }) => {
    // const [formData, setFormData] = useState({
    //     Fullname: '',
    //     Number: '',
    //     Email: '',
    //     Password: '',
    //     Product: [],
    //     Balance: 0,
    //     Uploadimg: '',
    //     Totalinvest: 0,
    //     Amountinvest: 0,
    //     Codetoken: '',
    //     tokenGenerationAttempts: 0,
    //     firstAttemptTimestamp: '',
    //     history: [],
    //     role: 'user'
    // });
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


    useEffect(() => {
        if (user) {
            setFormData(user);
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let parsedValue = value;
        if (name === 'Number' || name === 'Balance' || name === 'Totalinvest' || name === 'Amountinvest' || name === 'Codetoken' || name === 'tokenGenerationAttempts') {
            parsedValue = parseFloat(value) || 0;
        }
        // console.log(`Field: ${name}, Value: ${parsedValue}`);
        setFormData({ ...formData, [name]: parsedValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting form data:', formData);
        if (user && user._id) {
            axios.put(`http://localhost:5000/useranimalinvest/putall/${user._id}`, formData)
                .then(response => {
                    onSave(response.data);
                    onClose();
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: `₦${response.data.Balance} Is Successfully Fund To ${response.data.Fullname} Account`,
                    });
                })
                .catch(error => {
                    console.error('There was an error updating the user!', error);
                });
        } else {
            axios.post('http://localhost:5000/useranimalinvest/postall', formData)
                .then(response => {
                    onSave(response.data);
                    onClose();
                    // console.log('Create response:', response.data);
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Successfully Updated",
                    });
                    alert("Successfully")
                })
                .catch(error => {
                    console.error('There was an error creating the user!', error);
                });
        }
    };
    return (
        <>
            <div className={`user-form-container ${isVisible ? 'visible' : 'hidden'}`}>


                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
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
                                    <input type="password" name="Password" className='form-control' value={formData.Password} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label>Balance</label>
                                    <input type="number" name="Balance" className='form-control' value={formData.Balance} onChange={handleChange} />

                                </div>
                                <div>
                                    <label>Upload Image</label>
                                    <input type="text" name="Uploadimg" className='form-control' value={formData.Uploadimg} onChange={handleChange} />
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
                                {/* Add fields for Product and  tory if needed */}
                                <div>

                                </div>
                                <div className='text-center gap-2 d-flex my-2 justify-content-center'>
                                    <button type="submit" className='btn btn-success'>Save</button>
                                    <button type="button" onClick={onClose} className='btn btn-danger'>Cancel</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UserForm