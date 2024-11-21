import React from 'react';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { API_URLS } from '../../utils/apiConfig';
const UserPasswordChange = () => {
    const formik = useFormik({
        initialValues: {
            OldPassword: "",
            NewPassword: "",
        },
        validationSchema: Yup.object({
            OldPassword: Yup.string()
                .required("Password is required"),
            NewPassword: Yup.string()
                .required("Password is required"),
        }),
        onSubmit: (values, { resetForm }) => {
            let token = localStorage.getItem('token');
            if (!token) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'User token not found. Please log in again.',
                });
                return;
            }
            axios.post(API_URLS.changepassword, { OldPassword: values.OldPassword, NewPassword: values.NewPassword, token })
                .then((response) => {
                    if (response.data.status) {
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: response.data.message,
                        });
                        resetForm();
                    } else {
                        Swal.fire({
                            icon: "warning",
                            title: "Oops...",
                            text: response.data.message,
                        });
                    }
                }).catch(error => {
                    Swal.fire({
                        icon: "error",
                        title: "Error Occurred",
                        text: 'An error occurred while changing the password.',
                    });
                });
        }
    });

    
    return (
        <>
            <Sidenav />
            <form onSubmit={formik.handleSubmit}>
                <div className='alldivcontainers'>
                    <div className='col-md-7 col-sm-6 p-2 mx-auto shadow rounded-2' style={{ alignItems: "center" }}>
                        <div className=''>
                            <h1>Password</h1>
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder='Old Password'
                                className={`form-control p-1 my-2 ${formik.values.OldPassword && !formik.errors.OldPassword ? 'is-valid' : formik.touched.OldPassword && formik.errors.OldPassword ? 'is-invalid' : ''}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="OldPassword"
                                value={formik.values.OldPassword}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder='New Password'
                                className={`form-control p-1 my-2 ${formik.values.NewPassword && !formik.errors.NewPassword ? 'is-valid' : formik.touched.NewPassword && formik.errors.NewPassword ? 'is-invalid' : ''}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="NewPassword"
                                value={formik.values.NewPassword}
                            />
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default UserPasswordChange;
