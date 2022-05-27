import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);

    if (user) {
        return (
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src = { user.photoURL } alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Name : {user.displayName}</h2>
                    <h2 class="card-title">Email : {user.email}</h2>
                    
                </div>
            </div>
        );
    }
};


export default Profile;