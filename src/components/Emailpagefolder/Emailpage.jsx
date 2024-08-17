import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from "yup";
import { useNavigate } from 'react-router';
import Loader from '../Loaderfolder/Loaderpage';

const Emailpage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            emailpage: ""
        },
        validationSchema: Yup.object({
            emailpage: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            setLoading(true);
            axios.post("https://petportbackend.onrender.com/useranimalinvest/emailpage", { Emailpage: values.emailpage}).then((response) => {
                const { status, message } = response.data;
                setLoading(false);
                Swal.fire({
                    title: "",
                    text: message,
                    icon: status ? "success" : "warning",
                    button: status ? "Okay" : "Aww yiss!",
                });
                if (status) {
                    navigate("/forgetpassword");
                }
            }).catch((err) => {
                console.error(err);
                setLoading(false);
                Swal.fire({
                    title: "",
                    text: err.response ? err.response.data.message : "An error occurred",
                    icon: "error",
                    button: "Aww yiss!",
                });
            });
        }
    });

    return (
        <>
            {loading && <Loader />}
            <form onSubmit={formik.handleSubmit}>
                <div className='coverupemail'>
                    <div className='mymaildiv'>
                        <div className='mymaileachdiv'></div>
                        <div className='mymaileachdiv2 shadow-lg'>
                            <div className="mailform">
                                <div>
                                    <p>Enter your email address in the input provided</p>
                                </div>
                                <div>
                                    <input className="mailinput mt-3" onChange={formik.handleChange} name='emailpage' value={formik.values.emailpage} placeholder="Email address" required="" type="text" />
                                    <span className="input-border1"></span>
                                </div>
                                <div className='text-danger text-end' style={{ position: "absolute", right: "0px" }}>
                                    {formik.errors.emailpage}
                                </div>
                                <div className='mt-5 MailBtnStyle'>
                                    <button className='btn btn-dark MailBtnStyle2' >Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Emailpage;
