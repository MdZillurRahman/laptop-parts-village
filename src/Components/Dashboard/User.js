import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index, refetch }) => {
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
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast("Admin Selected!!")
                }
            })
    }
    return (
        <div>
            <tr>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
                <td><button className="btn btn-xs">X</button></td>
            </tr>
        </div>
    );
};

export default User;