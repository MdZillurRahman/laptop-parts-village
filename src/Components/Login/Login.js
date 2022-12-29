import React, { useEffect } from 'react';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';


const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [token] = useToken(user);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from || '/';

    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password);
    };

    useEffect(()=>{
        if(token){
        navigate(from, {replace: true});
    }
    },[token, from, navigate])
 
    if (loading) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-red-500 my-2'>{error?.message}</p>
    }

    return (
        <div className=' min-h-screen justify-center items-center'>
            <div className="card w-96 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    {errorMessage}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <p className='text-red-500'>{errors.email.message}</p>}
                                {errors.email?.type === 'pattern' && <p className='text-red-500'>{errors.email.message}</p>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must have 6 characters'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <p className='text-red-500'>{errors.password.message}</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>{errors.password.message}</p>}
                            </label>
                        </div>
                        <p className='text-right text-red-500 mb-4'>Forget Password?</p>

                        <input className='btn btn-outline btn-primary w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    <p className='text-center'>New Here? <Link to='/register' className='text-primary'>Create New Account</Link> </p>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;