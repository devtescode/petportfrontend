import React, { useEffect, useState } from 'react'
import Sidenav from '../Sidenavbarfolder/Sidenav'
import axios from 'axios';
import CountdownTimer from '../Timer/CountdownTimer';

const Wallet = ({ }) => {
    // const [amount, setAmount] = useState('');
    // const [accountDetails, setAccountDetails] = useState(null);
    // const [error, setError] = useState('');

    // const handleFundAccount = async (e) => {
    //     e.preventDefault();
    //     setError('');
    //     try {
    //         console.log(`Sending POST request to fund account with userId: ${userId} and amount: ${amount}`);
    //         const response = await axios.post('http://localhost:5000/useranimalinvest/fundaccount', { userId, amount });
    //         console.log('Response received:', response.data);
    //         setAccountDetails(response.data.accountDetails);
    //     } catch (err) {
    //         console.error('Error funding account:', err);
    //         setError('Error funding account');
    //     }
    // };

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
            const response = await axios.post('https://petportbackend.onrender.com/useranimalinvest/fundaccount', sendToBack);


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
            {/* <div className='alldivcontainers'>
                <h2 className='mt-1'>Wallet</h2>
                <div className='border col-md-6 col-sm-12 mx-auto' style={{ height: "100vh" }}>
                    <p>Dynamic account</p>
                    <div>
                        <input type="text" className='form-control my-2' />
                        <input type="text" className='form-control my-2' />
                        <input type="text" className='form-control my-2' />
                        <div className='text-center'>
                            <button className='btn btn-secondary'>Submit</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='alldivcontainers text-center'>
                {/* <form onSubmit={handleFundAccount}>
                    <label>
                        Amount:
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className='form-control'
                            required
                        />
                    </label>
                    <button type="submit" className='btn btn-dark'>Fund Account</button>
                </form>
                {error && <p>{error}</p>}
                {accountDetails && (
                    <div>
                        <p>Account Number: {accountDetails.accountNumber}</p>
                        <p>Expiry: {new Date(accountDetails.expiry).toLocaleTimeString()}</p>
                        <CountdownTimer expiryTime={accountDetails.expiry} />
                    </div>
                )} */}
                <h2>Fund Account</h2>
                <form onSubmit={handleSubmit}>
                    {/* <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div> */}
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