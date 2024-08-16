import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar';

const Notification = () => {
    const [message, setMessage] = useState('');
    const [userId, setUserId] = useState('all');
    const [users, setUsers] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [status, setStatus] = useState('');

    const fetchNotifications = async () => {
        try {
            const response = await axios.get('http://localhost:5000/useranimalinvest/getallnotifications');
            setNotifications(response.data.notifications);
        } catch (error) {
            console.error('Error fetching notifications:', error);
        }
    };
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
        fetchNotifications();
    }, []);

    const handleNotificationSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/useranimalinvest/adnotification', { message, userId });
            console.log('Response:', response);
    
            // Check if the response status is within the success range
            if (response.status >= 200 && response.status < 300) {
                setStatus(`Notification sent successfully to ${userId === 'all' ? 'all users' : `user ${userId}`}`);
                setMessage(''); // Clear the input fields
                setUserId('all');  // Reset to default 'all'
                fetchNotifications(); // Refresh the notification list after sending
            } else {
                console.error('Unexpected response status:', response.status);
                setStatus('Error sending notification');
            }
        } catch (error) {
            console.error('Error sending notification:', error);
            setStatus('Error sending notification');
        }
    };
    

    const handleDeleteNotification = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/useranimalinvest/deletenotification/${id}`);
            setNotifications(notifications.filter(notification => notification._id !== id));
            setStatus('Notification deleted successfully');
        } catch (error) {
            console.error('Error deleting notification:', error);
            setStatus('Error deleting notification');
        }
    };

    const getUserFullnameById = (id) => {
        const user = users.find(user => user._id === id);
        return user ? user.Fullname : 'Unknown User';
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
                                                {user.Email} - {user.Fullname}
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

                        <div className='mt-4'>
                            <h3>Sent Notifications</h3>
                            <ul className='list-group'>
                                {notifications.map(notification => (
                                    <li key={notification._id} className='list-group-item d-flex justify-content-between align-items-center'>
                                        <div className='fs-4'>
                                            <p>{notification.message}</p>
                                            <small>
                                                {notification.userId === 'all'
                                                    ? "Sent to: All Users"
                                                    : `Sent to: ${getUserFullnameById(notification.userId)}`}
                                            </small>
                                            <br />
                                            <small>{new Date(notification.createdAt).toLocaleString()}</small>
                                        </div>
                                        <button 
                                            className='btn btn-danger btn-sm'
                                            onClick={() => handleDeleteNotification(notification._id)}
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Notification;
