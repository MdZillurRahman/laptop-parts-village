import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UserProfile = () => {
    const [user] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState([]);


    useEffect(() => {
        fetch(`https://laptop-parts-village-server-site-production.up.railway.app/userInfo/${user.email}`)
            .then(res => res.json())
            .then(data => { 
                setUserInfo(data);
            })
    }, [user]);

    
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Name : {user.displayName}</h2>
                    <h2 className="card-title">Email : {user.email}</h2>
                    <h2 className="card-title">Date of Birth : {userInfo.birthDate}</h2>
                    <h2 className="card-title">Address : {userInfo.address}</h2>
                    <h2 className="card-title">Phone Number : {userInfo.phone}</h2>
                    <h2 className="card-title">LinkedIn : <a href="https://www.linkedin.com/in/md-zillur-rahman-2042291ab">{userInfo.profileLink}</a></h2>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;