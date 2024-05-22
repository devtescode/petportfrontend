import React from 'react'
import { useNavigate } from 'react-router'

const Narbar = () => {
    const navigate = useNavigate()
    const contactnavigate =()=>{
        navigate('/contact')
    }
    const Homeroute = () => {
        navigate('/')
    }
    
  return (
    <>
     <div className="container-fluid d-none d-lg-block" style={{cursor: "pointer"}}>
        <div className="row gx-0">
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-geo-alt fs-1 text-primary me-3" />
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
      </div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <a onClick={Homeroute} style={{cursor: "pointer"}}  className="navbar-brand ms-lg-5">
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
        <div className="collapse navbar-collapse" id="navbarCollapse" style={{cursor: "pointer"}}>
          <div className="navbar-nav ms-auto py-0">
            <a onClick={Homeroute} className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="service.html" className="nav-item nav-link">
              Service
            </a>
            <a href="product.html" className="nav-item nav-link">
              Product
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="price.html" className="dropdown-item">
                  Pricing Plan
                </a>
                <a href="team.html" className="dropdown-item">
                  The Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="blog.html" className="dropdown-item">
                  Blog Grid
                </a>
                <a href="detail.html" className="dropdown-item">
                  Blog Detail
                </a>
              </div>
            </div>
            <a
              
              className="nav-item nav-link nav-contact text-white px-5 ms-lg-5 contant-topstyle"
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