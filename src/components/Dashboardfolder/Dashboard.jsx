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

// ../theme-assets/images/portrait/small/avatar-s-19.png

const Dashboard = () => {
  let url = "http://localhost:5000/useranimalinvest/dashboard"
  const navigate = useNavigate()
  const toggleDropdown = () => {
    let dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display === "block" ? dropdownContent.style.display = "none" : dropdownContent.style.display = "block";
  }
  const [user, setUser] = useState("")
  useEffect(() => {
    let token = localStorage.token
    axios.get(url, {
      headers: {
        "Authorization": `Bearers ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!localStorage.useradminlogin || response.data.status == false) {
          navigate("/login");
        }
        else {
          setUser(response.data.user)
          localStorage.setItem('image', response.data.user.Uploadimg)
          console.log(response.data.user);
        }
      })
  }, [])


  


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
              <span className='fw-bold mt-1 px-1 fs-2 '>
                {user.Fullname}
              </span>
              <div className='fs-2'>
                <span className='text-white'>Balance:</span>
                <span className='text-white'>₦{user.Balance}</span>
              </div>
            </div>
          </div>

          <div className="content-header row"></div>
          <div className="content-body">
            {/* Chart */}
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
            {/* Chart */}
            {/* eCommerce statistic */}
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="card pull-up ecom-card-1 bg-white">
                  <div className="card-content ecom-card2 height-180">
                    <h5 className="text-muted danger position-absolute p-1">
                      Total Investment
                    </h5>
                    <div>
                      <i className="ft-pie-chart danger font-large-1 float-right p-1" />
                    </div>
                    <div className="progress-stats-container ct-golden-section height-75 position-relative pt-3  ">
                      <div id="progress-stats-bar-chart" />
                      <div
                        id="progress-stats-line-chart"
                        className="progress-stats-shadow"
                      />
                      <div className='text-center mt-4'>

                      <h1>{user.Totalinvest}</h1>
                      </div>
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
                      <div
                        id="progress-stats-line-chart1"
                        className="progress-stats-shadow"
                      />
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
                        <h1>₦{user.Amountinvest}</h1>
                      </div>
                      <div
                        id="progress-stats-line-chart2"
                        className="progress-stats-shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
         
            <div className="row match-height">
              {/* <div className="col-xl-4 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title" id="heading-multiple-thumbnails">
                      Multiple Thumbnail
                    </h4>
                    <a className="heading-elements-toggle">
                      <i className="la la-ellipsis-v font-medium-3" />
                    </a>
                    <div className="heading-elements">
                      <span className="avatar">
                        <img
                          src={profile}
                          alt="avatar"
                        />
                      </span>
                      <span className="avatar">
                        <img
                          src={profile}
                          alt="avatar"
                        />
                      </span>
                      <span className="avatar">
                        <img
                          src={profile}
                          alt="avatar"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-body">
                      <h4 className="card-title">Content title</h4>
                      <p className="card-text">
                        Jelly beans sugar plum cheesecake cookie oat cake
                        soufflé.Tootsie roll bonbon liquorice tiramisu pie
                        powder.Donut sweet roll marzipan pastry cookie cake tootsie
                        roll oat cake cookie.Jelly beans sugar plum cheesecake
                        cookie oat cake soufflé. Tart lollipop carrot cake sugar
                        plum.{" "}
                      </p>
                      <p className="card-text">
                        Sweet roll marzipan pastry halvah. Cake bear claw sweet.
                        Tootsie roll pie marshmallow lollipop chupa chups donut
                        fruitcake cake.Jelly beans sugar plum cheesecake cookie oat
                        cake soufflé. Tart lollipop carrot cake sugar plum.
                        Marshmallow wafer tiramisu jelly beans.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-4 col-lg-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <h4 className="card-title">Recent products</h4>
                      <h6 className="card-subtitle text-muted">
                        Carousel Card With Header &amp; Footer
                      </h6>
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

                    <div className="card-body">
                      <a href="#" className="card-link">Card link</a>
                      <a href="#" className="card-link">Another link</a>
                    </div>
                  </div>
                  <div className="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                    <span className="float-left">2 days ago</span>
                    <span className="tags float-right">
                      <span className="badge badge-pill badge-primary">Branding</span>
                      <span className="badge badge-pill badge-danger">Design</span>
                    </span>
                  </div>
                </div>
              </div>


              <div className="col-xl-4 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Recent Buyers</h4>
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
                  <div className="card-content">
                    <div id="recent-buyers" className="media-list">
                      <a href="#" className="media border-0">
                        <div className="media-left pr-1">
                          <span className="avatar avatar-md avatar-online">
                            <img
                              className="media-object rounded-circle"
                              src={profile}
                              alt="Generic placeholder image"
                            />
                            <i />
                          </span>
                        </div>
                        <div className="media-body w-100">
                          <span className="list-group-item-heading">
                            Kristopher Candy
                          </span>
                          <ul className="list-unstyled users-list m-0 float-right">
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-original-title="Product 1"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="media-object rounded-circle no-border-top-radius no-border-bottom-radius"
                                src={profile}
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-original-title="Product 2"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="media-object rounded-circle no-border-top-radius no-border-bottom-radius"
                                src={profile}
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-original-title="Product 3"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="media-object rounded-circle no-border-top-radius no-border-bottom-radius"
                                src={profile}
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                          <p className="list-group-item-text mb-0">
                            <span className="blue-grey lighten-2 font-small-3">
                              {" "}
                              #INV-12332{" "}
                            </span>
                          </p>
                        </div>
                      </a>
                      <a href="#" className="media border-0">
                        <div className="media-left pr-1">
                          <span className="avatar avatar-md avatar-away">
                            <img
                              className="media-object rounded-circle"
                              src={profile}
                              alt="Generic placeholder image"
                            />
                            <i />
                          </span>
                        </div>
                        <div className="media-body w-100">
                          <span className="list-group-item-heading">
                            Lawrence Fowler
                          </span>
                          <ul className="list-unstyled users-list m-0 float-right">
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-original-title="Product 1"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="media-object rounded-circle no-border-top-radius no-border-bottom-radius"
                                src={profile3}
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-original-title="Product 2"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="media-object rounded-circle no-border-top-radius no-border-bottom-radius"
                                src={profile3}
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                          <p className="list-group-item-text mb-0">
                            <span className="blue-grey lighten-2 font-small-3">
                              {" "}
                              #INV-12333{" "}
                            </span>
                          </p>
                        </div>
                      </a>
                      <a href="#" className="media border-0">
                        <div className="media-left pr-1">
                          <span className="avatar avatar-md avatar-busy">
                            <img
                              className="media-object rounded-circle"
                              src={profile}
                              alt="Generic placeholder image"
                            />
                            <i />
                          </span>
                        </div>
                        <div className="media-body w-100">
                          <span className="list-group-item-heading">
                            Linda Olson
                          </span>
                          <ul className="list-unstyled users-list m-0 float-right">
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-original-title="Product 1"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="media-object rounded-circle no-border-top-radius no-border-bottom-radius"
                                src={profile3}
                                alt="Avatar"
                              />
                            </li>
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-original-title="Product 2"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="media-object rounded-circle no-border-top-radius no-border-bottom-radius"
                                src={profile3}
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                          <p className="list-group-item-text mb-0">
                            <span className="blue-grey lighten-2 font-small-3">
                              {" "}
                              #INV-12334{" "}
                            </span>
                          </p>
                        </div>
                      </a>
                      <a href="#" className="media border-0">
                        <div className="media-left pr-1">
                          <span className="avatar avatar-md avatar-online">
                            <img
                              className="media-object rounded-circle"
                              src={profile}
                              alt="Generic placeholder image"
                            />
                            <i />
                          </span>
                        </div>
                        <div className="media-body w-100">
                          <span className="list-group-item-heading">
                            Kristopher Candy
                          </span>
                          <ul className="list-unstyled users-list m-0 float-right">
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-original-title="Product 1"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="media-object rounded-circle no-border-top-radius no-border-bottom-radius"
                                src={profile2}
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                          <p className="list-group-item-text mb-0">
                            <span className="blue-grey lighten-2 font-small-3">
                              {" "}
                              #INV-12336{" "}
                            </span>
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <InvestmentPerformance/>
      </div>
    </>

  )
}

export default Dashboard