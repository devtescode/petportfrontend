import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ expiryTime }) => {
    const [timeLeft, setTimeLeft] = useState(expiryTime - Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(expiryTime - Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, [expiryTime]);

    const formatTimeLeft = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}m ${seconds}s`;
    };

    return (
        <div>
            {timeLeft > 0 ? (
                <p>Time left: {formatTimeLeft(timeLeft)}</p>
            ) : (
                <p>Expired</p>
            )}
        </div>
    );
};

export default CountdownTimer;
