import React, {useEffect, useState} from 'react'
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar'
import { useNavigate } from 'react-router'
import axios from 'axios'


const AdminDashboard = () => {
  let admintoken = localStorage.admintoken
  let navigate = useNavigate()
  const [admin, setadmin] = useState("")
  let url = "http://localhost:5000/useranimalinvest/Admindb"
  useEffect(() => {
    axios.get(url, {
      headers: {
        "Authorization": `Bearers ${admintoken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
      .then((response) => {
        console.log(response.data);
        if (!localStorage.adminlogin || response.data.status === false) {
          navigate("/adminreg")
        }
        else{
          setadmin(response.data.user)
          console.log(response.data.user.Fullname);
        }   
      }).catch(err => {
        console.log(err);
      })
  })

  return (
    <>
      <div className='Admindashboardcon'>
        <div className='Adminparentdiv'>
          <div className='Admininnerfirstdiv bg-light fw-bold'>
            <div className=''>
              <Adminsidebar />
            </div>
          </div>
          <div className='Admininnerseconddiv'>
            <div className="container text-center p-5 shadow-lg">
              <div className='text-start fw-bold'>
                <p>Welcome back, {admin && admin?.Fullname}</p>
              </div>
              <div className="row gap-2" style={{ height: "200px" }}>
                <div className="col border d-flex justify-content-center rounded-3 bg-light" style={{ alignItems: "center" }}>
                  user
                </div>
                <div className="col border d-flex justify-content-center rounded-3" style={{ alignItems: "center" }}>
                  Column
                </div>
                <div className="col border d-flex justify-content-center rounded-3" style={{ alignItems: "center" }}>
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