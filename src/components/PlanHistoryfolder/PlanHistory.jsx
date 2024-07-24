import React, { useState, useEffect } from 'react';
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar';
import axios from 'axios';
import './PlanHistory.css'; 
const PlanHistory = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchPlans = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://localhost:5000/useranimalinvest/getuserplans');
            if (response.data.success) {
                setPlans(response.data.plans);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to fetch plans',
                });
            }
        } catch (error) {
            console.error('There was an error fetching the plans!', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while fetching the plans.',
            });
        }
        setLoading(false);
    };

    const handleDelete = async (id) => {
        setLoading(true);
        try {
            const response = await axios.delete(`http://localhost:5000/useranimalinvest/adminplansdelect/${id}`);
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Deleted',
                    text: 'Plan deleted successfully',
                });
                fetchPlans(); // Refresh the plans list
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to delete plan',
                });
            }
        } catch (err) {
            console.error('There was an error deleting the plan!', err);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while deleting the plan.',
            });
        }
        setLoading(false);
    };

    const handleEdit = (id) => {
        // Implement edit functionality here
        console.log(`Edit plan with ID: ${id}`);
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
                        <div className='text-center p-3'>
                            <h1>Plan History</h1>
                        </div>
                        <div className='table-responsive p-3'>
                            {loading ? (
                                <div className="text-center">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <table className='table table-striped'>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {plans.map((plan) => (
                                            <tr key={plan._id}>
                                                <td>{plan.name}</td>
                                                <td>{plan.description}</td>
                                                <td>{plan.price}</td>
                                                <td>
                                                    <button 
                                                        className='btn btn-warning mx-1' 
                                                        onClick={() => handleEdit(plan._id)}>
                                                        Edit
                                                    </button>
                                                    <button 
                                                        className='btn btn-danger mx-1' 
                                                        onClick={() => handleDelete(plan._id)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlanHistory;
