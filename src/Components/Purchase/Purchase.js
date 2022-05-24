import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToolDetail from '../../Hooks/useToolDetail';

const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { id } = useParams();
    const [tool] = useToolDetail(id);
    const { name, img, description, price, minOrderQuantity, availableQuantity } = tool;
    const { register, setValue } = useForm();
    const state = {
        disabled: true
    }

    const handleQuantity = (event) => {
        const newQuantity = event.target.value;
        const final = newQuantity * price;
        setValue("total", final);
        if(newQuantity < minOrderQuantity){
            toast("Minimum Order quantity is 100. Please select a value over 100.");
            this.setState({
                disabled: true
            });
        }
    }

    return (
        <div className='flex justify-center items-center my-12'>
            <div class="card card-compact w-lg bg-base-100 shadow-xl">
                <div>
                    <h2 class="text-center text-3xl font-bold text-primary mb-6">{name}</h2>
                    <figure><img className='rounded-lg' src={img} alt="Shoes" /></figure>
                </div>

                <div class="card-body">
                    <div class="form-control w-full max-w-xs">
                        <p className='font-bold text-lg mr-2'>Name: </p>
                        <input type="text" disabled value={user.displayName} class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <p className='font-bold text-lg mr-2'>Email </p>
                        <input type="text" disabled value={user.email} class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <p className='font-bold text-lg mr-2'>Address: </p>
                        <textarea required class="textarea textarea-bordered w-full"></textarea>
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <p className='font-bold text-lg mr-2'>Phone Number: </p>
                        <input required type="phoneNumber" class="input input-bordered w-full max-w-xs"
                            {...register("phoneNumber", {
                                pattern: {
                                    value: /[0-9]/
                                }
                            })} />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <p className='font-bold text-lg mr-2'>Price per unit: </p>
                        <input type="text" disabled value={price} class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <p className='font-bold text-lg mr-2'>Available Quantity: </p>
                        <input disabled type='number' value={availableQuantity}
                            class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div >
                        <div onChange={handleQuantity} class="form-control w-full max-w-xs">
                            <p className='font-bold text-lg mr-2'>Quantity: </p>
                            <input type="number" defaultValue={minOrderQuantity} class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <p className='font-bold text-lg mr-2'>Total Price: </p>
                            <input type="number" {...register("total")} disabled value={minOrderQuantity * price} class="input input-bordered w-full max-w-xs" />
                        </div>

                        <div class="card-actions justify-center mt-12">
                            <button disabled={this.state.disabled} class="btn btn-primary">Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;