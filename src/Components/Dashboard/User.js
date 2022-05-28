import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index, refetch, setDeletingUser }) => {
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast("Admin Selected!!")
                }
            })
    }

   

    return (
            <tr>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
                <td>
                    <label onClick={() => setDeletingUser(user)} htmlFor="delete-confirm-modal" className="btn btn-xs modal-button">Remove User</label>
                </td>
            </tr>
    );
};

export default User;