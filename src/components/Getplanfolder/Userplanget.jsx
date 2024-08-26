import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidenav from '../Sidenavbarfolder/Sidenav';
import './planget.css';

const Userplanget = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState({});
    const [newCommentText, setNewCommentText] = useState('');
    const [currentPlanId, setCurrentPlanId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const fetchPlans = async () => {
            try {
                const response = await axios.get('https://petportbackend.onrender.com/useranimalinvest/getuserplans');
                if (isMounted) {
                    setPlans(response.data.plans);
                    setLoading(false);

                    response.data.plans.forEach(plan => {
                        fetchComments(plan._id);
                    });
                }
            } catch (error) {
                if (isMounted) {
                    console.error('Error fetching plans:', error);
                    setLoading(false);
                }
            }
        };
        fetchPlans();

        const intervalId = setInterval(() => {
            if (isMounted) fetchPlans();
        }, 5000);

        return () => {
            isMounted = false;
            clearInterval(intervalId);
        };
    }, []);


    // const fetchComments = async (planId) => {
    //     try {
    //         const response = await axios.get(`http://localhost:5000/useranimalinvest/getcomments/${planId}`);
    //         setComments(prevComments => ({
    //             ...prevComments,
    //             [planId]: response.data.comments
    //         }));
    //         // console.log(response.data.comments);
    //         // response.data.comments.forEach(comment => {
    //         //     console.log(comment.userId.Uploadimg); 
    //         // });
    //     } catch (error) {
    //         console.error('Error fetching comments:', error);
    //     }
    // };

    const fetchComments = async (planId) => {
        try {
            const response = await axios.get(`https://petportbackend.onrender.com/useranimalinvest/getcomments/${planId}`);
            const commentCount = response.data.comments.length;

            setComments(prevComments => ({
                ...prevComments,
                [planId]: {
                    comments: response.data.comments,
                    count: commentCount
                }
            }));
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };


    const handleInvestClick = (planId) => {
        navigate(`/userview/${planId}`);
    };

    const handleLikeClick = async (planId, currentLikes) => {
        const userData = JSON.parse(localStorage.getItem("UserData"));
        const userId = userData.userId;

        if (!userId) {
            console.error('User ID is missing');
            return;
        }

        try {
            const response = await axios.post('https://petportbackend.onrender.com/useranimalinvest/likeplan', { userId, planId });
            setPlans(plans.map(plan =>
                plan._id === planId
                    ? {
                        ...plan,
                        likes: response.data.likes,
                        likesCount: response.data.likesCount
                    }
                    : plan
            ));
            console.log(response.data.likes);

        } catch (error) {
            console.error('Error liking plan:', error);
        }
    };

    // const handleAddComment = async (planId) => {
    //     const userData = JSON.parse(localStorage.getItem("UserData"));
    //     const userId = userData.userId;

    //     try {
    //         const response = await axios.post('http://localhost:5000/useranimalinvest/addcomment', {
    //             userId,
    //             planId,
    //             commentText: newCommentText
    //         });

    //         setComments(prevComments => ({
    //             ...prevComments,
    //             [planId]: [...(prevComments[planId] || []), response.data.comment]
    //         }));

    //         setNewCommentText('');
    //     } catch (error) {
    //         console.error('Error adding comment:', error);
    //     }
    // };
    const handleAddComment = async (planId) => {
        const userData = JSON.parse(localStorage.getItem("UserData"));
        const userId = userData.userId;

        try {
            const response = await axios.post('https://petportbackend.onrender.com/useranimalinvest/addcomment', {
                userId,
                planId,
                commentText: newCommentText
            });

            setComments(prevComments => ({
                ...prevComments,
                [planId]: {
                    comments: [...(prevComments[planId]?.comments || []), response.data.comment],
                    count: (prevComments[planId]?.count || 0) + 1
                }
            }));
            setNewCommentText('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };


    const handleCommentIconClick = (planId) => {
        setCurrentPlanId(planId);
        fetchComments(planId);  // Fetch comments again for the selected plan
    };

    return (
        <>
            <Sidenav />
            <div className='alldivcontainers'>
                <div className="container">
                    <h2 className='mt-1'>Plan List</h2>
                    <div className="row">
                        {loading ? (
                            <p className="text-center">Loading...</p>
                        ) : (
                            plans.length === 0 ? (
                                <p className="text-center text-danger fw-bold">There are no plans added yet.</p>
                            ) :
                                (
                                    plans.map(plan => {
                                        const userData = JSON.parse(localStorage.getItem("UserData"));

                                        const userId = userData ? userData.userId : null;

                                        // Ensure `plan.likes` is an array or default to an empty array
                                        const isLiked = Array.isArray(plan.likes) && plan.likes.includes(userId);

                                        return (
                                            <div key={plan._id} className="col-md-4">
                                                <div className="card mb-4 imgbgstylingcon">
                                                    <div className="imgbgstyling">
                                                        <div className="imgstybg">
                                                            {plan.image && (
                                                                <img src={plan.image} className="card-img-top" alt={plan.name} />
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="card-body">
                                                        <h3 className="card-title">Animal Name: {plan.name}</h3>
                                                        <p className="card-text">Description: {plan.description}</p>
                                                        {/* <p className="card-text">Price: ₦{plan.price}</p> */}
                                                        <button onClick={() => handleInvestClick(plan._id)} className="investBtn btn btn-primary text-white w-100 rounded-5">View Investment</button>
                                                        <div className='d-flex justify-content-around mt-2'>
                                                            <div className='' style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}>
                                                                <i
                                                                    className={`ri-thumb-up-${isLiked ? 'fill' : 'line'} text-primary`}
                                                                    onClick={() => handleLikeClick(plan._id, plan.likesCount)}
                                                                    style={{ fontSize: '2rem', marginRight: '0.5rem', cursor: 'pointer' }} // Increased size and added margin
                                                                ></i>
                                                                <span>{plan.likesCount || 0}</span>
                                                            </div>

                                                            <div className='' style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}>
                                                                <i
                                                                    className="ri-chat-4-line"
                                                                    style={{ fontSize: '2rem', marginRight: '0.5rem', cursor: 'pointer' }}
                                                                    data-bs-toggle="offcanvas"
                                                                    data-bs-target="#offcanvasBottom"
                                                                    onClick={() => handleCommentIconClick(plan._id)}
                                                                ></i>
                                                                <span>{comments[plan._id]?.count || 0}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )
                        )}
                    </div>
                </div>
            </div>
            {/* Offcanvas for Comments */}
            <div className="shadow-lg offcanvas offcanvas-bottom offcansav_commnent_container" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style={{ height: "450px" }}>
                <div className="offcanvas-header ">
                    {/* <h5 className="offcanvas-title" id="offcanvasBottomLabel">Comments</h5> */}
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body small ">
                    <div className="add-comment mb-3 col-md-7 col-sm-12">
                        <div className='w-100'>
                            <div>
                                <label htmlFor="Add comment">
                                    <b className='fs-5'>
                                        Add Comment
                                    </b>
                                </label>
                            </div>
                            <div className='d-flex'>
                                <input
                                    type="text"
                                    value={newCommentText}
                                    onChange={(e) => setNewCommentText(e.target.value)}
                                    placeholder="Add a comment..."
                                    className="form-control p-2"
                                />
                                <button onClick={() => handleAddComment(currentPlanId)} className="btn btn-primary" style={{ backgroundColor: "#0056B3" }}><i class="ri-send-plane-2-fill"></i></button>
                            </div>
                        </div>

                    </div>

                    <div className="comment-list">
                        {(comments[currentPlanId]?.comments || []).map(comment => (
                            <div key={comment._id} className="comment mb-3">
                                <div className='comment_profile'>
                                    {comment.userId && comment.userId.Uploadimg ? (
                                        <img src={comment.userId.Uploadimg} className='comment_profile2' alt="User profile" />
                                    ) : (
                                        <div className='comment_profile2'></div>
                                    )}
                                </div>
                                <p className='fs-3'>{comment.userId?.Fullname || "Unknown User"}</p>
                                <p className='fs-5'>{comment.commentText}</p>
                                <span>{new Date(comment.createdAt).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

        </>
    );
}

export default Userplanget;
