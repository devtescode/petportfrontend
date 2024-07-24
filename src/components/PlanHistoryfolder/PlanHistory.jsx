import React, { useState, useEffect } from 'react';
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar';
import axios from 'axios';
import './PlanHistory.css'; 

const PlanHistory = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPlan, setCurrentPlan] = useState(null);
    const [formValues, setFormValues] = useState({
        name: '',
        description: '',
        price: '',
        image: ''
    });

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
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true);
                try {
                    const response = await axios.delete(`http://localhost:5000/useranimalinvest/adminplansdelect/${id}`);
                    if (response.data.success) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Deleted',
                            text: 'Plan deleted successfully',
                        });
                        // Refresh the plans list
                        const updatedPlans = plans.filter(plan => plan._id !== id);
                        setPlans(updatedPlans);
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
            }
        });
    };

    const handleEdit = (plan) => {
        setCurrentPlan(plan);
        setFormValues({
            name: plan.name,
            description: plan.description,
            price: plan.price,
            image: plan.image || '' // Assuming image is a URL or empty string
        });
        const modal = new bootstrap.Modal(document.getElementById('editPlanModal'));
        modal.show();
    };

    const handleModalClose = () => {
        const modal = bootstrap.Modal.getInstance(document.getElementById('editPlanModal'));
        modal.hide();
        setCurrentPlan(null);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/useranimalinvest/updateplan/${currentPlan._id}`, formValues);
            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Plan updated successfully',
                });
                // Refresh the plans list
                const updatedPlans = plans.map(plan =>
                    plan._id === currentPlan._id ? { ...plan, ...formValues } : plan
                );
                setPlans(updatedPlans);
                handleModalClose();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to update plan',
                });
            }
        } catch (error) {
            console.error('There was an error updating the plan!', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while updating the plan.',
            });
        }
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
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {plans.map((plan, index) => (
                                            <tr key={plan._id}>
                                                <td>{index + 1}</td>
                                                <td>{plan.name}</td>
                                                <td className='border'>{plan.description}</td>
                                                <td>₦{plan.price}</td>
                                                <td>
                                                    <button 
                                                        className='btn btn-warning mx-1' 
                                                        onClick={() => handleEdit(plan)}>
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

            {/* Edit Plan Modal */}
            <div className="modal fade" id="editPlanModal" tabIndex="-1" aria-labelledby="editPlanModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editPlanModalLabel">Edit Plan</h5>
                            <button type="button" className="btn-close" onClick={handleModalClose}></button>
                        </div>
                        <form onSubmit={handleFormSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Plan Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        value={formValues.description}
                                        onChange={handleFormChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        name="price"
                                        value={formValues.price}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Image URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="image"
                                        name="image"
                                        value={formValues.image}
                                        onChange={handleFormChange}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlanHistory;
