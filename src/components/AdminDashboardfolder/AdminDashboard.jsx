import React from 'react'
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar'


const AdminDashboard = () => {

  
  return (
    <>
      <div className='Admindashboardcon'>
        <div className='Adminparentdiv'>
          <div className='Admininnerfirstdiv bg-light fw-bold'>
            <div className=''>
             <Adminsidebar/>
            </div>
          </div>
          <div className='Admininnerseconddiv'>
           
            <div class="container text-center p-5 shadow-lg">
              <div class="row gap-2" style={{ height: "200px" }}>
                <div class="col border d-flex justify-content-center rounded-3 bg-light" style={{ alignItems: "center" }}>
                  user
                </div>
                <div class="col border d-flex justify-content-center rounded-3" style={{ alignItems: "center" }}>
                  Column
                </div>
                <div class="col border d-flex justify-content-center rounded-3" style={{ alignItems: "center" }}>
                  Column
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard