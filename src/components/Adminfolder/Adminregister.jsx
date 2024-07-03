import axios from 'axios';
import React, { useState } from 'react'

const Adminregister = () => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/useranimalinvest/adminlogin', { Email, password });
            // const { admintoken } = response.data;
            // localStorage.setItem('adminToken', admintoken);
            // setToken(admintoken);  // Assuming you have a method to set token in a context or state
            // alert('Login successful');
            // console.log(response);
            const { admintoken, role } = response.data;
            if (role === 'admin') {
                localStorage.setItem('adminToken', admintoken);
                alert('Admin login successful');
            } else {
                localStorage.setItem('adminToken', admintoken);
                alert('User login successful');
                setToken(admintoken);   
                console.log(admintoken);
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data);
            } else {
                setError('An error occurred during login');
            }
        }
    };

    return (
        <>
            {/* <input type="text" />
    <input type="text" />
    <input type="text" /> */}
            <div className='AdminContainer'>
                <div className='AdminInner'>
                    <div className='eachDiv'>
                        <div className='w-100'>
                            <div className='fs-2 text-center'>
                                <b>Admin-Panal</b>
                            </div>
                            <div className='p-0 p-sm-2'>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input type="text" placeholder='Email-Address' className='form-control my-2'  value={Email} onChange={(e) => setEmail(e.target.value)}/>
                                        <input type="text" placeholder='Password' className='form-control my-2' value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    {error && <p>{error}</p>}
                                    <div className='text-center'>
                                        <button className='btn btn-secondary' type="submit">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='eachDiv2'>
                        {/* <h1>second</h1> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminregister