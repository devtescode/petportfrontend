import React from 'react'
import '../theme-assets/css/vendors.css';
import '../theme-assets/css/plugins/charts/chartist.css';
import '../theme-assets/css/app-lite.css'
import '../theme-assets/css/core/menu/menu-types/vertical-menu.css'
import '../theme-assets/css/core/colors/palette-gradient.css'
import '../theme-assets/css/pages/dashboard-ecommerce.css'
import Sidenav from '../Sidenavbarfolder/Sidenav';
import profile from '../theme-assets/images/portrait/small/avatar-s-19.png'
// ../theme-assets/images/portrait/small/avatar-s-19.png

const Dashboard = () => {
  const toggleDropdown=()=> {
    let dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display === "block" ? dropdownContent.style.display = "none" : dropdownContent.style.display = "block";
  }

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
                    href="#"
                  >
                    <i className="ft-menu" />
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
                <li className="dropdown dropdown-notification nav-item">
                  <a
                    className="nav-link nav-link-label"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <i className="ficon ft-mail"> </i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="arrow_box_right">
                      <a className="dropdown-item" href="#">
                        <i className="ft-book" /> Read Mail
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="ft-bookmark" /> Read Later
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="ft-check-square" /> Mark all Read{" "}
                      </a>
                    </div>
                  </div>
                </li>



                <li className="dropdown dropdown-user nav-item">
                  <a
                    className="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <span className="avatar avatar-online" onClick={toggleDropdown}>
                      <img
                        src={profile}
                        alt="avatar"
                      />
                      <i />
                    </span>
                  </a>
                  <div class="dropdown-content" id="dropdownContent">
                  <a className="dropdown-item" href="#">
                        <i className="ft-user" /> Edit Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="ft-mail" /> My Inbox
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="ft-check-square" /> Task
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="ft-message-square" /> Chats
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        <i className="ft-power" /> Logout
                      </a>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Sidenav />
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-wrapper-before" />
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
                      Progress Stats
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12">
                <div className="card pull-up ecom-card-1 bg-white">
                  <div className="card-content ecom-card2 height-180">
                    <h5 className="text-muted info position-absolute p-1">
                      Activity Stats
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
                      Sales Stats
                    </h5>
                    <div>
                      <i className="ft-shopping-cart warning font-large-1 float-right p-1" />
                    </div>
                    <div className="progress-stats-container ct-golden-section height-75 position-relative pt-3">
                      <div id="progress-stats-bar-chart2" />
                      <div
                        id="progress-stats-line-chart2"
                        className="progress-stats-shadow"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ eCommerce statistic */}
            {/* Statistics */}
            <div className="row match-height">
              <div className="col-xl-4 col-lg-12">
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
                          src="theme-assets/images/portrait/small/avatar-s-2.png"
                          alt="avatar"
                        />
                      </span>
                      <span className="avatar">
                        <img
                          src="theme-assets/images/portrait/small/avatar-s-3.png"
                          alt="avatar"
                        />
                      </span>
                      <span className="avatar">
                        <img
                          src="theme-assets/images/portrait/small/avatar-s-4.png"
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
              </div>
              <div className="col-xl-4 col-lg-12">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body">
                      <h4 className="card-title">Recent products</h4>
                      <h6 className="card-subtitle text-muted">
                        Carousel Card With Header &amp; Footer
                      </h6>
                    </div>
                    <div
                      id="carousel-area"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <ol className="carousel-indicators">
                        <li
                          data-target="#carousel-area"
                          data-slide-to={0}
                          className="active"
                        />
                        <li data-target="#carousel-area" data-slide-to={1} />
                        <li data-target="#carousel-area" data-slide-to={2} />
                      </ol>
                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                          <img
                            src="theme-assets/images/carousel/08.jpg"
                            className="d-block w-100"
                            alt="First slide"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="theme-assets/images/carousel/03.jpg"
                            className="d-block w-100"
                            alt="Second slide"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="theme-assets/images/carousel/01.jpg"
                            className="d-block w-100"
                            alt="Third slide"
                          />
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carousel-area"
                        role="button"
                        data-slide="prev"
                      >
                        <span className="la la-angle-left" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carousel-area"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          className="la la-angle-right icon-next"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                    <div className="card-body">
                      <a href="#" className="card-link">
                        Card link
                      </a>
                      <a href="#" className="card-link">
                        Another link
                      </a>
                    </div>
                  </div>
                  <div className="card-footer border-top-blue-grey border-top-lighten-5 text-muted">
                    <span className="float-left">2 days ago</span>
                    <span className="tags float-right">
                      <span className="badge badge-pill badge-primary">
                        Branding
                      </span>
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
                              src="theme-assets/images/portrait/small/avatar-s-7.png"
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
                                src="theme-assets/images/portfolio/portfolio-1.jpg"
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
                                src="theme-assets/images/portfolio/portfolio-2.jpg"
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
                                src="theme-assets/images/portfolio/portfolio-4.jpg"
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
                              src="theme-assets/images/portrait/small/avatar-s-8.png"
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
                                src="theme-assets/images/portfolio/portfolio-5.jpg"
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
                                src="theme-assets/images/portfolio/portfolio-6.jpg"
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
                              src="theme-assets/images/portrait/small/avatar-s-9.png"
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
                                src="theme-assets/images/portfolio/portfolio-2.jpg"
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
                                src="theme-assets/images/portfolio/portfolio-5.jpg"
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
                              src="theme-assets/images/portrait/small/avatar-s-10.png"
                              alt="Generic placeholder image"
                            />
                            <i />
                          </span>
                        </div>
                        <div className="media-body w-100">
                          <span className="list-group-item-heading">Roy Clark</span>
                          <ul className="list-unstyled users-list m-0 float-right">
                            <li
                              data-toggle="tooltip"
                              data-popup="tooltip-custom"
                              data-original-title="Product 1"
                              className="avatar avatar-sm pull-up"
                            >
                              <img
                                className="media-object rounded-circle no-border-top-radius no-border-bottom-radius"
                                src="theme-assets/images/portfolio/portfolio-6.jpg"
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
                                src="theme-assets/images/portfolio/portfolio-1.jpg"
                                alt="Avatar"
                              />
                            </li>
                          </ul>
                          <p className="list-group-item-text mb-0">
                            <span className="blue-grey lighten-2 font-small-3">
                              {" "}
                              #INV-12335{" "}
                            </span>
                          </p>
                        </div>
                      </a>
                      <a href="#" className="media border-0">
                        <div className="media-left pr-1">
                          <span className="avatar avatar-md avatar-online">
                            <img
                              className="media-object rounded-circle"
                              src="theme-assets/images/portrait/small/avatar-s-11.png"
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
                                src="theme-assets/images/portfolio/portfolio-5.jpg"
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
            {/*/ Statistics */}
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////*/}
      <footer className="footer footer-static footer-light navbar-border navbar-shadow">
        <div className="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
          <span className="float-md-left d-block d-md-inline-block">
            2018 © Copyright{" "}
            <a
              className="text-bold-800 grey darken-2"
              href="https://themeselection.com"
              target="_blank"
            >
              ThemeSelection
            </a>
          </span>
          <ul className="list-inline float-md-right d-block d-md-inline-blockd-none d-lg-block mb-0">
            <li className="list-inline-item">
              <a
                className="my-1"
                href="https://themeselection.com/"
                target="_blank"
              >
                {" "}
                More themes
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="my-1"
                href="https://themeselection.com/support"
                target="_blank"
              >
                {" "}
                Support
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="my-1"
                href="https://themeselection.com/products/chameleon-admin-modern-bootstrap-webapp-dashboard-html-template-ui-kit/"
                target="_blank"
              >
                {" "}
                Purchase
              </a>
            </li>
          </ul>
        </div>
      </footer>
      {/* BEGIN VENDOR JS*/}
      {/* BEGIN VENDOR JS*/}
      {/* BEGIN PAGE VENDOR JS*/}
      {/* END PAGE VENDOR JS*/}
      {/* BEGIN CHAMELEON  JS*/}
      {/* END CHAMELEON  JS*/}
      {/* BEGIN PAGE LEVEL JS*/}
      {/* END PAGE LEVEL JS*/}
    </>

  )
}

export default Dashboard