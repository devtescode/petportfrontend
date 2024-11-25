import React, { useState, useEffect } from 'react'
import logo from '../../assets/8796021.jpg'
import { useNavigate, useParams } from 'react-router'
// import {logo} from '../theme-assets/images/logo/logo.png'
import '../theme-assets/css/vendors.css';
import '../theme-assets/css/plugins/charts/chartist.css';
import '../theme-assets/css/app-lite.css'
import '../theme-assets/css/core/menu/menu-types/vertical-menu.css'
import '../theme-assets/css/core/colors/palette-gradient.css'
import '../theme-assets/css/pages/dashboard-ecommerce.css'
import axios from 'axios';
import { API_URLS } from '../../utils/apiConfig';
// import profile from '../theme-assets/images/portrait/small/avatar-s-19.png'


const Sidenav = () => {
  const [useimage, setuseimage] = useState("")
  const [notificationCount, setNotificationCount] = useState(0);
  const { id } = useParams()

  const navigate = useNavigate()
  const dashboardrouting = () => {
    navigate('/dashboard')
    hideOffcanvasMenu();

  }
  const Productrouting = () => {
    navigate('/product')
    hideOffcanvasMenu();

  }
  // const investmentrouting = () => {
  //   navigate(`/invest`)
  //   hideOffcanvasMenu();
  // }

  const Logoutbtn = () => {
    navigate('/login')
    localStorage.removeItem('image')
    hideOffcanvasMenu();
  }
  const LogoutBtn = () => {
    navigate("/login")
    localStorage.removeItem('image')
    localStorage.removeItem('token')
  }

  const navigateToLogin = () => {
    navigate('/login');
    localStorage.removeItem('image')
    localStorage.removeItem('token')
    hideOffcanvasMenu();

  };

  const profilerouting = () => {
    navigate('/profile')
    hideOffcanvasMenu();
  }

  const Productrouting2 = () => {
    navigate("/userplan")
    hideOffcanvasMenu();
  }

  const passwordrouting = () => {
    navigate('/password')
    hideOffcanvasMenu();
  }

  const historyrouting = () => {
    navigate('/history')
    hideOffcanvasMenu();
  }

  const walletrouting = () => {
    navigate('/wallet')
    hideOffcanvasMenu();
  }

  const Addaccountrouting = () => {
    navigate('/addaccount')
    hideOffcanvasMenu();
  }
  const Payoutrouting = () => {
    navigate('/payout')
    hideOffcanvasMenu();
  }

  const notificationrouting = () => {
    navigate('/Usernotification')
    hideOffcanvasMenu();
  }

  const tranhistoryrouting = ()=>{
    navigate('/tranhistory')
    hideOffcanvasMenu();
  }

  const hideOffcanvasMenu = () => {
    const offcanvasElement = document.getElementById('staticBackdrop');
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
    offcanvasInstance.hide();
  };

  const toggleDropdown = () => {
    let dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display === "block" ? dropdownContent.style.display = "none" : dropdownContent.style.display = "block";
  }

  useEffect(() => {
    const fetchUserImage = () => {
      const storedImage = localStorage.getItem('image');
      if (storedImage) {
        setuseimage(storedImage);
      }
    };
    fetchUserImage();
    const interval = setInterval(fetchUserImage, 2000);
    return () => clearInterval(interval);
  }, []);

  const adminBtnPage = () => {
    navigate('/adminreg')
    hideOffcanvasMenu();
  }

  useEffect(() => {
    const fetchNotificationCount = async () => {
      try {
        const response = await axios.get(API_URLS.getusernotificationcount);
        setNotificationCount(response.data.count); // Assuming the API returns { count: number }
        console.log(response.data.count);

      } catch (error) {
        console.error('Error fetching notification count:', error);
      }
    };

    fetchNotificationCount();
  }, []);

  return (
    <>
      <nav className="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light">
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div className="collapse navbar-collapse show" id="navbar-mobile">
              <ul className="nav navbar-nav mr-auto float-left">
                <li className="nav-item d-block d-md-none">
                  <a
                    className="nav-link nav-menu-main menu-toggle hidden-xs"
                  >
                    <i className="ft-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" />
                  </a>
                </li>
                <li className="nav-item d-none d-md-block">
                  <a className="nav-link nav-link-expand" href="#">
                    <i className="ficon ft-maximize" />
                  </a>
                </li>
                <li className="nav-item dropdown navbar-search">
                  <a
                    className="nav-link dropdown-toggle hide"
                    data-toggle="dropdown"
                    href="#"
                  >
                    <i className="ficon ft-search" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="arrow_box">
                      <form>
                        <div className="input-group search-box">
                          <div className="position-relative has-icon-right full-width">
                            <input
                              className="form-control"
                              id="search"
                              type="text"
                              placeholder="Search here..."
                            />
                            <div className="form-control-position navbar-search-close">
                              <i className="ft-x"> </i>
                            </div>
                          </div>
                        </div>
                      </form>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="nav navbar-nav float-right">

                <li className="dropdown dropdown-user nav-item">
                  <a
                  // className="dropdown-toggle nav-link dropdown-user-link"
                  // data-toggle="dropdown"
                  >
                    <span className="avatar avatar-online avatar-profile" onClick={toggleDropdown}>
                      <img
                        src={useimage}
                        alt="avatar"
                      />
                      <i />
                    </span>
                  </a>
                  <div class="dropdown-content" id="dropdownContent">
                    <a className="dropdown-item">
                      <i className="ft-user" /> Edit Profile
                    </a>
                    <a className="dropdown-item">
                      <i className="ft-mail" /> My Inbox
                    </a>
                    <a className="dropdown-item">
                      <i className="ft-check-square" /> Task
                    </a>
                    <a className="dropdown-item">
                      <i className="ft-message-square" /> Chats
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" onClick={LogoutBtn}>
                      <i className="ft-power" /> Logout
                    </a>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div>


        <div className="offcanvas offcanvas-start" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="staticBackdropLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body d-flex my-5">
            <div className=" menu-light menu-accordion menu-shadow" data-scroll-to-active="true" data-img="theme-assets/images/backgrounds/02.jpg">
              <div className="navbar-header">
                <ul className="nav navbar-nav flex-row" >
                  <li className="nav-item mr-auto" >
                    <a className="navbar-brand">
                      <img className="brand-logo border rounded-5" alt="Chameleon admin logo" src={logo} />
                      <h3 className="brand-text">Petport</h3>
                    </a>
                  </li>
                  <li className="nav-item d-md-none">
                    <a className="nav-link close-navbar">
                    </a>
                  </li>
                </ul>
              </div>
              <div className="main-menu-content">
                <ul
                  className="navigation navigation-main"
                  id="main-menu-navigation"
                  data-menu="menu-navigation"
                  style={{ listStyle: "none" }}
                >
                  <li className="activ my-2" onClick={dashboardrouting}>
                    <a>
                      <i className="ft-home" />
                      <span className="menu-title mx-2" data-i18n="">
                        Dashboard
                      </span>
                    </a>
                  </li>
                  {/* <li className=" nav-item my-2" onClick={Productrouting}>
                    <a >
                      <i class="ri-product-hunt-line"></i>
                      <span className="menu-title mx-2" data-i18n="">
                        Investment
                      </span>
                    </a>
                  </li> */}
                  <li className=" nav-item my-2" onClick={Productrouting2}>
                    <a >
                      <i class="ri-product-hunt-line"></i>
                      <span className="menu-title mx-2" data-i18n="">
                        Investment
                      </span>
                    </a>
                  </li>
                  {/* <li className=" nav-item my-2" onClick={investmentrouting}>
                    <a >
                      <i class="ri-stock-line"></i>
                      <span className="menu-title mx-2" data-i18n="">
                        
                      </span>
                    </a>
                  </li> */}

                  <li className="nav-item my-2" onClick={walletrouting}>
                    <a >
                      <i class="ri-wallet-line"></i>
                      <span className="menu-title mx-2" data-i18n="">
                        Wallet
                      </span>
                    </a>
                  </li>
                  <li className=" nav-item" onClick={Payoutrouting}>
                    <a >
                      <i className="ri-exchange-line"></i>
                      <span className="menu-title mx-2" data-i18n="">
                        Payout
                      </span>
                    </a>
                  </li>
                  <li className=" nav-item my-2" onClick={Addaccountrouting}>
                    <a >
                      <i className="ri-refund-line"></i>
                      <span className="menu-title mx-2" data-i18n="">
                        Add account
                      </span>
                    </a>
                  </li>
                  <li className=" nav-item my-2">
                    <a >
                      <i class="ri-profile-line"></i>
                      <span className="menu-title mx-2" data-i18n="" onClick={profilerouting}>
                        Profile
                      </span>
                    </a>
                  </li>
                  <li className=" nav-item my-2" onClick={passwordrouting}>
                    <a >
                      <i class="ri-key-2-line"></i>
                      <span className="menu-title mx-2" data-i18n="">
                        Password
                      </span>
                    </a>
                  </li>
                  <li className="nav-item my-2" onClick={notificationrouting}>
                    <a>
                      <i className="ri-notification-line"></i>
                      <span className="menu-title mx-2" data-i18n="">
                        Notification
                      </span>
                      {notificationCount > 0 && (
                        <span className="badge badge-danger">{notificationCount}</span>
                      )}
                    </a>
                  </li>

                  <li className=" nav-item my-2" onClick={tranhistoryrouting}>
                    <a >
                      <i class="ri-history-line"></i>
                      <span className="menu-title mx-2" data-i18n="">
                        History
                      </span>
                    </a>
                  </li>

                  <li className=" nav-item my-2" onClick={historyrouting}>
                    <a >
                      <i class="ri-history-line"></i>
                      <span className="menu-title mx-2" data-i18n="">
                        History
                      </span>
                    </a>
                  </li>
                  {/* <div className='mx-2 border border-1 border-light shadow-lg rounded-1 w-25'>
                    <p>Admin</p>
                  </div> */}
                  <li className="nav-item" >
                    <a className='d-flex'>
                      <i class="ri-admin-line"></i>
                      <span className="menu-title" data-i18n="" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <p className="d-inline-flex gap-1 mx-2">
                          Admin page
                        </p>
                        <div className="collapse" id="collapseExample">
                          <div className="card card-body border border-white w-100">
                            <div>
                              <button className='btn btn-dark' onClick={adminBtnPage}>
                                Login
                              </button>
                            </div>

                          </div>
                        </div>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <a className="btn btn-danger btn-block btn-glow btn-upgrade-pro mx-1 text-white" onClick={navigateToLogin}>
                <i class="ri-logout-box-line fw-bold"></i>
                <samp className='mx-1'>
                  Log out
                </samp>
              </a>
              <div className="navigation-background"></div>
            </div>
          </div>
        </div>
      </div>




      <div
        className="main-menu menu-fixed menu-light menu-accordion menu-shadow smallscreensidebar"
        data-scroll-to-active="true"
        data-img="theme-assets/images/backgrounds/02.jpg"
      >
        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item mr-auto">
              <a className="navbar-brand">
                <img
                  className="brand-logo border rounded-5"
                  alt="Chameleon admin logo"
                  src={logo}
                />
                <h3 className="brand-text">Petport</h3>
              </a>
            </li>
            <li className="nav-item d-md-none">
              <a className="nav-link close-navbar">
                <i className="ft-x" />
              </a>
            </li>
          </ul>
        </div>
        <div className="main-menu-content">
          <ul
            className="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li className="activ" onClick={dashboardrouting}>
              <a>
                <i className="ft-home fw-bold" />
                <span className="menu-title" data-i18n="">
                  Dashboard
                </span>
              </a>
            </li>
            {/* <li className=" nav-ite" onClick={Productrouting}>
              <a >
                <i class="ri-product-hunt-line"></i>
                <span className="menu-title" data-i18n="">
                  Investment
                </span>
              </a>
            </li> */}
            <li className=" nav-ite" onClick={Productrouting2}>
              <a >
                <i className="ri-product-hunt-line"></i>
                <span className="menu-title" data-i18n="">
                  Investment
                </span>
              </a>
            </li>
            {/* <li className=" nav-ite" onClick={investmentrouting}>
              <a >
                <i class="ri-stock-line"></i>
                <span className="menu-title" data-i18n="">
                   comment out
                </span>
              </a>
            </li> */}

            <li className=" nav-item" onClick={walletrouting}>
              <a >
                <i className="ri-wallet-line"></i>
                <span className="menu-title" data-i18n="">
                  Wallet
                </span>
              </a>
            </li>
            <li className=" nav-item" onClick={Payoutrouting}>
              <a >
                <i className="ri-exchange-line"></i>
                <span className="menu-title" data-i18n="">
                  Payout
                </span>
              </a>
            </li>
            <li className=" nav-item" onClick={Addaccountrouting}>
              <a >
                <i className="ri-refund-line"></i>
                <span className="menu-title" data-i18n="">
                  Add account
                </span>
              </a>
            </li>
            <li className=" nav-item" onClick={profilerouting}>
              <a >
                <i className="ri-profile-line"></i>
                <span className="menu-title" data-i18n="">
                  Profile
                </span>
              </a>
            </li>
            <li className=" nav-item" onClick={passwordrouting}>
              <a >
                <i className="ri-key-2-line"></i>
                <span className="menu-title" data-i18n="">
                  Password
                </span>
              </a>
            </li>
            {/* <li className=" nav-item" onClick={notificationrouting}>
              <a >
                <i class="ri-notification-line"></i>
                <span className="menu-title" data-i18n="">
                  Notification 2
                </span>
              </a>
            </li> */}
            <li className="nav-item" onClick={notificationrouting}>
              <a>
                <i className="ri-notification-line"></i>
                <span className="menu-title" data-i18n="">
                  Notification
                </span>
                {notificationCount > 0 && (
                  <span className="badge badge-danger">{notificationCount}</span>
                )}
              </a>
            </li>
            <li className=" nav-item" onClick={historyrouting}>
              <a >
                <i className="ri-history-line"></i>
                <span className="menu-title" data-i18n="">
                  History
                </span>
              </a>
            </li>
            <li className=" nav-item" onClick={tranhistoryrouting}>
              <a >
                <i className="ri-history-line"></i>
                <span className="menu-title" data-i18n="">
                   History
                </span>
              </a>
            </li>
            {/* <div className='mx-2 border border-1 border-light shadow-lg rounded-1'>
              <p>Admin</p>
            </div> */}
            <li className="nav-item" >
              <a className='d-flex'>
                <i className="ri-admin-line"></i>
                <span className="menu-title" data-i18n="" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  <p className="d-inline-flex gap-1">
                    Admin page
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body border border-white w-100">

                      <div>
                        <button className='btn btn-dark my-1' onClick={adminBtnPage}>
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </span>
              </a>
            </li>
          </ul>

        </div>

        <a
          className="btn btn-danger btn-block btn-glow btn-upgrade-pro mx-1 text-white"
          onClick={Logoutbtn}
        >
          <i className="ri-logout-box-line fw-bold"></i>
          <samp className='mx-1'>
            Log out
          </samp>
        </a>
        <div className="navigation-background" />
      </div>
    </>
  )
}

export default Sidenav