import React, { useState, useEffect } from 'react';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import axios from 'axios';
import "./Usernotification.css";

const Usernotification = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                
                const userData = JSON.parse(localStorage.getItem("UserData"));
                const userId = userData.userId;
                console.log(userId);
                        
                // const response = await axios.get(`http://localhost:5000/useranimalinvest/getusernotification`, );

                const response = await axios.get(`http://localhost:5000/useranimalinvest/getusernotification`, {
                    params: { userId }  // Pass userId as a query parameter
                });

                setNotifications(response.data.notification); // Assuming the API returns an array of notifications
                console.log("Received Notifications: ", response.data.notification);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching notifications:', error);
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []); // Empty dependency array to ensure this runs once on component mount

    if (loading) {
        return <div className='text-center'>Loading notifications...</div>;
    }

    return (
        <>
            <Sidenav />
            <div className='alldivcontainers'>
                <div className=''>
                    <h2 className="mt-1">Notifications</h2>
                    <ul className="notification-list shadow-lg p-4">
                        {notifications.length > 0 ? (
                            notifications.map(notification => (
                                <li key={notification._id} className="notification-item">
                                    <p>{notification.message}</p>
                                    <small>{new Date(notification.createdAt).toLocaleString()}</small>
                                </li>
                            ))
                        ) : (
                            <p>No notifications available.</p>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Usernotification;
