import React from 'react'

const AdminDashboard = () => {
  return (
    <>
      <div className='Admindashboardcon'>
        <div className='Adminparentdiv'>
          <div className='Admininnerfirstdiv'>
            <div className='fs-4'>
              <p>Admin panel</p>
            </div>
            <div className=''>
              <div className='d-flex fs-3  rounded-2 my-3 justify-content-center' style={{ cursor: "pointer" }}>
                <div className=''><i class="ri-home-line"></i></div>
                <div className='mx-1'>Home</div>
              </div>

              <div className='d-flex fs-3  rounded-2 my-3 justify-content-center' style={{ cursor: "pointer" }}>
                <div className=''><i class="ri-home-line"></i></div>
                <div className='mx-1'>Home</div>
              </div>

              <div className='d-flex fs-3  rounded-2 my-3 justify-content-center' style={{ cursor: "pointer" }}>
                <div className=''><i class="ri-home-line"></i></div>
                <div className='mx-1'>Home</div>
              </div>

              <div className='d-flex fs-3  rounded-2 my-3 justify-content-center' style={{ cursor: "pointer" }}>
                <div className=''><i class="ri-home-line"></i></div>
                <div className='mx-1'>Home</div>
              </div>

              <div className='d-flex fs-3  rounded-2 my-3 justify-content-center' style={{ cursor: "pointer" }}>
                <div className=''><i class="ri-home-line"></i></div>
                <div className='mx-1'>Home</div>
              </div>
            </div>

          </div>
          <div className='Admininnerseconddiv'>
            <div class="container text-center">
              <div class="row mt-5" style={{height:"100px"}}>
                <div class="col border d-flex justify-content-center" style={{alignItems:"center"}}>
                  Column
                </div>
                <div class="col border d-flex justify-content-center" style={{alignItems:"center"}}>
                  Column
                </div>
                <div class="col border d-flex justify-content-center" style={{alignItems:"center"}}>
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