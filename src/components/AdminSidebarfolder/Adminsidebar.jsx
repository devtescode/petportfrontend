import React, { useState } from 'react';
import { Offcanvas, Button, Navbar, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './AdminSidebar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'remixicon/fonts/remixicon.css';

const Adminsidebar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()
    const LogoutBtn = () => {
        navigate("/adminreg")
        localStorage.removeItem('admintoken');
    }

    const UserBtn = () => {
        navigate("/adminuser")
    }

    const Adminhome = () => {
        navigate("/admindb")
    }

    const AdminsettingBtn = () => {
        navigate("/adminsetting")
    }

    const PlanBtn = () => {
        navigate("/plan")
    }

    const PlanHistoryBtn = () => {
        navigate("/planhistory")
    }

    function AdminPanelContent() {
        return (
            <div className='sidebar-container '>
                <div className='sidebar-content d-flex flex-column fs-3 p-3'>
                    <Button onClick={Adminhome} variant="outline-primary" className='d-flex align-items-center my-1'>
                        <i className="ri-home-line"></i>
                        <span className='' style={{ marginLeft: "5px" }}>Home</span>
                    </Button>
                    <Button onClick={UserBtn} variant="outline-primary" className='d-flex align-items-center my-1'>
                        <i className="ri-profile-line"></i>
                        <span className='' style={{ marginLeft: "5px" }}>User</span>
                    </Button>
                    <Button onClick={AdminsettingBtn} variant="outline-primary" className='d-flex align-items-center my-1'>
                        <i className="ri-settings-line"></i>
                        <span className='' style={{ marginLeft: "5px" }}>Setting</span>
                    </Button>
                    <Button onClick={PlanBtn} variant="outline-primary" className='d-flex align-items-center my-1'>
                        <i className="ri-building-3-line"></i>
                        <span className='' style={{ marginLeft: "5px" }}>Plan</span>
                    </Button>
                    <Button onClick={PlanHistoryBtn} variant="outline-primary" className='d-flex align-items-center my-1'>
                        <i className="ri-history-line"></i>
                        <span className='' style={{ marginLeft: "5px" }}>Plan History</span>
                    </Button>
                    <Button variant="outline-primary" className='d-flex align-items-center my-1'>
                        <i className="ri-profile-line"></i>
                        <span className='' style={{ marginLeft: "5px" }}>Profile</span>
                    </Button>
                    <Button variant="outline-primary" className='d-flex align-items-center my-1'>
                        <i className="ri-notification-line"></i>
                        <span className='' style={{ marginLeft: "5px" }}>Notification</span>
                    </Button>
                    <Button variant="outline-primary" className='d-flex align-items-center my-1' onClick={LogoutBtn}>
                        <i className="ri-logout-box-r-line"></i>
                        <span className='' style={{ marginLeft: "5px" }}>Log-out</span>
                    </Button>
                </div>
            </div>

        );
    }

    return (
        <>
            {/* Navbar for small screens */}
            <Navbar bg="" expand="lg" className="d-lg-none">
                <Container fluid>
                    <Button variant="primary" onClick={handleShow}>
                        <i className="ri-menu-2-line"></i>
                    </Button>
                </Container>
            </Navbar>

            {/* Offcanvas for small screens */}
            <Offcanvas show={show} onHide={handleClose} className="d-lg-none">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Admin Panel</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <AdminPanelContent />
                </Offcanvas.Body>
            </Offcanvas>

            {/* Sidebar for large screens */}
            <div className="d-none d-lg-block position-fixed bg-white vh-100 border border-1 border-light" style={{ width: '18%' }}>
                <div className="fs-3">
                    <p>Admin Panel</p>
                </div>
                <AdminPanelContent />
            </div>
        </>
    );
}

export default Adminsidebar;
