import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToolDetail from '../../Hooks/useToolDetail';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [tool] = useToolDetail(id);
    const { name, _id, img, price, minOrderQuantity, availableQuantity } = tool;
    const { register, setValue } = useForm();

    const quantity = useRef('');

    const handleQuantity = () => {
        const newQuantity = quantity.current.value;
        const final = newQuantity * price;
        
        setValue("total", final);
        if (newQuantity < minOrderQuantity || newQuantity > availableQuantity) {
            toast(`Minimum Order quantity is ${minOrderQuantity}. Please select a value between ${minOrderQuantity} and ${availableQuantity}`);
        }
    }

    const handlePurchase = (event) => {
        event.preventDefault();
        const newQuantity = quantity.current.value;
        const final = newQuantity * price;

        const purchase = {
            toolId: _id,
            tool: name,
            price: final,
            availableQuantity: availableQuantity,
            quantity: newQuantity,
            userName: user.displayName,
            userEmail: user.email,
            phone: event.target.phoneNumber.value
        }


        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Succesfully Purchased");
            })
 
        fetch(`http://localhost:5000/tools/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ availableQuantity, newQuantity })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        
    }

    return (
        <div className='flex justify-center items-center my-12'>
            <div className="card card-compact w-lg bg-base-100 shadow-xl">
                <div>
                    <h2 className="text-center text-3xl font-bold text-primary mb-6">{name}</h2>
                    <figure><img className='rounded-lg' src={img} alt="Shoes" /></figure>
                </div>
                <form onSubmit={handlePurchase}>
                    <div className="card-body">
                        <div className="form-control w-full max-w-full">
                            <p className='font-bold text-lg mr-2'>Name: </p>
                            <input type="text" disabled value={user.displayName} className="input input-bordered w-full max-w-full" />
                        </div>
                        <div className="form-control w-full max-w-full">
                            <p className='font-bold text-lg mr-2'>Email </p>
                            <input type="text" disabled value={user.email} className="input input-bordered w-full max-w-full" />
                        </div>
                        <div className="form-control w-full max-w-full">
                            <p className='font-bold text-lg mr-2'>Address: </p>
                            <textarea required className="textarea textarea-bordered w-full"></textarea>
                        </div>
                        <div className="form-control w-full max-w-full">
                            <p className='font-bold text-lg mr-2'>Phone Number: </p>
                            <input required type="phoneNumber" className="input input-bordered w-full max-w-full"
                                {...register("phoneNumber", {
                                    pattern: {
                                        value: /[0-9]/
                                    }
                                })} />
                        </div>
                        <div className="form-control w-full max-w-full">
                            <p className='font-bold text-lg mr-2'>Price per unit: </p>
                            <input type="text" disabled value={price} className="input input-bordered w-full max-w-full" />
                        </div>
                        <div className="form-control w-full max-w-full">
                            <p className='font-bold text-lg mr-2'>Available Quantity: </p>
                            <input disabled type='number' value={availableQuantity}
                                className="input input-bordered w-full max-w-full" />
                        </div>
                        <div onChange={handleQuantity}>
                            <div className="form-control w-full max-w-full">
                                <p className='font-bold text-lg mr-2'>Quantity: </p>
                                <input ref={quantity} type="quantity" defaultValue={minOrderQuantity} className="input input-bordered w-full max-w-full" />
                            </div>
                            <div className="form-control w-full max-w-full">
                                <p className='font-bold text-lg mr-2'>Total Price: </p>
                                <input name="total" type="total" placeholder={minOrderQuantity * price} className="input input-bordered w-full max-w-full" />
                            </div>
                        </div>
                        <div className="card-actions justify-center mt-12">
                            {
                                quantity.current.value < minOrderQuantity || quantity.current.value > availableQuantity ?
                                <button disabled type='submit' className="btn btn-primary">Purchase</button>
                                :
                                <button type='submit' className="btn btn-primary">Purchase</button>
                            }
                            
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default Purchase;