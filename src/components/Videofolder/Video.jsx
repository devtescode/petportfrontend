import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Video = () => {
    const [show, setShow] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');
    const handleShow = () => {
        setVideoSrc('https://www.youtube.com/embed/VZsHFormuGg');
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setVideoSrc('');
    };
    return (
        <>
        <div>
            <Button className="btn-play me-4 border" onClick={handleShow} style={{zIndex:"100"}}>
                Play Video
            </Button>
        </div>

            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>YouTube Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                            id="video"
                            className="embed-responsive-item"
                            src={videoSrc}
                            allowFullScreen
                            title="YouTube Video"
                        ></iframe>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Video