import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmationModal = ({ deletingUser, refetch, setDeletingUser }) => {

    const removeUser = (email) => {
        fetch(`https://laptop-parts-village-server-site-production.up.railway.app/user/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setDeletingUser(null);
                    refetch();
                    toast("User Removed!!");
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are You Sure?</h3>
                    <p className="py-4">You want to delete {deletingUser.name} </p>
                    <div className="modal-action">
                        <button onClick={() =>removeUser(deletingUser.email)} className="btn btn-xs">OK</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;