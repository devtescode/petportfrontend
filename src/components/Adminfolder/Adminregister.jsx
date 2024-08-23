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
            axios.post("https://petportbackend.onrender.com/useranimalinvest/adminlogin", { Email: values.Email, password: values.password })
                .then((response) => {
                    // console.log(response);
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
            }, 2000);
        }
    })

    return (
        <>
            {loading && <Loader />}
            <div className='AdminContainer'>
                <div className='AdminInner'>
                    <div className='eachDiv'>
                        <div className='w-100'>
                            <div className='fs-1 text-center'>
                                <b style={{color:"#262D47"}} className=''>Admin-Panel</b>
                            </div>
                            <div className='p-0 p-sm-2 mt-5 mt-sm-0'>
                                <form action="" onSubmit={formik.handleSubmit}>
                                    <div>
                                        <div className='mb-2'>
                                            <label htmlFor="">Email-Address</label>
                                            <input type="text" placeholder='Email-Address' className='form-control p-2' onChange={formik.handleChange} name='Email' value={formik.values.Email} />
                                        </div>

                                        <div className='mb-2'>
                                            <label htmlFor="" >Password</label>
                                            <input type="text" placeholder='Password' className='form-control  p-2' onChange={formik.handleChange} name='password' value={formik.values.password} />
                                        </div>
                                    </div>
                                    {error && <p>{error}</p>}
                                    <div className='text-center'>
                                        <button className='btn btn-secondary' type="submit" style={{backgroundColor:"#262D47"}}>Login</button>
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