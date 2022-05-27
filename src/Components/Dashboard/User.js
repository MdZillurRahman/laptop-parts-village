import React from 'react';

const User = ({ user, index, refetch }) => {
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            refetch();
        })
    }
    return (
        <div>
            <tr>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
                <td><button class="btn btn-xs">X</button></td>
            </tr>
        </div>
    );
};

export default User;