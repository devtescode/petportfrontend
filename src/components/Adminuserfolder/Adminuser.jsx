import React, { useState, useEffect } from 'react'
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar'
import UserList from '../AdminUserListFolder/UserAdmin'
import UserForm from '../UserFormFolder/UserForm'
import axios from 'axios'
// import "../UserFormFolder/UserForm.css"

const Adminuser = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [formVisible, setFormVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        axios.get("http://localhost:5000/useranimalinvest/getallusers")
            .then(response => {
                setUsers(response.data)
                setFilteredUsers(response.data);
            })
            .catch(err => {
                console.error('There was an error fetching the users!', err);
            })
    }, [])


    const handleDelete = async (userId) => {
        // if (window.confirm('Are you sure you want to delete this user?')) {
        //     try {
        //         await axios.delete(`http://localhost:5000/useranimalinvest/delecteachuser/${userId}`);
        //         const updatedUsers = users.filter(user => user._id !== userId);
        //         setUsers(updatedUsers);
        //         setFilteredUsers(updatedUsers);
        //     } catch (error) {
        //         console.error('There was an error deleting the user!', error);
        //     }
        // }
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:5000/useranimalinvest/delecteachuser/${userId}`);
                    const updatedUsers = users.filter(user => user._id !== userId);
                    setUsers(updatedUsers);
                    setFilteredUsers(updatedUsers);
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        icon: 'success'
                    });
                } catch (error) {
                    console.error('There was an error deleting the user!', error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'There was an error deleting the user.',
                        icon: 'error'
                    });
                }
            }
        });
    };



    const handleEdit = (user) => {
        setSelectedUser(user);
        setFormVisible(true);
    };


    const handleSave = (updatedUser) => {
        const updatedUsers = users.map(user => (user._id === updatedUser._id ? updatedUser : user));
        setUsers(updatedUsers);
        setFilteredUsers(updatedUsers);
        setFormVisible(false);
    };


    const handleCloseForm = () => {
        setFormVisible(false);
        setSelectedUser(null);
    };

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        const filtered = users.filter(user =>
            user.Fullname.toLowerCase().includes(query.toLowerCase()) ||
            user.Email.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    return (
        <>
            <div className='Admindashboardcon'>
                <div className='Adminparentdiv'>
                    <div className='Admininnerfirstdiv bg-light fw-bold'>
                        <div className=''>
                            <Adminsidebar />
                        </div>
                    </div>
                    <div className='Admininnerseconddiv mt-5 mt-sm-0'>
                        <div className="container">
                            <div className="card shadow-lg">
                                <div className='text-center'>
                                    <h2>USER-LIST</h2>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search by Fullname or Email"
                                            value={searchQuery}
                                            onChange={handleSearch}
                                        />
                                    </div>

                                    <div className="table-responsive table-bordered border-white">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th> Name</th>
                                                    <th>Email</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredUsers.map((user, index) => (
                                                    <tr key={user._id}>
                                                        <td>{index + 1}</td>
                                                        <td>{user.Fullname}</td>
                                                        <td>{user.Email}</td>
                                                        <td className='gap-2 d-flex'>
                                                            <div>
                                                                <button onClick={() => handleEdit(user)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">
                                                                    <i className="ri-edit-box-line"></i>
                                                                </button>
                                                            </div>
                                                            <div>
                                                                <button onClick={() => handleDelete(user._id)} className="btn btn-danger">
                                                                    <i className="ri-delete-bin-line"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    {formVisible && (
                                        <UserForm user={selectedUser} onSave={handleSave} isVisible={formVisible} onClose={handleCloseForm} />
                                    )}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminuser