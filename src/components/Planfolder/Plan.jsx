import React, { useState } from 'react';
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar';
import axios from 'axios';
import './Plan.css';
import { API_URLS } from '../../utils/apiConfig';


const Plan = () => {
    const [planName, setPlanName] = useState('');
    const [planDescription, setPlanDescription] = useState('');
    const [planPrice, setPlanPrice] = useState('');
    const [file, setFile] = useState('');
    const [loading, setLoading] = useState(false);
    const [investmentPeriods, setInvestmentPeriods] = useState({
        '3-month': '',
        '6-month': '',
        '9-month': ''
    });

    const handleCreatePlan = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(API_URLS.createplan, {
                name: planName,
                description: planDescription,
                price: planPrice,
                file,
                investmentPeriods
            });
            console.log(response);
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
                setInvestmentPeriods({
                    '3-month': '',
                    '6-month': '',
                    '9-month': ''
                });
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

    const handleInvestmentPeriodChange = (e, period) => {
        setInvestmentPeriods({ ...investmentPeriods, [period]: e.target.value });
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
                                            placeholder='Plan Name'
                                            value={planName}
                                            onChange={(e) => setPlanName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label'>Plan Description</label>
                                        <textarea
                                            className='form-control'
                                            placeholder='Plan Description'
                                            value={planDescription}
                                            onChange={(e) => setPlanDescription(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label'>Plan Price</label>
                                        <input
                                            type='number'
                                            placeholder='Plan Price'
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
                                            placeholder='Plan Image'
                                            className='form-control'
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                    <label className='form-label'>Investment Periods Prices</label>
                                    <div className='mb-3 justify-content-center d-sm-flex d-block gap-2 '>
                                        <div>
                                            <label>
                                                3-month:
                                                <input
                                                    type='number'
                                                    className='form-control w-100'
                                                    placeholder='3-month Price'
                                                    value={investmentPeriods['3-month']}
                                                    onChange={(e) => handleInvestmentPeriodChange(e, '3-month')}
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                6-month:
                                                <input
                                                    type='number'
                                                    className='form-control'
                                                    placeholder='6-month Price'
                                                    value={investmentPeriods['6-month']}
                                                    onChange={(e) => handleInvestmentPeriodChange(e, '6-month')}
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                9-month:
                                                <input
                                                    type='number'
                                                    className='form-control'
                                                    placeholder='9-month Price'
                                                    value={investmentPeriods['9-month']}
                                                    onChange={(e) => handleInvestmentPeriodChange(e, '9-month')}
                                                    required
                                                />
                                            </label>
                                        </div>
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
