import React from 'react'
import { useNavigate } from 'react-router'
import Narbar from '../Narbarfolder/Narbar'
// import {aboutjpg} from '../../assets/img/hero.jpg'
// import { aboutjpg } from '/src/assets/hero.jpg';
import Video from '../Videofolder/Video'


const Landingpage = () => {
  const navigate = useNavigate()
  const RegisterBtn = () => {
    navigate("/signup")
  }

  const LoginBtn = () => {
    navigate("/login")
  }

  return (
    <>
      <Narbar />
      <div className=" container-fluid bg-primary py-5 mb-5 hero-header" style={{ zIndex: "100" }}>
        <div className="container my-3">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-lg-start">
              <h1 className="display-4 text-uppercase text-dark ">
                petport
              </h1>
              <h1 className="text-uppercase text-white mb-lg-0">
                Investment Where Smiles Multiply

              </h1>
              <p className="fs-4 text-white mb-lg-0">
                Welcome to petport, where we explore the world of animal investments with expertise and insight.

              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a
                  className="btn btn-outline-light py-md-2 px-md-2 me-4"
                >
                  Read More
                </a>
                <button
                  type="button"
                  className="btn-play me-4"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/watch?v=VZsHFormuGg"
                  data-bs-target="#videoModal"
                >
                  <span />
                </button>
                <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">
                  Play Video
                </h5>
              </div>
            </div>
          </div>

          <div className='d-flex mt-2'>
            <div className=''>
              <button className='RegisterBtn' onClick={RegisterBtn}>
                <b>Register</b>
              </button>
            </div>
            <div className='mx-1'>
              <button className='RegisterBtn' onClick={LoginBtn}>
                <b>Login</b>
              </button>
            </div>
          </div>
        </div>
      </div>


      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <Video/>
            </div>
            <div className="modal-body">
              {/* 16:9 aspect ratio */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen=""
                  allowscriptaccess="always"
                  allow="autoplay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* style={{marginTop:"95vh"}} */}
      <div className="py-5" >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded aboutjpg"
                  // src={aboutjpg}

                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mb-3">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="display-5 text-uppercase mb-0">
                  We Keep Your Pets Happy All Time
                </h1>
              </div>
              <h4 className="text-body mb-2">
                Ruff Life Crew Where every pup's got a pack and tails waggin high
              </h4>
              <div className="shadow-lg p-4 rounded-4 border border-1 border-light">
                <ul
                  className="nav nav-pills justify-content-between mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item w-50" role="presentation">
                    <button
                      className="nav-link text-uppercase w-100 active"
                      id="pills-1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-1"
                      type="button"
                      role="tab"
                      aria-controls="pills-1"
                      aria-selected="true"
                    >
                      Our Mission
                    </button>
                  </li>
                  <li className="nav-item w-50" role="presentation">
                    <button
                      className="nav-link text-uppercase w-100"
                      id="pills-2-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-2"
                      type="button"
                      role="tab"
                      aria-controls="pills-2"
                      aria-selected="false"
                    >
                      Our Vision
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-1"
                    role="tabpanel"
                    aria-labelledby="pills-1-tab"
                  >
                    <p className="mb-0 fs-5">
                      Our mission at PETPORT is to connect dog lovers with the opportunity to invest in the well-being of our canine companions. Through transparent and accountable practices, we empower our community to support the care and happiness of dogs, fostering a world of responsible pet ownership and compassion."
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-2"
                    role="tabpanel"
                    aria-labelledby="pills-2-tab"
                  >
                    <p className="mb-0 fs-5">
                      Our vision at PETPORT is to create a world where every dog receives the love, care, and attention they deserve. By providing a platform for responsible investment in canine companionship, we aim to inspire a global community committed to the well-being and happiness of dogs, fostering a future where every wagging tail signifies joy and fulfillment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* About End */}
      {/* Services Start */}
      <div className="container-fluid py-3">
        <div className="container">
          <div
            className="ps-0 mb-2"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary text-uppercase">Services</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Our Excellent Pet Care Services
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-md-6">
              <div className="service-item shadow-lg d-flex p-4">
                <i class="ri-store-line display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3 ">Pet Boarding</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                    elitr dolor amet sit
                  </p>
                  <a className="text-primary text-uppercase" >
                    Read More
                    <i className="bi bi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item shadow-lg d-flex p-4">
                <i className="flaticon-food" />
                <i class="ri-restaurant-2-line  display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Feeding</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                    elitr dolor amet sit
                  </p>
                  <a className="text-primary text-uppercase" href="">
                    Read More
                    <i className="bi bi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item shadow-lg d-flex p-4">
                <i className="flaticon-cat " />
                <i class="ri-run-line display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Training</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                    elitr dolor amet sit
                  </p>
                  <a className="text-primary text-uppercase" href="">
                    Read More
                    <i className="bi bi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item shadow-lg d-flex p-4">
                <i className="flaticon-vaccine" />
                <i class="ri-thermometer-line  display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Treatment</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet justo
                    elitr dolor amet sit
                  </p>
                  <a className="text-primary text-uppercase" href="">
                    Read More
                    <i className="bi bi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}
      {/* Products Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-dark ps-5 mb-5"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary text-uppercase">Products</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Products For Your Best Friend
            </h1>
          </div>
          <div className="product-carousel gap-4 d-block d-sm-flex justify-content-center">
            <div className="pb-5">
              <div className="product-item position-relative bg-light d-flex flex-column text-center rounded-3">
                <div className='imgproduct1' >
                  {/* <img className="img-fluid mb-4 " alt="" /> */}
                </div>
                <h6 className="text-uppercase mt-2">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">₦30,000</h5>
                <div className="btn-action d-flex justify-content-center ">
                  <a className="py-2 px-3 bg-light">
                    <i className="bi bi-cart" />
                  </a>
                  <a className="py-2 px-3 bg-light">
                    <i className="bi bi-eye" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pb-5">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">

                <div className='imgproduct2'>
                  {/* <img className="img-fluid mb-4" src="" alt="" /> */}
                </div>
                <h6 className="text-uppercase mt-2">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">₦50,000</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="bg-light py-2 px-3">
                    <i className="bi bi-cart" />
                  </a>
                  <a className="bg-light py-2 px-3">
                    <i className="bi bi-eye" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pb-5">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <div className='imgproduct3'>
                  {/* <img className="img-fluid mb-4" src="img/product-3.png" alt="" /> */}
                </div>
                <h6 className="text-uppercase mt-2">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">₦20,000</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="bg-light py-2 px-3">
                    <i className="bi bi-cart" />
                  </a>
                  <a className="bg-light py-2 px-3">
                    <i className="bi bi-eye" />
                  </a>
                </div>
              </div>
            </div>
            <div className="pb-5">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <div className='imgproduct4'>
                  {/* <img className="img-fluid mb-4" src="img/product-4.png" alt="" /> */}
                </div>
                <h6 className="text-uppercase mt-2">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">₦60,000</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="bg-light py-2 px-3">
                    <i className="bi bi-cart" />
                  </a>
                  <a className="bg-light py-2 px-3">
                    <i className="bi bi-eye" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Products End */}
      {/* Offer Start */}
      <div className="container-fluid bg-light bg-offer py-5">
        <div className="container py-5">
          <div className="row gx-5 justify-content-start">
            <div className="col-lg-7">
              <div className="border-start border-5 border-dark ps-5 mb-5">
                <h6 className="text-white text-uppercase fw-bold">Special Offer</h6>
                <h1 className="display-5 text-uppercase text-white mb-0 fw-bold">
                  Save 50% on all items your first order
                </h1>
              </div>
              <p className="text-white mb-4 ">
                Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et
                dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos
                vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut
                dolores magna sit. Sea dolore sed et.
              </p>
              <a className="btn btn-light py-md-2 px-md-2 me-2">
                Shop Now
              </a>
              <a className="btn btn-light py-md-2 px-md-2">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>




      <div className="container-fluid col-lg-10 mt-5">
        <div className="containerdivhero">
          <div
            className="border-start border-5 border-dark ps-5 mb-5"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary text-uppercase">Team Members</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Qualified Pets Care Professionals
            </h1>
          </div>
        </div>
      </div>
      <div className='row col-md-10 mx-auto gap-5'>

        <div className="card bg-primary">
          <div className=''>
            <span className="card__hover card__hover1" >Jackson Williams</span>
          </div>
          <figure className="card__figure">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msfilter: "" }}
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8 0-1.168.258-2.275.709-3.276.154.09.308.182.456.276.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688c.494-.187 1.088-.312 1.88-.312s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688c.178.067.374.122.581.171.191.682.3 1.398.3 2.141 0 4.411-3.589 8-8 8z" />
              <circle cx="8.5" cy="12.5" r="1.5" />
              <circle cx="15.5" cy="12.5" r="1.5" />
            </svg> */}
            <svg

              className='text-white'
              width={24}
              height={24}
              style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msfilter: "" }}
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.9571 15.564C17.6154 16.6219 19.5726 19.0639 19.9387 22H4.0625C4.42862 19.0639 6.38587 16.6219 9.04417 15.564L12.0006 20L14.9571 15.564ZM18.0006 2V8C18.0006 11.3137 15.3143 14 12.0006 14C8.6869 14 6.00061 11.3137 6.00061 8V2H18.0006ZM16.0006 8H8.00061C8.00061 10.2091 9.79147 12 12.0006 12C14.2098 12 16.0006 10.2091 16.0006 8Z"></path></svg>
          </figure>
          <div className="card__info">
            <span className="card__name">
              Jackson Williams
              <span className="card__ocupation"> Veterinarian </span>
              <div className="card__links">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                  <circle cx="16.806" cy="7.207" r="1.078" />
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <circle cx="4.983" cy="5.009" r="2.188" />
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
                </svg>
              </div>
            </span>
          </div>
        </div>



        <div className="card bg-primary">
          <span className="card__hover card__hover2" >Favour Thomas</span>
          <figure className="card__figure">
            <svg xmlns="http://www.w3.org/2000/svg"
              className='text-white'
              viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M8 3V5H6V9C6 11.2091 7.79086 13 10 13C12.2091 13 14 11.2091 14 9V5H12V3H15C15.5523 3 16 3.44772 16 4V9C16 11.9727 13.8381 14.4405 11.0008 14.9169L11 16.5C11 18.433 12.567 20 14.5 20C15.9973 20 17.275 19.0598 17.7749 17.7375C16.7283 17.27 16 16.2201 16 15C16 13.3431 17.3431 12 19 12C20.6569 12 22 13.3431 22 15C22 16.3711 21.0802 17.5274 19.824 17.8854C19.2102 20.252 17.0592 22 14.5 22C11.4624 22 9 19.5376 9 16.5L9.00019 14.9171C6.16238 14.4411 4 11.9731 4 9V4C4 3.44772 4.44772 3 5 3H8ZM19 14C18.4477 14 18 14.4477 18 15C18 15.5523 18.4477 16 19 16C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z"></path></svg>
          </figure>
          <div className="card__info">
            <span className="card__name">
              Jackson Williams
              <span className="card__ocupation"> Pet Sitter </span>
              <div className="card__links">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                  <circle cx="16.806" cy="7.207" r="1.078" />
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <circle cx="4.983" cy="5.009" r="2.188" />
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
                </svg>
              </div>
            </span>
          </div>
        </div>


        <div className="card bg-primary">
          <span className="card__hover card__hover3">Josh</span>
          <figure className="card__figure">
            <svg xmlns="http://www.w3.org/2000/svg"
              className='text-white'
              viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11 19V13.8889L3 5V3H21V5L13 13.8889V19H18V21H6V19H11ZM7.49073 7H16.5093L18.3093 5H5.69072L7.49073 7Z"></path></svg>
          </figure>
          <div className="card__info">
            <span className="card__name">
              Josh
              <span className="card__ocupation"> Pet Store Associate </span>
              <div className="card__links">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                  <circle cx="16.806" cy="7.207" r="1.078" />
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <circle cx="4.983" cy="5.009" r="2.188" />
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
                </svg>
              </div>
            </span>
          </div>
        </div>
        <div className="card bg-primary">
          <span className="card__hover card__hover4">Mercy</span>
          <figure className="card__figure">
            <svg xmlns="http://www.w3.org/2000/svg"
              className='text-white'
              viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17 5V7C18.6569 7 20 8.34315 20 10V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V10C4 8.34315 5.34315 7 7 7V5H17ZM13 11H11V13H9V15H10.999L11 17H13L12.999 15H15V13H13V11ZM19 2V4H5V2H19Z"></path></svg>
          </figure>
          <div className="card__info">
            <span className="card__name">
              Mercy
              <span className="card__ocupation"> Pet Nutritionist </span>
              <div className="card__links">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z" />
                  <circle cx="16.806" cy="7.207" r="1.078" />
                  <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    fill: "rgba(255, 255, 255, 1)",
                    transform: "",
                    msfilter: ""
                  }}
                >
                  <circle cx="4.983" cy="5.009" r="2.188" />
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
                </svg>
              </div>
            </span>
          </div>
        </div>
      </div>






      <div
        className="container-fluid bg-testimonial py-5"
        style={{ margin: "45px 0" }}
      >
        <div className="container py-5">
          <div className="row justify-content-end">
            <div className="col-lg-7">
              <div className="owl-carousel testimonial-carousel bg-white p-5">
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-4">
                    <img
                      className="mx-auto imgdog1"
                      alt=""
                    />
                    <div
                      className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="bi bi-chat-square-quote text-primary" />
                    </div>
                  </div>
                  <p>
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et
                    labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5 className="text-uppercase fw-bold">Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="testimonial-item text-center mt-4">
                  <div className="position-relative mb-4">
                    <img
                      className="imgdog2 mx-auto"
                      alt=""
                    />
                    <div
                      className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="bi bi-chat-square-quote text-primary" />
                    </div>
                  </div>
                  <p>
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et
                    labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5 className="text-uppercase fw-bold">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-dark ps-5 mb-5"
            style={{ maxWidth: 600 }}
          >
            <h6 className="text-primary text-uppercase">Latest Blog</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Latest Articles From Our Blog Post
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="blog-item">
                <div className="row g-0 bg-light overflow-hidden">
                  <div className="col-12 col-sm-5 d-flex" style={{alignItems:"center"}}>
                    <img
                      className="imgblog1 h-100 w-100"
                    />
                  </div>
                  <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="bi bi-bookmarks me-2" />
                          Web Design
                        </small>
                        <small>
                          <i className="bi bi-calendar-date me-2" />
                          01 Jan, 2045
                        </small>
                      </div>
                      <h5 className="text-uppercase mb-3">
                        Dolor sit magna rebum clita rebum dolor
                      </h5>
                      <p>
                        Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est
                        stet tempor eos dolor
                      </p>
                      <a className="text-primary text-uppercase" href="">
                        Read More
                        <i className="bi bi-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item">
                <div className="row g-0 bg-light overflow-hidden">
                  <div className="col-12 col-sm-5 d-flex" style={{alignItems:"center"}}>
                    <img
                      className="imgblog2 h-100 w-100"
                    />
                  </div>
                  <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                    <div className="p-4">
                      <div className="d-flex mb-3">
                        <small className="me-3">
                          <i className="bi bi-bookmarks me-2" />
                          Web Design
                        </small>
                        <small>
                          <i className="bi bi-calendar-date me-2" />
                          01 Jan, 2045
                        </small>
                      </div>
                      <h5 className="text-uppercase mb-3">
                        Dolor sit magna rebum clita rebum dolor
                      </h5>
                      <p>
                        Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est
                        stet tempor eos dolor
                      </p>
                      <a className="text-primary text-uppercase" href="">
                        Read More
                        <i className="bi bi-chevron-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog End */}
      {/* Footer Start */}
      <div className="container-fluid bg-light mt-5 py-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-dark ps-3 mb-4">
                Get In Touch
              </h5>
              <p className="mb-4">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
                et dolor sed dolor
              </p>
              <p className="mb-2">
                <i className="bi bi-geo-alt text-primary me-2" />
                123 Street, Yoaco, Filling station
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-open text-primary me-2" />
                pet@gmail.com
              </p>
              <p className="mb-0">
                <i className="bi bi-telephone text-primary me-2" />
                +80 648 64821
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-dark ps-3 mb-4">
                Quick Links
              </h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-body mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Home
                </a>
                <a className="text-body mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  About Us
                </a>
                <a className="text-body mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Our Services
                </a>
                <a className="text-body mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Meet The Team
                </a>
                <a className="text-body mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Latest Blog
                </a>
                <a className="text-body" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-dark ps-3 mb-4">
                Popular Links
              </h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-body mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Home
                </a>
                <a className="text-body mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  About Us
                </a>
                <a className="text-body mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Our Services
                </a>
                <a className="text-body mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Meet The Team
                </a>
                <a className="text-body mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Latest Blog
                </a>
                <a className="text-body" href="">
                  <i className="bi bi-arrow-right text-primary me-2" />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-uppercase border-start border-5 border-dark ps-3 mb-4">
                Newsletter
              </h5>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-1"
                    placeholder="Your Email"
                  />
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              <h6 className="text-uppercase mt-4 mb-3">Follow Us</h6>
              <div className="d-flex">
                <a className="btn btn-outline-primary btn-square me-2" href="#">
                  <i className="bi bi-twitter" />
                </a>
                <a className="btn btn-outline-primary btn-square me-2" href="#">
                  <i className="bi bi-facebook" />
                </a>
                <a className="btn btn-outline-primary btn-square me-2" href="#">
                  <i className="bi bi-linkedin" />
                </a>
                <a className="btn btn-outline-primary btn-square" href="#">
                  <i className="bi bi-instagram" />
                </a>
              </div>
            </div>
            <div className="col-12 text-center text-body">
              <a className="text-body" href="">
                Terms &amp; Conditions
              </a>
              <span className="mx-1">|</span>
              <a className="text-body" href="">
                Privacy Policy
              </a>
              <span className="mx-1">|</span>
              <a className="text-body" href="">
                Customer Support
              </a>
              <span className="mx-1">|</span>
              <a className="text-body" href="">
                Payments
              </a>
              <span className="mx-1">|</span>
              <a className="text-body" href="">
                Help
              </a>
              <span className="mx-1">|</span>
              <a className="text-body" href="">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white-50 py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                ©{" "}
                <a className="text-white" href="#">
                  Your Site Name
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                <span className="text-white" href="https://htmlcodex.com">
                Designed by
                  PetPort
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-primary py-2 px-2 back-to-top" style={{position:"fixed", bottom:"0", right:"0px"}}>
        <i className="bi bi-arrow-up" />
      </a>
      {/* JavaScript Libraries */}
      {/* Template Javascript */}
    </>

  )
}
export default Landingpage