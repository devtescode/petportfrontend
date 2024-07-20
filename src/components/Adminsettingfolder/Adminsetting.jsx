import React from 'react'
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar'

const Adminsetting = () => {
    
    return (
        <>
            <Adminsidebar />
            <div>Adminsetting</div>


            <div className='Admindashboardcon'>
                <div className='Adminparentdiv'>
                    <div className='Admininnerfirstdiv bg-light fw-bold'>
                        <div className=''>
                            <Adminsidebar />
                        </div>
                    </div>
                    <div className='Admininnerseconddiv shadow-lg'>
                        <div className='h-100 shadow-lg'>
                            <div className='shadow border border-1 border-light mx-auto col-md-7 col-sm-12 h-75 d-flex' style={{alignItems:"center"}}>
                                <div className='w-100'>
                                    <div className='text-center'>
                                        <h2 className=''>Security</h2>
                                    </div>
                                    <div >
                                        <div>
                                            <input type="text" placeholder='Old Password' className='form-control my-1 p-2' />
                                        </div>
                                        <div>
                                            <input type="text" placeholder='New Password' className='form-control my-2 p-2' />
                                        </div>
                                        <div className='text-center'>
                                            <button className='btn btn-primary'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminsetting