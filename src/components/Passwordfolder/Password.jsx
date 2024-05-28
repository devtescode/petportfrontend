import React from 'react'
import Sidenav from '../Sidenavbarfolder/Sidenav'
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from "yup"


const Password = () => {

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
            let token = localStorage.token
            axios.post("http://localhost:5000/useranimalinvest/changepassword", { OldPassword: values.OldPassword, NewPassword: values.NewPassword, token })
                .then((response) => {
                    // alert(response.data.message)
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: response.data.message,
                    });
                    resetForm();

                    if (response.data.status === true) {
                        resetForm();
                        Swal.fire({
                            icon: "success",
                            title: "Success",
                            text: response.data.message,
                        });
                    }
                })

        }
    })
    return (
        <>
            <Sidenav />
            <form action="" onSubmit={formik.handleSubmit}>
                <div className='alldivcontainers'>
                    <div className='col-md-6 col-sm-6 border p-3 mx-auto shadow rounded-2' style={{ alignItems: "center", marginTop: "100px" }}>
                        <div className=''>
                            <h1>Password</h1>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='Old Password'
                                className={`form-control p-2 my-2 ${formik.values.OldPassword && !formik.errors.OldPassword ? 'is-valid' : formik.touched.OldPassword && formik.errors.OldPassword ? 'is-invalid' : ''}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="OldPassword"
                                value={formik.values.OldPassword}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder='New Password'
                                className={`form-control p-2 my-2 ${formik.values.NewPassword && !formik.errors.NewPassword ? 'is-valid' : formik.touched.NewPassword && formik.errors.NewPassword ? 'is-invalid' : ''}`}
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
    )
}

export default Password