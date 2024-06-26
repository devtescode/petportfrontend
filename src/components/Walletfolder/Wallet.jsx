import React, { useState } from 'react'
import Sidenav from '../Sidenavbarfolder/Sidenav'
import axios from 'axios';
import CountdownTimer from '../Timer/CountdownTimer';

const Wallet = ({ userId }) => {
    const [amount, setAmount] = useState('');
    const [accountDetails, setAccountDetails] = useState(null);
    const [error, setError] = useState('');

    const handleFundAccount = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        try {
            console.log(`Sending POST request to fund account with userId: ${userId} and amount: ${amount}`);
            const response = await axios.post('http://localhost:5000/useranimalinvest/fundaccount', { userId, amount });
            console.log('Response received:', response.data);
            setAccountDetails(response.data.accountDetails);
        } catch (err) {
            console.error('Error funding account:', err);
            setError('Error funding account');
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
                <form onSubmit={handleFundAccount}>
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
                )}
            </div>
        </>
    )
}

export default Wallet