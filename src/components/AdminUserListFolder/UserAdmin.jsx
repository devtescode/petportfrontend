import React, { useState, useEffect } from 'react'
import axios from 'axios';

const UserAdmin = ({ onEdit }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/useranimalinvest/getallusers")
            .then(response => {
                setUsers(response.data)
            })
            .catch(err => {
                console.error('There was an error fetching the users!', err);
            })
    }, [])
    return (
        <>
            <ul className="list-group">
                {users.map(user => (
                    <li key={user._id} className="list-group-item">
                        <h5 className="card-title">{user.Fullname}</h5>
                        <p className="card-text">
                            <strong>Number:</strong> {user.Number}<br />
                            <strong>Email:</strong> {user.Email}<br />
                            <strong>Balance:</strong> {user.Balance}<br />
                            <strong>Upload Image:</strong> {user.Uploadimg ? user.Uploadimg : 'N/A'}<br />
                            <strong>Total Invest:</strong> {user.Totalinvest}<br />
                            <strong>Amount Invest:</strong> {user.Amountinvest}<br />
                            <strong>Code Token:</strong> {user.Codetoken ? user.Codetoken : 'N/A'}<br />
                            <strong>Token Generation Attempts:</strong> {user.tokenGenerationAttempts}<br />
                            <strong>First Attempt Timestamp:</strong> {user.firstAttemptTimestamp ? new Date(user.firstAttemptTimestamp).toLocaleString() : 'N/A'}<br />
                            <strong>Role:</strong> {user.role}
                        </p>
                        <h6>History</h6>
                        <ul className="list-group list-group-flush">
                            {user.history.map((investment, index) => (
                                <li key={index} className="list-group-item">
                                    <strong>Product ID:</strong> {investment.productId}<br />
                                    <strong>Product Name:</strong> {investment.productName}<br />
                                    <strong>Product Price:</strong> {investment.productPrice}<br />
                                    <strong>Investment Date:</strong> {new Date(investment.investmentDate).toLocaleString()}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => onEdit(user)} className="btn btn-primary mt-3">Edit User</button>

                    </li>
                ))}
            </ul>
        </>
    )
}

export default UserAdmin