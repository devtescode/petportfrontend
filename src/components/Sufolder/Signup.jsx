import { useFormik } from 'formik'
import * as Yup from "yup"
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [action, setaction] = useState("Sign Up")
    const navigate = useNavigate()
    const LoginRouting = () => {
        navigate("/login")
    }
    const formik = useFormik({
        initialValues: {
            Fullname: "",
            Number: "",
            Email: "",
            Password: "",
        },
        validationSchema: Yup.object({
            Fullname: Yup.string()
               .required("Fullname is required"),
               Number: Yup.string()
               .required("Number is required"),
               Email: Yup.string()
               .required("Email is required"),
               Password: Yup.string()
               .required("Email is required"),
        }),
        onSubmit: (values) => {
            // console.log(values)
            axios.post("http://localhost:5000/useranimalinvest/signup", {Fullname: values.Fullname, Number: values.Number, Email: values.Email, Password: values.Password})
            .then((response)=>{
                alert(response.data.message)
                if (response.data.status === true) {
                    alert(response.data.message)
                    navigate("/login")
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
                        <div className="text">Sign-Up</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        <div className="input p-2">
                            <div className='icon-input'>
                                <i class="ri-user-received-line"></i>
                            </div>
                            <input
                                type="text"
                                className={`form-control p-2 ${(formik.values.Fullname && !formik.errors.Fullname) ||
                                    (formik.touched.Fullname && formik.values.Fullname && formik.errors.Fullname && formik.touched.Fullname && formik.values.Fullname)
                                    ? 'is-valid'
                                    : formik.values.Fullname || formik.touched.Fullname
                                        ? 'is-invalid'
                                        : ''
                                    }`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="Fullname"
                                value={formik.values.Fullname}
                                placeholder="Fullname"
                            />
                        </div>

                        <div className="input">
                            <div className='icon-input'>
                            <i class="ri-phone-fill"></i>
                            </div>
                            <input
                                type="text"
                                className={`form-control p-2 ${(formik.values.Number && !formik.errors.Number) ||
                                    (formik.touched.Number && formik.values.Number && formik.errors.Number && formik.touched.Number && formik.values.Number)
                                    ? 'is-valid'
                                    : formik.values.Number || formik.touched.Number
                                        ? 'is-invalid'
                                        : ''
                                    }`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="Number"
                                value={formik.values.Number}
                                placeholder="Number"
                            />
                        </div>
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
                            <span>Alreadly have an account?</span> <span style={{ cursor: "pointer" }} onClick={LoginRouting}>Click Here</span>
                        </div>
                        <div className='d-flex'>
                            <div className="submit-container">
                                <button className='btn btn-primary' type='submit'>Sign Up</button>
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