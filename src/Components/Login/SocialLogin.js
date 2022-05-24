import React from 'react';
import google from '../../Images/social/google.png';
import facebook from '../../Images/social/facebook.png';
import github from '../../Images/social/github.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || '/';

    if(user){
        navigate(from, {replace: true});
    }

    if(user){
        navigate('/home');
    }

    return (
        <div>
            <div className='flex justify-around my-3'>
            <button onClick={() => signInWithGoogle()}
                    className='btn btn-outline btn-primary'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                </button>
            <button
                    className='btn btn-outline btn-primary'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                </button>
            <button
                    className='btn btn-outline btn-primary'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;