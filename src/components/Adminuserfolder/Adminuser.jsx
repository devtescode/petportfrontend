import React, {useState} from 'react'
import Adminsidebar from '../AdminSidebarfolder/Adminsidebar'
import UserList from '../AdminUserListFolder/UserAdmin'
import UserForm from '../UserFormFolder/UserForm'
import axios from 'axios';

const Adminuser = () => {
    const [editingUser, setEditingUser] = useState(null);

    const handleEdit = (user) => {
        setEditingUser(user);
    };
    const handleSave = (savedUser) => {
        setEditingUser(null);
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
                                  <UserList onEdit={handleEdit}/> 
                                  <UserForm user={editingUser} onSave={handleSave} />
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