import { useFormik } from 'formik'
import * as Yup from "yup"
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import Loaderpage from '../Loaderfolder/Loaderpage'

const Signup = () => {
    // const [action, setaction] = useState("Sign Up")
    localStorage.removeItem("useradminlogin")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const SignUpRouting = () => {
        navigate("/signup")
    }
    const ForgetRouting = () => {
        navigate("/emailpage")
    }
    const formik = useFormik({
        initialValues: {
            Email: "",
            Password: "",
        },
        validationSchema: Yup.object({
            Email: Yup.string()
                .required("Email is required"),
            Password: Yup.string()
                .required("Email is required"),
        }),
        onSubmit: (values) => {
            // console. log(values)
            setLoading(true);
            
            http://localhost:5000
            axios.post("https://petportbackend.onrender.com/useranimalinvest/signin", { Email: values.Email, Password: values.Password })
                .then((response) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: response.data.message,
                    });
                    if (response.data.status === true) {
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: response.data.message,
                        });
                        localStorage.setItem("UserData", JSON.stringify(response.data.userData));
                        localStorage.token = response.data.token
                        navigate("/db")
                        localStorage.setItem("useradminlogin", true)
                    }
                })
                .catch(error => {
                    console.error('There was an error occured', error);
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "There was an error occured",
                    });
                });
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    })
    

  
    return (
        <>
            {loading && <Loaderpage />}
            <form action="" onSubmit={formik.handleSubmit}>
                <div className='familycontainer'>
                    <div className="containerdiv">
                        <div className="header">
                            <div className="text">Sign-In</div>
                            <div className="underline"></div>
                        </div>
                        <div className="inputs">
                            <div className="input">
                                <div className='icon-input'>
                                    <i class="ri-mail-line"></i>
                                </div>
                                <input
                                    type="text"
                                    className={`form-control p-2 ${(formik.values.Email && !formik.errors.Email) ||
                                        (formik.touched.Email && formik.values.Email && formik.errors.Email && formik.touched.Email && formik.values.Email)
                                        ? 'is-valid'
                                        : formik.values.Email || formik.touched.Email
                                            ? 'is-invalid'
                                            : ''
                                        }`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="Email"
                                    value={formik.values.Email}
                                    placeholder="Email"
                                />
                            </div>

                            <div className="input">
                                <div className='icon-input'>
                                    <i class="ri-lock-2-line"></i>
                                </div>
                                <input
                                    type="text"
                                    className={`form-control p-2 ${(formik.values.Password && !formik.errors.Password) ||
                                        (formik.touched.Password && formik.values.Password && formik.errors.Password && formik.touched.Password && formik.values.Password)
                                        ? 'is-valid'
                                        : formik.values.Password || formik.touched.Password
                                            ? 'is-invalid'
                                            : ''
                                        }`}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    name="Password"
                                    value={formik.values.Password}
                                    placeholder="Password"
                                />
                            </div>

                            <div className='text-center'>
                                <div>
                                    <span>Don't have an account?</span> <span style={{ cursor: "pointer" }} onClick={SignUpRouting}>Click Here</span>
                                </div>
                                <div>
                                    <span style={{ cursor: "pointer" }} onClick={ForgetRouting}>Forget Password?</span>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className="submit-container">
                                    <button className='btn btn-primary' type='submit'>Login</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Signup