import React from 'react'
import { useNavigate } from 'react-router'
import Narbar from '../Narbarfolder/Narbar'

const Contact = () => {
    return (
        <>
        <Narbar/>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div
                        className="border-start border-5 border-primary ps-5 mb-5"
                        style={{ maxWidth: 600 }}
                    >
                        <h6 className="text-primary text-uppercase">Contact Us</h6>
                        <h1 className="display-5 text-uppercase mb-0">
                            Please Feel Free To Contact Us
                        </h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <form>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="Your Name"
                                            style={{ height: 55 }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="email"
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="Your Email"
                                            style={{ height: 55 }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="Subject"
                                            style={{ height: 55 }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            className="form-control bg-light border-0 px-4 py-3"
                                            rows={8}
                                            placeholder="Message"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-light mb-5 p-5">
                                <div className="d-flex align-items-center mb-2">
                                    <i className="bi bi-geo-alt fs-1 text-primary me-3" />
                                    <div className="text-start">
                                        <h6 className="text-uppercase mb-1">Our Office</h6>
                                        <span>25 Street, Yaoco, Filling station</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="bi bi-envelope-open fs-1 text-primary me-3" />
                                    <div className="text-start">
                                        <h6 className="text-uppercase mb-1">Email Us</h6>
                                        <span>info@example.com</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-4">
                                    <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
                                    <div className="text-start">
                                        <h6 className="text-uppercase mb-1">Call Us</h6>
                                        <span>+012 345 6789</span>
                                    </div>
                                </div>
                                <div>
                                    <iframe
                                        className="position-relative w-100"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40916.19416957083!2d4.250600071834106!3d8.130575281120566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103ade09c5605be1%3A0x457cb1f996598d7c!2sOgbomosho%2C%20Nigeria!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                        frameBorder={0}
                                        style={{ height: 205, border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex={0}

                                   

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
            {/* Footer Start */}
            <div className="container-fluid bg-light mt-5 py-5">
                <div className="container pt-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                                Get In Touch
                            </h5>
                            <p className="mb-4">
                                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
                                et dolor sed dolor
                            </p>
                            <p className="mb-2">
                                <i className="bi bi-geo-alt text-primary me-2" />
                                123 Street, New York, USA
                            </p>
                            <p className="mb-2">
                                <i className="bi bi-envelope-open text-primary me-2" />
                                info@example.com
                            </p>
                            <p className="mb-0">
                                <i className="bi bi-telephone text-primary me-2" />
                                +012 345 67890
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
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
                            <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
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
                                <a className="text-body" href="#">
                                    <i className="bi bi-arrow-right text-primary me-2" />
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                                Newsletter
                            </h5>
                            <form action="">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control p-3"
                                        placeholder="Your Email"
                                    />
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
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
                                Designed by{" "}
                                <a className="text-white" href="https://htmlcodex.com">
                                    HTML Codex
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Back to Top */}
            <a href="#" className="btn btn-primary py-3 fs-4 back-to-top">
                <i className="bi bi-arrow-up" />
            </a>
            {/* JavaScript Libraries */}
            {/* Template Javascript */}
        </>

    )
}

export default Contact