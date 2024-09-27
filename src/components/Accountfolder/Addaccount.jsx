import React from 'react'
import Sidenav from '../Sidenavbarfolder/Sidenav'

const Addaccount = () => {
    return (
        <>
            <Sidenav />
            <div className='alldivcontainers'>
                <div className=' d-flex' style={{ alignItems:"center"}}>
                <div className="col-md-7  col-sm-12 shadow-lg mx-auto p-2">
                    <div>
                        <div>
                            <h1>Add Account</h1>
                        </div>
                        <input type="text" className='my-2 form-control p-1' placeholder='Account Number' />
                        <input type="text" className='my-2 form-control p-1' placeholder='Bank name' />
                        <input type="text" disabled className='my-2 form-control p-1' placeholder='person name' />
                        <div className='text-center'>
                            <button className='btn btn-primary'>Add Account</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Addaccount