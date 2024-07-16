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
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await axios.delete(`http://localhost:5000/useranimalinvest/delecteachuser/${userId}`);
                const updatedUsers = users.filter(user => user._id !== userId);
                setUsers(updatedUsers);
                setFilteredUsers(updatedUsers);
            } catch (error) {
                console.error('There was an error deleting the user!', error);
            }
        }
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

    const DelectUser = ()=>{
        alert("Dfv")
    }


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
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search by Fullname or Email"
                                            value={searchQuery}
                                            onChange={handleSearch}
                                        />
                                    </div>

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
                                            {filteredUsers.map((user, index) => (
                                                <tr key={user._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{user.Fullname}</td>
                                                    <td>{user.Email}</td>
                                                    <td className='gap-2 d-flex'>
                                                        <div>
                                                            <button onClick={() => handleEdit(user)} className="btn btn-primary">
                                                                <i className="ri-edit-box-line"></i>
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <button onClick={() => handleDelete(user._id)}  className="btn btn-danger">
                                                                <i class="ri-delete-bin-line"></i>
                                                            </button>
                                                        </div>
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