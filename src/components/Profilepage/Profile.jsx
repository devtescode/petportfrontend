import React, { useEffect, useState } from 'react';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import imagelocate from "../../assets/profile.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [file, setFile] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const url1 = "http://localhost:5000/useranimalinvest/dashboard";
    const url = "http://localhost:5000/useranimalinvest/profile";

    const getFile = (e) => {
        const myFile = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(myFile);
        reader.onload = () => {
            setFile(reader.result);
        };
    };

    const myUpload = () => {
        const userData = { file, token: localStorage.token };
        setLoading(true);
        axios.post(url, userData).then((response) => {
            setLoading(false);
            swal.fire({
                title: response.data.status ? "Good job!" : "",
                text: response.data.message,
                icon: response.data.status ? "success" : "warning",
                button: "Okay",
            });
            localStorage.setItem('image', response.data.image)
            if (response.data.status) {
                setImage(response.data.image);
            }
        }).catch((error) => {
            setLoading(false);
            swal({
                title: "Error",
                text: error.message,
                icon: "error",
                button: "Okay",
            });
        });
    };

    useEffect(() => {
        const token = localStorage.token;
        if (!token) {
            navigate("/login");
            return;
        }

        setLoading(true);
        axios.get(url1, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        }).then((response) => {
            setLoading(false);
            if (!localStorage.useradminlogin || response.data.status === false) {
                navigate("/login");
            } else {
                setImage(response.data.user.Uploadimg);
            }
        }).catch((error) => {
            setLoading(false);
            console.error(error);
            navigate("/login");
        });
    }, [navigate]);

    return (
        <>
            <Sidenav profile={image ? image : imagelocate}/>
            <div className='alldivcontainers'>
                <div className=''>
                    <h2 className="mt-">Profile</h2>
                    <div className='mx-auto mt-5 imgDiv'>
                        <img src={image ? image : imagelocate} className='mx-auto imgDiv border border-1 border-dark rounded-3 shadow-lg' alt="Profile" />
                    </div>
                    <div className='text-center mt-1'>
                        <input type="file" onChange={getFile} />
                        <button className='btn btn-dark' style={{ backgroundColor: "#4F46E5" }} onClick={myUpload} disabled={loading}>
                            {loading ? "Uploading..." : "Upload"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
