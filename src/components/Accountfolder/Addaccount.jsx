import React, { useState } from 'react'
import Sidenav from '../Sidenavbarfolder/Sidenav'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import { API_URLS } from '../../utils/apiConfig'

import Data from '../../../Data.json';

const Addaccount = () => {
    const [account, setAccount] = useState('');
    const formik = useFormik({
        initialValues: {
            accountnumber: "",
            selectaccount: "",
        },
        validationSchema: Yup.object({
            accountnumber: Yup.number().typeError('Must be a number').required('Required'),
            selectaccount: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            const selectedBank = Data.banks.find((item) => item.code === values.selectaccount);


            if (!selectedBank) {
                console.error('Bank not found for the provided code:', values.selectaccount);
                // setIsProcessing(false);
                return;
            }
            const nameit = selectedBank.name;
            axios.post(API_URLS.addupaccount, {
                AccountNumber: values.accountnumber,
                Bankcode: values.selectaccount,
                bank: nameit,
                token: localStorage.token
            })
                .then((response) => {
                    if (response.data.status === true) {
                        setAccount(response.data.accountName);
                        console.log(response.data.accountName);
                    }
                })
                .catch((err) => {
                    // swal({
                    //     title: "",
                    //     text: err.response.data.error || "Something went wrong!",
                    //     icon: "error",
                    //     button: "Aww yiss!",
                    // });

                    // console.error("Error occurred", err.response.data.error);
                    console.log(err);

                })
        }
    })
    return (
        <>
            <Sidenav />
            <div className='alldivcontainers'>
                <div className=' d-flex' style={{ alignItems: "center" }}>
                    <div className="col-md-7  col-sm-12 shadow-lg mx-auto p-2">
                        <div>
                            <div>
                                <h1>Add Account</h1>
                            </div>

                            <form onSubmit={formik.handleSubmit}>
                                <input onChange={formik.handleChange} name='accountnumber' value={formik.values.accountnumber} type="text" className='my-2 form-control p-1' placeholder='Account Number' />

                                <select name="selectaccount" onChange={formik.handleChange} value={formik.values.selectaccount} className="my-2      form-select form-select-lg" aria-label="Large select example">
                                    {Data.banks.map((item, index) => (
                                        <option key={index} value={item.code}>{item.name}</option>
                                    ))}
                                </select>

                                <input disabled placeholder="Account Name" className="my-2 input-field text-center fw-bold form-control" type="text" value={account} />
                                <div className='text-center'>
                                    <button className='btn btn-primary' type='submit'>Add Account</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Addaccount