import React from 'react'
import logo from '../theme-assets/images/logo/logo.png'
import { useNavigate } from 'react-router'
// import {logo} from '../theme-assets/images/logo/logo.png'



const Sidenav = () => {
  const navigate = useNavigate()
  const dashboardrouting=()=>{
    navigate('/dashboard')
  }
  const investmentrouting=()=>{
    navigate('/investment')
  }
  return (
    <>
    <div
        className="border border-2 border-dark  main-menu menu-fixed menu-light menu-accordion  menu-shadow"
        data-scroll-to-active="true"
        data-img="theme-assets/images/backgrounds/02.jpg"
      >
        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item mr-auto">
              <a className="navbar-brand">
                <img
                  className="brand-logo"
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
                <i className="ft-home" />
                <span className="menu-title" data-i18n="">
                  Dashboard
                </span>
              </a>
            </li>
            <li className=" nav-ite" onClick={investmentrouting}>
              <a >
                <i className="ft-pie-chart" />
                <span className="menu-title" data-i18n="">
                  Investment
                </span>
              </a>
            </li>
            <li className=" nav-item">
              <a >
                <i className="ft-droplet" />
                <span className="menu-title" data-i18n="">
                  Wallet
                </span>
              </a>
            </li>
            <li className=" nav-item">
              <a >
                <i className="ft-layers" />
                <span className="menu-title" data-i18n="">
                  profile
                </span>
              </a>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-danger btn-block btn-glow btn-upgrade-pro mx-1"
        >
          Log out
        </a>
        <div className="navigation-background" />
      </div>
    </>
  )
}

export default Sidenav