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
  let url = "https://petportbackend.onrender.com/useranimalinvest/Admindb"
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

    axios.get('https://petportbackend.onrender.com/useranimalinvest/getuseranimalinvest', {
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

    axios.get('https://petportbackend.onrender.com/useranimalinvest/totalbalance', {
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


    axios.get('https://petportbackend.onrender.com/useranimalinvest/totalamountinvested', {
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


    axios.get('https://petportbackend.onrender.com/useranimalinvest/Totalinvest', {
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
          <div className='Admininnerseconddiv'>
            <div className="container text-center mt-sm-0 p-1 p-sm-3 mt-3">
              <div className='text-start fw-bold mt-2 mt-sm-0'>
                <p>Welcome back, {admin && admin?.Fullname}</p>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6 mt-0 mt-sm-2">
                  <div className="border border-1 border-light d-flex justify-content-center align-items-center rounded-3 shadow-lg dbcontainer_ht" style={{backgroundColor:"#262D47", color:"white"}}>
                    <div>
                      <h1 className='text-white'>{userCount}</h1>
                      Users
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 mt-2">
                  <div className="border border-1 border-light d-flex justify-content-center align-items-center rounded-3 shadow-lg dbcontainer_ht" style={{backgroundColor:"#262D47", color:"white"}}>
                    <div>
                      <h1 className='text-white'>₦{totalBalance}</h1>
                      Total users Balance
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 mt-2">
                  <div className="border border-1 border-light d-flex justify-content-center align-items-center rounded-3 shadow-lg dbcontainer_ht" style={{backgroundColor:"#262D47", color:"white"}}>
                    <div>
                      <h1 className='text-white'>₦{totalAmountInvested}</h1>
                      Total Amount Invested
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 mt-2">
                  <div className="border border-1 border-light d-flex justify-content-center align-items-center rounded-3 shadow-lg dbcontainer_ht" style={{backgroundColor:"#262D47", color:"white"}}>
                    <div>
                      <h1 className='text-white'>{Totalinvested}</h1>
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