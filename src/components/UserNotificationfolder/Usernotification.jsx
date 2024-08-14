import React, { useState, useEffect } from 'react';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import axios from 'axios';
import "./Usernotification.css";

const Usernotification = () => {
    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/useranimalinvest/getusernotification`);
             
            } catch (error) {
                console.error('Error fetching notifications:', error);
                setLoading(false);
            }
        };

        fetchNotifications();
    }, );

    return (
        <>
            <Sidenav />
            <div className='alldivcontainers'>
                <div className=''>
                    <h2 className="mt-1">Notifications</h2>
                   
                </div>
            </div>
        </>
    );
}

export default Usernotification;
