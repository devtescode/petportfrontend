import React, { useEffect, useState } from 'react';

const Video = () => {
    const [videoSrc, setVideoSrc] = useState('');

    useEffect(() => {
        setVideoSrc('https://www.youtube.com/embed/VZsHFormuGg');

        return () => {
            setVideoSrc(''); // Clear the video source when the component is unmounted
        };
    }, []);

    return (
        <>
            {videoSrc && (
                <div className="mt-3">
                    <div className="embed-responsive embed-responsive-16by9" style={{ width: "100%" }}>
                        <iframe
                            id="video"
                            className="embed-responsive-item"
                            src={videoSrc}
                            allowFullScreen
                            title="YouTube Video"
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default Video;
 