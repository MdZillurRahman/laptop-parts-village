import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Review = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const url = 'http://localhost:5000/reviews';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Review Added');
            })
    };

    return (
        <div>
            <h2 className='text-2xl text-center'>Add A Review</h2>
            <form className='flex flex-col justify-center' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" {...register("name", { required: true, maxLength: 20 })} />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tool Name</span>
                    </label>
                    <input type="" placeholder='Tool Name' className="input input-bordered w-full max-w-xs" {...register("review",
                        {
                            required: {
                                value: true
                            }
                        }
                    )} />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" placeholder="Location" className="input input-bordered w-full max-w-xs" {...register("location", {
                        required: {
                            value: true
                        }
                    })} />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" placeholder="Tool Description" className="input input-bordered w-full max-w-xs" {...register("description", {
                        required: {
                            value: true
                        }   
                    })} />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="url" placeholder="url" className="input input-bordered w-full max-w-xs" {...register("img", { required: true })} />
                </div>
                
                <button type='submit' className="btn btn-sm w-24 mt-8">Add Review</button>

            </form>
        </div>
    );
};

export default Review;