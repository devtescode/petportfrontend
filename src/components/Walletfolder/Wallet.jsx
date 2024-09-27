import React, { useEffect, useState } from 'react'
import Sidenav from '../Sidenavbarfolder/Sidenav'
import axios from 'axios';
import CountdownTimer from '../Timer/CountdownTimer';

const Wallet = ({ }) => {

    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [getUser, setUser] = useState([]);

    useEffect(() => {
        const getUserFromLocal = JSON.parse(localStorage.getItem('UserData'));
        console.log(getUserFromLocal);

        if (!getUserFromLocal || getUserFromLocal.lenght === 0) {
            alert('User not found, please log in again');
        }
        else {
            setUser(getUserFromLocal);
        }

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sendToBack = {
            email: getUser.email,
            amount: parseInt(amount, 10)
        };
        console.log(sendToBack);
        try {
            const response = await axios.post('http://localhost:5000/useranimalinvest/fundaccount', sendToBack);


            if (response.data.status) {
                setMessage('Account funded successfully');
            } else {
                setMessage('Funding failed');
            }
        } catch (error) {
            console.error('Error funding account:', error);
            setMessage('An error occurred while funding the account');
        }
    };



    return (
        <>
            <Sidenav />
         
            <div className='alldivcontainers text-center'>
                
                <h2>Fund Account</h2>
                <form onSubmit={handleSubmit}>
                
                    <div>
                        <label>Amount:</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Fund Account</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </>
    )
}

export default Wallet