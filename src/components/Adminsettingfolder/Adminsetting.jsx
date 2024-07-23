import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar';
import { useNavigate } from 'react-router';

const Adminsetting = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const admintoken = localStorage.getItem('admintoken');
        if (!admintoken) {
            navigate('/adminreg');
        }
    }, [navigate]);
    const handlePasswordChange = async (e) => {
        e.preventDefault();
        setLoading(true);

        const adminEmail = 'petport09@gmail.com';
        const admintoken = localStorage.getItem('admintoken');

        if (!admintoken) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Admin token not found. Please log in again.',
            });
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/useranimalinvest/changePasswordAdmin', {
                email: adminEmail,
                oldPassword,
                newPassword,
                admintoken
            });
            console.log(response);

            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: response.data.message,
                })
                
                    localStorage.removeItem('admintoken');      
                    navigate("/adminreg")
             
               

            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'warning',
                    text: response.data.message,
                });
            }
        } catch (error) {
            console.error('There was an error changing the password!', error);
            Swal.fire({
                icon: 'Warning',
                title: 'Error Occured',
                text: response.data.message,
            });
        }

        setLoading(false);
    };

    return (
        <>
            <Adminsidebar />
            <div className='Admindashboardcon'>
                <div className='Adminparentdiv'>
                    <div className='Admininnerfirstdiv bg-light fw-bold'>
                        <div className=''>
                            <Adminsidebar />
                        </div>
                    </div>
                    <div className='Admininnerseconddiv shadow-lg'>
                        <div className='h-100 shadow-lg'>
                            <div className='shadow border border-1 border-light mx-auto col-md-7 col-sm-12 h-75 d-flex' style={{ alignItems: "center" }}>
                                <div className='w-100'>
                                    <div className='text-center'>
                                        <h2 className=''>Security</h2>
                                    </div>
                                    <form onSubmit={handlePasswordChange}>
                                        <div className=''>
                                            <div>
                                                <input
                                                    type="password"
                                                    placeholder='Old Password'
                                                    className='form-control my-1 p-2'
                                                    value={oldPassword}
                                                    onChange={(e) => setOldPassword(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="password"
                                                    placeholder='New Password'
                                                    className='form-control my-2 p-2'
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className='text-center'>
                                                <button className='btn btn-primary' type='submit' disabled={loading}>
                                                    {loading ? 'Submitting...' : 'Submit'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminsetting;
