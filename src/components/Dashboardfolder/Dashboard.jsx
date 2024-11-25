import React, { useEffect, useState } from 'react'
import '../theme-assets/css/vendors.css';
import '../theme-assets/css/plugins/charts/chartist.css';
import '../theme-assets/css/app-lite.css'
import '../theme-assets/css/core/menu/menu-types/vertical-menu.css'
import '../theme-assets/css/core/colors/palette-gradient.css'
import '../theme-assets/css/pages/dashboard-ecommerce.css'
import Sidenav from '../Sidenavbarfolder/Sidenav';
import axios from 'axios';
import { useNavigate } from 'react-router';
import profile from '../theme-assets/images/portrait/small/avatar-s-19.png'
import profile1 from '../../assets/img/hero.jpg';
import profile2 from '../../assets/img/pig.jpg'
import profile3 from '../../assets/img/closeup-shot-brown-guard-dog-standing-beach.jpg'
import InvestmentPerformance from '../InvestmentPerfolder/Investperformance.jsx'
import "./Dashboard.css"
import { API_URLS } from '../../utils/apiConfig.js';

// ../theme-assets/images/portrait/small/avatar-s-19.png

const Dashboard = () => {

  // 
  // http://localhost:5000

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [investmentCount, setInvestmentCount] = useState(0);
  const [uniqueProductCount, setUniqueProductCount] = useState(0);

  const toggleDropdown = () => {
    let dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display === "block" ? dropdownContent.style.display = "none" : dropdownContent.style.display = "block";
  };

  // useEffect(() => {
  //   let token = localStorage.token;
  //   axios.get(url, {
  //     headers: {
  //       "Authorization": `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (!localStorage.useradminlogin || response.data.status === false) {
  //         navigate("/login");
  //       } else {
  //         setUser(response.data.user);
  //         setTotalInvestment(response.data.user.Totalinvest);
  //         setInvestmentCount(response.data.user.Amountinvest);
  //         setUniqueProductCount(response.data.user.uniqueProductCount);
  //         localStorage.setItem('image', response.data.user.Uploadimg);
  //         console.log(response.data.user);
  //       }
  //       // console.log(response);

  //     }).catch(err => {
  //       console.log(err);
  //     });
  // }, [navigate]);

  let url = API_URLS.dashboard;
  useEffect(() => {
    let token = localStorage.token;

    if (!token) {
      console.warn("No token found, redirecting to login.");
      navigate("/login");
      return;
    }

    axios.get(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        // Debugging: Log the full response
        // console.log(response);

        // console.log("Response Data:", response.data); 

        if (!localStorage.useradminlogin || response.data.status === false) {
          console.warn("User not logged in or invalid status, redirecting to login.");
          navigate("/login");
        } else {
          // Successfully received data, updating state
          setUser(response.data.user);
          setTotalInvestment(response.data.user.Totalinvest);
          setInvestmentCount(response.data.user.Amountinvest);
          setUniqueProductCount(response.data.user.uniqueProductCount);
          localStorage.setItem('image', response.data.user.Uploadimg);

          // Debugging: Log user data
          // console.log("User Data:", response.data.user);
        }
      })
      .catch((err) => {
        // Handle different types of errors
        if (err.response) {
          // Server responded with a status other than 2xx
          console.error("Error Response:", err.response.data);
        } else if (err.request) {
          // Request was made but no response was received
          console.error("No Response:", err.request);
        } else {
          // Something happened in setting up the request that triggered an error
          console.error("Error:", err.message);
        }

        // Optionally navigate to an error page or show an error message
      });
  }, [navigate]);


  // useEffect(() => {
  //   Swal.fire({
  //     title: "Custom animation with Animate.css",
  //     showClass: {
  //       popup: `
  //         animate__animated
  //         animate__fadeInUp
  //         animate__faster
  //       `
  //     },
  //     hideClass: {
  //       popup: `
  //         animate__animated
  //         animate__fadeOutDown
  //         animate__faster
  //       `
  //     }
  //   });
  // }, [])

  const [recentInvestments, setRecentInvestments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecentInvestments = async () => {
      try {
        const response = await axios.get(API_URLS.getallinvest);
        setRecentInvestments(response.data.investments);
        // console.log(response.data.investments);
      } catch (error) {
        console.error('Error fetching recent investments:', error);
        // setError('Failed to fetch recent investments');
      } finally {
        setLoading(false);
      }
    };
    fetchRecentInvestments();
  }, []);


  // const [balance, setBalance] = useState(0);
  // Fetch user data from localStorage
  useEffect(() => {
    const getUserFromLocal = JSON.parse(localStorage.getItem('UserData'));
    setUser(getUserFromLocal);
  }, []);

  // Function to fetch user's balance
  // const fetchUserBalance = async () => {
  //   if (user && user.email) {
  //     try { 
  //       const response = await axios.get(`http://localhost:5000/useranimalinvest/balance/${user.email}`);
  //       setBalance(response.data.Balance);
  //     } catch (error) {
  //       console.error('Error fetching user balance:', error);
  //     }
  //   }
  // };

  // // Fetch balance when component mounts
  // useEffect(() => {
  //   fetchUserBalance();
  // }, [user]);




  const [WalletBalance, setWalletBalance] = useState(0);
  const fetchWalletBalance = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('UserData'));
      const email = userData.email;
      const response = await axios.post(API_URLS.userBalance(email));
      console.log(response);
      setWalletBalance(response.data.walletBalance);

    } catch (error) {
      console.error('Error fetching wallet balance:', error.message);
    }
  };
  useEffect(() => {
    fetchWalletBalance();
  }, []);

  if (loading) return <p className='text-center'>Loading...</p>;
  if (error) return <p>{error}</p>;


  return (
    <>


      <Sidenav />
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-wrapper-before" style={{ zIndex: "-20" }} />
          <div className='shadow text-white d-flex justify-content-center' style={{ position: "absolute", top: "0px", height: "150px", alignItems: "center" }}>
            <div>
              <span className='fw-bold fs-2'>
                Welcome back,
              </span>
              <span className='fw-bold mt-1 fs-2' style={{ marginLeft: "8px" }}>
                {user.Fullname}
              </span>
              <div className='fs-2'>
                <span className='text-white'>Balance:</span>
                <span className='text-white' style={{ marginLeft: "8px" }}>₦{WalletBalance}</span>

              </div>
            </div>
          </div>

          <div className="content-header row"></div>
          <div className="content-body">
            <div className="row match-height">
              <div className="col-12">
                <div className="">
                  <div
                    id="gradient-line-chart1"
                    className="height-250 GradientlineShadow1"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="card pull-up ecom-card-1 bg-white">
                  <div className="card-content ecom-card2 height-180">
                    <h5 className="text-muted danger position-absolute p-1 card-title">
                      Total Number Invested
                    </h5>
                    <div>
                      <i className="ft-pie-chart danger font-large-1 float-right p-1" />
                    </div>
                    <div className="progress-stats-container ct-golden-section height-75 position-relative pt-3">
                      <div id="progress-stats-bar-chart" />
                      <div id="progress-stats-line-chart" className="progress-stats-shadow" />
                      <div className='text-center mt-4'>
                        <h1 className="card-text">{investmentCount}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-xl-4 col-lg-12">
                <div className="card pull-up ecom-card-1 bg-white">
                  <div className="card-content ecom-card2 height-180">
                    <h5 className="text-muted warning position-absolute p-1">
                      Total Amount Investment
                    </h5>
                    <div>
                      <i className="ft-shopping-cart warning font-large-1 float-right p-1" />
                    </div>
                    <div className="progress-stats-container ct-golden-section height-75 position-relative pt-3">
                      <div id="progress-stats-bar-chart2" />
                      <div className='text-center mt-4'>
                        <h1 className="card-text">₦{totalInvestment}</h1>
                      </div>
                      <div
                        id="progress-stats-line-chart2"
                        className="progress-stats-shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="card pull-up ecom-card-1 bg-white">
                  <div className="card-content ecom-card2 height-180">
                    <h5 className="text-muted info position-absolute p-1">
                      Next End of Cycle Date
                    </h5>
                    <div>
                      <i className="ft-activity info font-large-1 float-right p-1" />
                    </div>
                    <div className="progress-stats-container ct-golden-section height-75 position-relative pt-3">
                      <div id="progress-stats-bar-chart1" />
                      <div className='text-center mt-4'>
                        {/* <h1 className="card-text">Monthly</h1> */}
                      </div>
                      <div
                        id="progress-stats-line-chart1"
                        className="progress-stats-shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row match-height">

              <div className="col-xl-4 col-lg-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <h4 className="card-title">Recent products</h4>

                    </div>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                      <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src={profile1} className="d-block w-100" alt="Slide 1" />
                        </div>
                        <div className="carousel-item">
                          <img src={profile2} className="d-block w-100" alt="Slide 2" />
                        </div>
                        <div className="carousel-item">
                          <img src={profile3} className="d-block w-100" alt="Slide 3" />
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>


                  </div>
                  <div className="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                    <span className="float-left">Products</span>

                  </div>
                </div>
              </div>


              <div className="col-xl-8 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Users Recent Invested</h4>
                    <a className="heading-elements-toggle">
                      <i className="fa fa-ellipsis-v font-medium-3" />
                    </a>
                    <div className="heading-elements">
                      <ul className="list-inline mb-0">
                        <li>
                          <a data-action="reload">
                            <i className="ft-rotate-cw" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="dashboard-content">
                    <div className="recent-investments">
                      {/* <h2 className="section-title">Recent Investments</h2> */}
                      <div className="investment-list">
                        {recentInvestments.length > 0 ? (
                          recentInvestments.map((investment, index) => {
                            if (!investment.planId) {
                              return null; // Skip rendering if planId is missing
                            }
                            return (
                              <div key={index} className="investment-card">
                                <img
                                  src={investment.planId.image}
                                  alt={investment.planId.name}
                                  className="investment-image"
                                />
                                <div className="investment-details">
                                  <h3 className="investment-name">{investment.planId.name}</h3>
                                  <p className="investment-date">
                                    Invested on: {new Date(investment.investmentDate).toLocaleDateString()}
                                  </p>
                                  <p className="investment-amount">
                                    Investment Amount: {investment.investmentPrice}
                                  </p>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <p>No recent investments available.</p>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <InvestmentPerformance /> */}
    </>

  )
}

export default Dashboard