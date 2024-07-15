import React, { useState, useEffect } from 'react'
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar'
import UserList from '../AdminUserListFolder/UserAdmin'
import UserForm from '../UserFormFolder/UserForm'
import axios from 'axios'
// import "../UserFormFolder/UserForm.css"

const Adminuser = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);
    // const [selectedUser, setSelectedUser] = useState(null);
    const [formVisible, setFormVisible] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:5000/useranimalinvest/getallusers")
            .then(response => {
                setUsers(response.data)
            })
            .catch(err => {
                console.error('There was an error fetching the users!', err);
            })
    }, [])


    const handleEdit = (user) => {
        setSelectedUser(user);
        setFormVisible(true);
    };


    const handleSave = (updatedUser) => {
        setUsers(users.map(user => (user._id === updatedUser._id ? updatedUser : user)));
        setFormVisible(false);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
        setSelectedUser(null);
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
                    <div className='Admininnerseconddiv'>
                        <div className="container">
                            <div className="card shadow-lg">
                                <div className='text-center'>
                                    <h2>USER-LIST</h2>
                                </div>
                                <div className="card-body">
                                    {/* <UserList onEdit={handleEdit}/>  */}
                                    {/* <UserForm user={editingUser} onSave={handleSave} /> */}
                                    {/* list-style-type: none; */}
                                    
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Full Name</th>
                                                <th>Email</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user, index) => (
                                                <tr key={user._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{user.Fullname}</td>
                                                    <td>{user.Email}</td>
                                                    <td>
                                                        <button onClick={() => handleEdit(user)} className="btn btn-primary">
                                                            <i className="ri-edit-box-line"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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