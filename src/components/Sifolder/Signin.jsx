import { useFormik } from 'formik'
import * as Yup from "yup"
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Signup = () => {
    // const [action, setaction] = useState("Sign Up")
    localStorage.removeItem("useradminlogin")
    const navigate = useNavigate()
    const SignUpRouting = () => {
        navigate("/signup")
    }
    const ForgetRouting = () => {
        alert("Forget password confirmation")
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
            console.log(values)
            axios.post("http://localhost:5000/useranimalinvest/signin", { Email: values.Email, Password: values.Password })
                .then((response) => {
                    alert(response.data.message)
                    if (response.data.status === true) {
                        // alert(response.data.message)
                        // navigate("/dashboard")

                        localStorage.token = response.data.token
                        navigate("/dashboard")
                        localStorage.setItem("useradminlogin", true)
                    }
                })
        }
    })
    return (
        <>
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