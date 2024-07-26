import React, { useEffect, useState } from 'react'
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar'
import { useNavigate } from 'react-router'
import axios from 'axios'


const AdminDashboard = () => {
  let admintoken = localStorage.admintoken
  let navigate = useNavigate()
  const [admin, setadmin] = useState("")
  const [userCount, setUserCount] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [totalAmountInvested, setTotalAmountInvested] = useState(0);
  const [Totalinvested, setTotalInvest] = useState(0);
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
        // console.log(response.data);
        if (!localStorage.adminlogin || response.data.status === false) {
          navigate("/adminreg")
        }
        else {
          setadmin(response.data.user)
          // console.log(response.data.user.Fullname);
        }
      }).catch(err => {
        console.log(err);
      })

    axios.get('http://localhost:5000/useranimalinvest/getuseranimalinvest', {
      headers: {
        "Authorization": `Bearers ${admintoken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
      .then((response) => {
        setUserCount(response.data.length);
      })
      .catch(err => {
        console.log(err);
      });

    axios.get('http://localhost:5000/useranimalinvest/totalbalance', {
      headers: {
        "Authorization": `Bearer ${admintoken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
      .then((response) => {
        setTotalBalance(response.data.totalBalance);
      }).catch(err => {
        console.log(err);
      });


    axios.get('http://localhost:5000/useranimalinvest/totalamountinvested', {
      headers: {
        "Authorization": `Bearer ${admintoken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
      .then((response) => {
        setTotalAmountInvested(response.data.totalAmountInvested);
      }).catch(err => {
        console.log(err);
      });


    axios.get('http://localhost:5000/useranimalinvest/Totalinvest', {
      headers: {
        "Authorization": `Bearer ${admintoken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    })
      .then((response) => {
        setTotalInvest(response.data.totalinvesttogether);
      }).catch(err => {
        console.log(err);
      });


  }, [admintoken, navigate])

  return (
    <>
      <div className='Admindashboardcon'>
        <div className='Adminparentdiv'>
          <div className='Admininnerfirstdiv bg-light fw-bold'>
            <Adminsidebar />
          </div>
          <div className='Admininnerseconddiv' >
            <div className="container text-center p-5 shadow-lg">
              <div className='text-start fw-bold'>
                <p>Welcome back, {admin && admin?.Fullname}</p>
              </div>
              <div className="row g-4" style={{ height: "80vh" }}>
                <div className="col-md-6 col-lg-6">
                  <div className="border border-1 border-light d-flex justify-content-center align-items-center rounded-3 shadow-lg h-100" >
                    <div>
                      <h1>{userCount}</h1>
                       Users
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="border border-1 border-light d-flex justify-content-center align-items-center rounded-3 shadow-lg h-100">
                    <div>
                      <h1>₦{totalBalance}</h1>
                      Total users Balance
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="border border-1 border-light d-flex justify-content-center align-items-center rounded-3 shadow-lg h-100">
                    <div>
                      <h1>₦{totalAmountInvested}</h1>
                      Total Amount Invested
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="border border-1 border-light d-flex justify-content-center align-items-center rounded-3 shadow-lg h-100">
                    <div>
                      <h1>{Totalinvested}</h1>
                      Total Value Invested
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

export default AdminDashboard