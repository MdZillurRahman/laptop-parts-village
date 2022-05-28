import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmationModal = ({ deletingUser, refetch, setDeletingUser }) => {

    const removeUser = (email) => {
        fetch(`http://localhost:5000/user/${email}`, {
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
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are You Sure?</h3>
                    <p class="py-4">You want to delete {deletingUser.name} </p>
                    <div class="modal-action">
                        <button onClick={() =>removeUser(deletingUser.email)} className="btn btn-xs">OK</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;