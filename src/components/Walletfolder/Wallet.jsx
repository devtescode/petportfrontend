import React from 'react'
import Sidenav from '../Sidenavbarfolder/Sidenav'

const Wallet = () => {
    return (
        <>
            <Sidenav />
            <div className='alldivcontainers'>
                <h2 className='mt-1'>Wallet</h2>
                <div className='border col-md-6 col-sm-12 mx-auto' style={{ height: "100vh" }}>
                    <p>Dynamic account</p>
                    <div>
                        <input type="text" className='form-control my-2' />
                        <input type="text" className='form-control my-2' />
                        <input type="text" className='form-control my-2' />
                        <div className='text-center'>
                            <button className='btn btn-secondary'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wallet