import React from 'react'
import { useNavigate } from 'react-router'

const Narbar = () => {
  const navigate = useNavigate()
  const contactnavigate = () => {
    navigate('/contact')
  }
  const Homeroute = () => {
    navigate('/')
  }

  const registerBtn =()=>{
    navigate('/signup')
  }

  const loginBtn =()=>{
    navigate('/login')
  }

  const AdminPanelRegister = () =>{
    navigate('/adminreg')
  }
  return (
    <>
      {/* <div className="container-fluid d-none d-lg-block bg-dark text-white" style={{cursor: "pointer", position:"fixed", top:"0", zIndex:"100"}}>
        <div className="row gx-0">
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-geo-alt fs-1 text-primary me-3 " />
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Our Office</h6>
                <span>25 Street, Yaoco, Filling station</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center border-start border-end py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-envelope-open fs-1 text-primary me-3" />
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <span>petport@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Call Us</h6>
                <span>+806 486 4821</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <nav className="fixed-top navbar navbar-expand-lg bg-white navbar-light p-2">
        <a onClick={Homeroute} style={{ cursor: "pointer" }} className="navbar-brand ms-lg-5">
          <h1 className="m-0 text-uppercase text-dark">
            <i className="bi bi-shop fs-1 text-primary me-3" />
            Petport
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse" style={{ cursor: "pointer" }}>
          <div className="navbar-nav ms-auto text-center">
            <a onClick={Homeroute} className="nav-item nav-link text-dark">
              Home
            </a>
            <a className="nav-item nav-link text-dark">
              About
            </a>
            <a className="nav-item nav-link text-dark fw-bold" onClick={AdminPanelRegister}>
              Admin
            </a>
            <a className="nav-item nav-link text-dark">
              Product
            </a>
            <a className="nav-item nav-link text-dark fw-bold" onClick={registerBtn}>
              Register
            </a>
            <a className="nav-item nav-link text-dark fw-bold" onClick={loginBtn}>
              Login
            </a>

            <a

              className="nav-item nav-link nav-contact text-white px-3 ms-lg-5 bg-dark rounded-4 w-50 mx-auto"
              onClick={contactnavigate}
            >
              Contact <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Narbar