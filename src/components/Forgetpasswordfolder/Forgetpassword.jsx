import React, { useState } from 'react'
import * as Yup from "yup"
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Loader from '../Loaderfolder/Loaderpage'
const Forgetpassword = () => {
    const [loading, setLoading] = useState(false);
    
    return (
     // {loading && <Loader/>}
   <form onSubmit={formik.handleSubmit}>
       <div className='mycondiv'>
           <div className='myeachdiv'></div>
           <div className='myeachdiv2 shadow-lg'>
               <div className='text-center mt-3 taketop'>
                   <h3>Email Verification</h3>
                   <p>We have sent a code to your email</p>
               </div>
               <div className='input-container mx-auto forgetinputwidthdiv mt-4'>
                   <input className='forgetinputwidth' onChange={formik.handleChange} name='forgetemailpage1' value={formik.values.forgetemailpage1} maxLength={4} type="text" placeholder='OTP' />
                   <input className='forgetinputwidth' onChange={formik.handleChange} name='forgetemailpage2' value={formik.values.forgetemailpage2} type="text" placeholder='Password' />
                   <input className='forgetinputwidth' onChange={formik.handleChange} name='forgetemailpage3' value={formik.values.forgetemailpage3} type="text" placeholder='Confirm Password' />
               </div>
               <div className='text-center mt-3'>
                   <button className='btn btn-dark w-75 p-2 styleBtn'>Verify Account</button>
               </div>
           </div>
       </div>
   </form>
  )
}

export default Forgetpassword