import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        await sendEmailVerification(data.email);
        toast('Check Your Mail To Verify!')
    };

    if (user) {
        navigate('/appointment');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    let errorMessage;
    if (error || updateError) {
        errorMessage = <p className='text-red-500 my-2'>{error?.message}</p>
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96  shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Register</h2>
                    {errorMessage}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <p className='text-red-500'>{errors.name.message}</p>}
                            </label>
                        </div>
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
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
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

                        <input className='btn btn-outline btn-primary w-full max-w-xs' type="submit" value="Sign Up" />
                    </form>
                    <p className='text-center'>Already Have An Account? <Link to='/login' className='text-primary'>Please Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;