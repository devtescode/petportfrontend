import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar';

const Notification = () => {
    const [message, setMessage] = useState('');
    const [userId, setUserId] = useState('all');
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        // Fetch the list of users when the component mounts
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/useranimalinvest/fetchUsersNotifications');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleNotificationSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/useranimalinvest/adnotification', { message, userId });
            console.log(response);
            setStatus(`Notification sent successfully to ${userId === 'all' ? 'all users' : `user ${userId}`}`);
            setMessage(''); // Clear the input fields
            setUserId('all');  // Reset to default 'all'
        } catch (error) {
            console.error('Error sending notification:', error);
            setStatus('Error sending notification');
        }
    };

    return (
        <>
            <div className='Admindashboardcon'>
                <div className='Adminparentdiv'>
                    <div className='Admininnerfirstdiv bg-light fw-bold'>
                        <Adminsidebar />
                    </div>
                    <div className='Admininnerseconddiv'>
                        <div className='text-center mt-4'>
                            <h2>Admin Notification</h2>
                        </div>
                        <div className='border p-4 col-md-7 col-sm-12 mx-auto border-light rounded-3 shadow-lg'>
                            <form onSubmit={handleNotificationSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor='userId' className='form-label'>
                                        User ID:
                                    </label>
                                    <select
                                        id='userId'
                                        className='form-control'
                                        value={userId}
                                        onChange={(e) => setUserId(e.target.value)}
                                    >
                                        <option value="all">All Users</option>
                                        {users.map(user => (
                                            <option key={user._id} value={user._id}>

                                                <div className='border'>
                                                    <div>
                                                        {user.Email}
                                                    </div>
                                                    <div>
                                                        {user.Fullname}
                                                    </div>
                                                </div>

                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='notificationMessage' className='form-label'>
                                        Notification Message:
                                    </label>
                                    <textarea
                                        id='notificationMessage'
                                        className='form-control'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows='3'
                                        required
                                    ></textarea>
                                </div>
                                <div className='text-center'>
                                    <button type='submit' className='btn btn-primary'>
                                        Send Notification
                                    </button>
                                </div>
                            </form>
                            {status && <p className='mt-3'>{status}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;
