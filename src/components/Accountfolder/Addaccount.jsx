import React, { useState } from 'react';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { API_URLS } from '../../utils/apiConfig';
import Data from '../../../Data.json';
// import swal from 'sweetalert'; // Ensure swal is imported

const Addaccount = () => {
    const [account, setAccount] = useState('');
    const [isProcessing, setIsProcessing] = useState(false); // Loading state

    const formik = useFormik({
        initialValues: {
            accountnumber: "",
            selectaccount: "",
        },
        validationSchema: Yup.object({
            accountnumber: Yup.number().typeError('Must be a number').required('Required'),
            selectaccount: Yup.string().required('Required'),
        }),
        onSubmit: async (values) => {
            setIsProcessing(true);
            const selectedBank = Data.banks.find((item) => item.code === values.selectaccount);

            if (!selectedBank) {
                console.error('Bank not found for the provided code:', values.selectaccount);
                swal({
                    title: "Error",
                    text: "Selected bank is invalid.",
                    icon: "error",
                    button: "OK",
                });
                setIsProcessing(false);
                return;
            }

            try {
                const response = await axios.post(API_URLS.addupaccount, {
                    AccountNumber: values.accountnumber,
                    Bankcode: values.selectaccount,
                    bank: selectedBank.name,
                    token: localStorage.token
                });

                if (response.data.status === true) {
                    setAccount(response.data.accountName);
                    Swal.fire({
                        title: "Success",
                        text: "Account successfully added.",
                        icon: "success",
                        button: "OK",
                    });
                    formik.resetForm();
                } else {
                    Swal.fire({
                        title: "Error",
                        text: response.data.message || "Failed to add account.",
                        icon: "error",
                        button: "OK",
                    });
                }
            } catch (err) {
                const errorMsg = err.response?.data?.error || err.response?.data?.message || "Something went wrong!";
                Swal.fire({
                    title: "Error",
                    text: errorMsg,
                    icon: "error",
                    button: "OK",
                });
                console.error("Error occurred:", errorMsg);
            } finally {
                setIsProcessing(false);
            }
        }
    });

    return (
        <>
            <Sidenav />
            <div className='alldivcontainers'>
                <div className='d-flex' style={{ alignItems: "center" }}>
                    <div className="col-md-7 col-sm-12 shadow-lg mx-auto p-2">
                        <div>
                            <h1>Add Account</h1>
                            <form onSubmit={formik.handleSubmit}>
                                <input
                                    onChange={formik.handleChange}
                                    name='accountnumber'
                                    value={formik.values.accountnumber}
                                    type="text"

                                    placeholder='Account Number'
                                    onBlur={formik.handleBlur}
                                    className={`form-control my-2 p-1 ${(formik.values.accountnumber && !formik.errors.accountnumber) ||
                                        (formik.touched.accountnumber && formik.values.accountnumber && formik.errors.accountnumber && formik.touched.accountnumber && formik.values.accountnumber)
                                        ? 'is-valid'
                                        : formik.values.accountnumber || formik.touched.accountnumber
                                            ? 'is-invalid'
                                            : ''
                                        }`}
                                />
                                {/* {formik.touched.accountnumber && formik.errors.accountnumber ? (
                                    <div className="text-danger">{formik.errors.accountnumber}</div>
                                ) : null} */}
                                <select
                                    name="selectaccount"
                                    onChange={formik.handleChange}
                                    value={formik.values.selectaccount}
                                    onBlur={formik.handleBlur}

                                    // className=""

                                    className={`form-control my-2 p-1  my-2 form-select form-select-lg ${(formik.values.selectaccount && !formik.errors.selectaccount) ||
                                        (formik.touched.selectaccount && formik.values.selectaccount && formik.errors.selectaccount && formik.touched.selectaccount && formik.values.selectaccount)
                                        ? 'is-valid'
                                        : formik.values.selectaccount || formik.touched.selectaccount
                                            ? 'is-invalid'
                                            : ''
                                        }`}
                                    aria-label="Large select example"
                                >
                                    <option value="">Select Bank</option> {/* Add a default option */}
                                    {Data.banks.map((item, index) => (
                                        <option key={index} value={item.code}>{item.name}</option>
                                    ))}
                                </select>
                                {/* {formik.touched.selectaccount && formik.errors.selectaccount ? (
                                    <div className="text-danger">{formik.errors.selectaccount}</div>
                                ) : null} */}

                                <input
                                    disabled
                                    placeholder="Account Name"
                                    className="my-2 input-field text-center fw-bold form-control"
                                    type="text"
                                    value={account}
                                />
                                <div className='text-center'>
                                    <button
                                        className='btn btn-primary'
                                        type='submit'
                                        disabled={isProcessing} // Disable button while processing
                                    >
                                        {isProcessing ? "Adding..." : "Add Account"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addaccount;
