import React, { useState } from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Loaderpage from '../Loaderfolder/Loaderpage';

const Forgetpassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            forgetemailpage1: "",
            forgetemailpage2: "",
            forgetemailpage3: "",
        },
        validationSchema: Yup.object({
            forgetemailpage1: Yup.string()
            .matches(/^[0-9]+$/, "Must be only digits")
            .required('Required'),
            forgetemailpage2: Yup.string().required('Required'),
            forgetemailpage3: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            setLoading(true);
            axios.post("http://localhost:5000/useranimalinvest/forgetpass", {
                Forgetmailone: values.forgetemailpage1,
                Forgetmailtwo: values.forgetemailpage2,
                Forgetmailthree: values.forgetemailpage3
            }).then((response) => {
                const successMessage = response.data.message;
                setLoading(false);
                Swal.fire({
                    title: "",
                    text: successMessage,
                    icon: response.data.status ? "success" : "warning",
                    button: response.data.status ? "Okay" : "Aww yiss!",
                });
                if (response.data.status) {
                    navigate("/login");
                }
            }).catch((err) => {
                console.error(err);
                const errorMessage = err.response ? err.response.data.message : "An error occurred";
                setLoading(false);
                Swal.fire({
                    title: "",
                    text: errorMessage,
                    icon: "error",
                    button: "Aww yiss!",
                });
            });
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='Forgetpassdiv'>
                {loading && <Loaderpage />}
                <div className='mycondiv'>
                    <div className='myeachdiv'></div>
                    <div className='myeachdiv2 shadow-lg'>
                        <div className='text-center mt-3 taketop'>
                            <h3>Email Verification</h3>
                            <p>We have sent a code to your email</p>
                        </div>
                        <div className='input-container mx-auto forgetinputwidthdiv mt-4'>
                            <input
                            maxLength={4} 
                            className={`forgetinputwidth form-control my-2 mx-auto ${(formik.values.forgetemailpage1 && !formik.errors.forgetemailpage1) ||
                                (formik.touched.forgetemailpage1 && formik.values.forgetemailpage1 && formik.errors.forgetemailpage1 && formik.touched.forgetemailpage1 && formik.values.forgetemailpage1)
                                ? 'is-valid'
                                : formik.values.forgetemailpage1 || formik.touched.forgetemailpage1
                                    ? 'is-invalid'
                                    : ''
                                }`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="forgetemailpage1"
                            value={formik.values.forgetemailpage1}
                              type="text" placeholder='OTP' />


                            <input 
                            className={`forgetinputwidth form-control my-2 mx-auto ${(formik.values.forgetemailpage2 && !formik.errors.forgetemailpage2) ||
                                (formik.touched.forgetemailpage2 && formik.values.forgetemailpage2 && formik.errors.forgetemailpage2 && formik.touched.forgetemailpage2 && formik.values.forgetemailpage2)
                                ? 'is-valid'
                                : formik.values.forgetemailpage2 || formik.touched.forgetemailpage2
                                    ? 'is-invalid'
                                    : ''
                                }`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="forgetemailpage2"
                            value={formik.values.forgetemailpage2}
                            type="text" placeholder='Password' />


                            <input 
                            className={`forgetinputwidth form-control my-2 mx-auto ${(formik.values.forgetemailpage3 && !formik.errors.forgetemailpage3) ||
                                (formik.touched.forgetemailpage3 && formik.values.forgetemailpage3 && formik.errors.forgetemailpage3 && formik.touched.forgetemailpage3 && formik.values.forgetemailpage3)
                                ? 'is-valid'
                                : formik.values.forgetemailpage3 || formik.touched.forgetemailpage3
                                    ? 'is-invalid'
                                    : ''
                                }`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name="forgetemailpage3"
                            value={formik.values.forgetemailpage3} 
                            type="text" placeholder='Confirm Password' />
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-dark styleBtn' type="submit">Verify Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Forgetpassword;
