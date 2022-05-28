import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTool = () => {
    const { register, handleSubmit } = useForm();

    // const imageStorageKey = '4ad074943bdc242e32abc5563d5bf26d';

    const onSubmit = data => {
       
        // const image = data.image;
        // const formData = new FormData();
        // formData.append('img', image);
        // const imgUrl = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        // fetch(imgUrl,{
        //     method:'POST',
        //     body: formData
        // })
        // .then(res => res.json())
        // .then(result => {
        //     console.log('imgbb', result)
        // })

        // console.log(data);

        const url = 'http://localhost:5000/tools';
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
                toast('Review Added')
            })
    };

    return (
        <div>
            <h2 className='text-2xl text-center'>Add A Tool</h2>
            <form className='flex flex-col justify-center' onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Tool Name</span>
                    </label>
                    <input type="text" placeholder="Tool Name" class="input input-bordered w-full max-w-xs" {...register("name", { required: true, maxLength: 20 })} />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <input type="" placeholder='Description' class="input input-bordered w-full max-w-xs" {...register("description",
                        {
                            required: {
                                value: true
                            }
                        }
                    )} />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Minimum Order Quantity</span>
                    </label>
                    <input type="number" placeholder="Minimum Order Quantity" class="input input-bordered w-full max-w-xs" {...register("minOrderQuantity", {
                        required: {
                            value: true
                        },
                        pattern: {
                            value: /[0-9]/
                        }
                    })} />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Available Quantity</span>
                    </label>
                    <input type="text" placeholder="Available Quantity" class="input input-bordered w-full max-w-xs" {...register("availableQuantity", {
                        required: {
                            value: true
                        },
                        pattern: {
                            value: /[0-9]/
                        }
                    })} />
                </div>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Price</span>
                    </label>
                    <input type="text" placeholder="Price" class="input input-bordered w-full max-w-xs" {...register("price",
                        {
                            required: {
                                value: true
                            },
                            pattern: {
                                value: /[0-9]/
                            }
                        })} />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Image URL</span>
                    </label>
                    <input type="url" placeholder="url" class="input input-bordered w-full max-w-xs" {...register("img", { required: true })} />
                </div>
                <button type='submit' class="btn btn-sm w-24 mt-8">Add Tool</button>

            </form>
        </div>
    );
};

export default AddTool;