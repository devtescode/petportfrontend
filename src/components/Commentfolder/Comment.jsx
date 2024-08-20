import React, { useEffect, useState } from 'react';
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar';
import axios from 'axios';
import "./Comment.css"
const Comment = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get('https://petportbackend.onrender.com/useranimalinvest/getuserallcomments');
                setComments(response.data.commentsall);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    }, []);


    const handleDeleteComment = async (commentId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`https://petportbackend.onrender.com/useranimalinvest/deletecomment/${commentId}`);
                    setComments(comments.filter(comment => comment._id !== commentId));
                    Swal.fire({
                        title: "Deleted!",
                        text: "The comment has been deleted.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error('Error deleting comment:', error);
                    Swal.fire({
                        title: "Error!",
                        text: "There was an issue deleting the comment.",
                        icon: "error"
                    });
                }
            }
        });
    };


    return (
        <>
            <div className='Admindashboardcon'>
                <div className='Adminparentdiv'>
                    <div className='Admininnerfirstdiv bg-light fw-bold'>
                        <Adminsidebar />
                    </div>
                    <div className='Admininnerseconddiv'>

                        <div className='container mt-5'>
                            <div className='text-center mt-4'>
                                <h1>View Comments</h1>
                            </div>
                            {comments.length === 0 ? (
                                <p className="text-center text-danger fw-bold">No comments available.</p>
                            ) : (
                                <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                    <table className="table table-striped">
                                        <thead style={{ position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 1 }}>
                                            <tr>
                                                <th>User</th>
                                                <th>Comment</th>
                                                <th>Date</th>
                                                <th>User Image</th>
                                                <th>Plan Image</th>
                                                <th>Likes</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {comments.map(comment => (
                                                <tr key={comment._id}>
                                                    <td>{comment.userId?.Fullname || 'Unknown User'}</td>
                                                    <td>{comment.commentText}</td>
                                                    <td>{new Date(comment.createdAt).toLocaleString()}</td>
                                                    <td>
                                                        {comment.userId?.Uploadimg ? (
                                                            <img
                                                                src={comment.userId.Uploadimg}
                                                                alt={comment.userId.Fullname}
                                                                className="user-image"
                                                                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                                            />
                                                        ) : (
                                                            <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ccc    ' }} />
                                                        )}
                                                    </td>
                                                  
                                                    <td>
                                                        {comment.planId?.image ? (
                                                            <img
                                                                src={comment.planId.image}
                                                                alt="Plan"
                                                                className="plan-image"
                                                                style={{ width: '50px', height: '50px' }}
                                                            />
                                                        ) : (
                                                            'No Image'
                                                        )}
                                                    </td>
                                                    <td>
                                                        {comment.planId ? (
                                                            <div>
                                                                {/* <span className="badge bg-dark fw-bold mt-1">
                                                                    {comment.planId.likesCount} Likes
                                                                </span> */}
                                                                <span className='' style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}>
                                                                    {comment.planId.likes.includes(comment.userId?._id) ? (
                                                                        <i className="text-primary ri-thumb-up-fill"  style={{ fontSize: '2rem', marginRight: '0.5rem', cursor: 'pointer' }}
                                                                        ></i>
                                                                    ) : (
                                                                        <i className="ri-thumb-up-line" 
                                                                        style={{ fontSize: '2rem', marginRight: '0.5rem', cursor: 'pointer' }}></i>
                                                                    )}
                                                                </span>
                                                            </div>
                                                        ) : (
                                                            'No Plan Info'
                                                        )}
                                                    </td>
                                                    <td>
                                                        <button
                                                            onClick={() => handleDeleteComment(comment._id)}
                                                            className="btn btn-danger"
                                                        >
                                                            <i className="ri-close-circle-line"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Comment;
