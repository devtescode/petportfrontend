import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { useNavigate } from 'react-router'
import Loader from '../Loaderfolder/Loaderpage'

const Adminregister = () => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    localStorage.removeItem("adminlogin")
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            Email: "",
            password: "",
        },
        validationSchema: Yup.object({
            Email: Yup.string()
                .required('Required'),
            password: Yup.string()
                .required('Required'),

        }),
        onSubmit: values => {
            setLoading(true);
            // Username: values.username, Password: values.password 
            axios.post("http://localhost:5000/useranimalinvest/adminlogin", { Email: values.Email, password: values.password })
                .then((response) => {
                    console.log(response);
                    swal.fire({
                        title: "",
                        text: response.data.message,
                        icon: "error",
                        button: "Aww yiss!",
                    });

                    if (response.data.status == true) {
                        localStorage.admintoken = response.data.admintoken
                        swal.fire({
                            title: "Success",
                            text: response.data.message,
                            icon: "success",
                            button: "Okay",
                        });
                        navigate("/admindb")
                        localStorage.setItem("adminlogin", true)
                    }
                })
            setTimeout(() => {
                setLoading(false);
            }, 6000);
        }
    })
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:5000/useranimalinvest/adminlogin', { Email, password });

    //         console.log('Response:', response);

    //         const { admintoken, role } = response.data;
    //         if (role === 'admin') {
    //             localStorage.setItem('adminToken', admintoken);
    //             alert('Admin login successful');
    //             navigate('/admindb')
    //         } else {
    //             localStorage.setItem('userToken', admintoken);
    //             alert('User login successful');
    //             console.log(admintoken);
    //         }
    //         setToken(token);   
    //     } catch (error) {
    //         console.error('Error during login:', error);
    //         if (error.response) {
    //             setError(error.response.data);
    //         } else {
    //             setError('An error occurred during login');
    //         }
    //     }
    // };

    return (
        <>
            {/* <input type="text" />
    <input type="text" />
    <input type="text" /> */}
            {loading && <Loader />}
            <div className='AdminContainer'>
                <div className='AdminInner'>
                    <div className='eachDiv'>
                        <div className='w-100'>
                            <div className='fs-2 text-center'>
                                <b>Admin-Panal</b>
                            </div>
                            <div className='p-0 p-sm-2'>
                                <form action="" onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input type="text" placeholder='Email-Address' className='form-control my-2' onChange={formik.handleChange} name='Email' value={formik.values.Email} />
                                        <input type="text" placeholder='Password' className='form-control my-2' onChange={formik.handleChange} name='password' value={formik.values.password} />
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