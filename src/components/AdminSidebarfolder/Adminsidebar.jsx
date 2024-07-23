import React, { useState } from 'react';
import { Offcanvas, Button, Navbar, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';
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

    const UserBtn = ()=>{
        navigate("/adminuser")
    }

    const Adminhome =()=>{
        navigate("/admindb")
    }

    const AdminsettingBtn = ()=>{
        navigate("/adminsetting")
    }

    function AdminPanelContent() {
        return (
            <div className='d-flex flex-column fs-3 p-3'>
                <Button onClick={Adminhome} variant="outline-primary" className='d-flex align-items-center my-1'>
                    <i className="ri-home-line"></i>
                    <span className='mx-1'>Home</span>
                </Button>
                <Button onClick={UserBtn} variant="outline-primary" className='d-flex align-items-center my-1'>
                <i class="ri-profile-line"></i>
                    <span className='mx-1'>User</span>
                </Button>
                <Button onClick={AdminsettingBtn} variant="outline-primary" className='d-flex align-items-center my-1'>
                <i class="ri-settings-line"></i>
                    <span className='mx-1'>Setting</span>
                </Button>
                <Button variant="outline-primary" className='d-flex align-items-center my-1'>
                    <i class="ri-profile-line"></i>
                    <span className='mx-1'>profile</span>
                </Button>
                <Button variant="outline-primary" className='d-flex align-items-center my-1'>
                    <i class="ri-notification-line"></i>
                    <span className='mx-1'>Notificaion</span>
                </Button>
                <Button variant="outline-primary" className='d-flex align-items-center my-1' onClick={LogoutBtn}>
                    <i class="ri-logout-box-r-line"></i>
                    <span className='mx-1'>Log-out</span>
                </Button>
            </div>

        );
    }

    return (
        <>
            {/* Navbar for small screens */}
            <Navbar bg="light" expand="lg" className="d-lg-none">
                <Container fluid>
                    <Button variant="primary" onClick={handleShow}>
                        Open
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
