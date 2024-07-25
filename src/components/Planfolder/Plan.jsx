import React, { useState } from 'react';
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar';
import axios from 'axios';
import './Plan.css';
const Plan = () => {
    const [planName, setPlanName] = useState('');
    const [planDescription, setPlanDescription] = useState('');
    const [planPrice, setPlanPrice] = useState('');
    const [file, setFile] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCreatePlan = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/useranimalinvest/createplan', {
                name: planName,
                description: planDescription,
                price: planPrice,
                file
            });

            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Plan created successfully',
                });
                setPlanName('');
                setPlanDescription('');
                setPlanPrice('');
                setFile('');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.data.message,
                });
            }
        } catch (error) {
            console.error('There was an error creating the plan!', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while creating the plan.',
            });
        }

        setLoading(false);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setFile(reader.result);
        };
    };

    return (
        <>
            <div className='Admindashboardcon'>
                <div className='Adminparentdiv'>
                    <div className='Admininnerfirstdiv bg-light fw-bold'>
                        <div className=''>
                            <Adminsidebar />
                        </div>
                    </div>
                    <div className='Admininnerseconddiv'>
                        <div className='admin-content bg-light'>
                            <div className='plan-form-container shadow-lg p-4'>
                                <div className='text-center mb-4'>
                                    <h1>Create Plan</h1>
                                </div>
                                <form onSubmit={handleCreatePlan}>
                                    <div className='mb-3'>
                                        <label className='form-label'>Plan Name</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            value={planName}
                                            onChange={(e) => setPlanName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label'>Plan Description</label>
                                        <textarea
                                            className='form-control'
                                            value={planDescription}
                                            onChange={(e) => setPlanDescription(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label'>Plan Price</label>
                                        <input
                                            type='number'
                                            className='form-control'
                                            value={planPrice}
                                            onChange={(e) => setPlanPrice(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label'>Plan Image</label>
                                        <input
                                            type='file'
                                            className='form-control'
                                            onChange={handleFileChange}
                                            
                                        />
                                    </div>
                                    <div className='text-center'>
                                        <button className='btn btn-primary' type='submit' disabled={loading}>
                                            {loading ? 'Creating...' : 'Create Plan'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plan;
