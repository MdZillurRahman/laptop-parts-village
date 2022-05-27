import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const Tool = ({ tool, date }) => {
    const { _id, name, img, description, minOrderQuantity, availableQuantity, price } = tool;
    
    const formattedDate = format(date, 'PP');
    const navigate = useNavigate();

    const handleOrder = (id) =>{
        navigate(`/tools/${id}`);
    }

    return (
        <div class="hero bg-gray-500 rounded-lg">
            <div class="hero-content flex-col lg:flex-row">
                <div className='text-white'>
                <img src={img} class="max-w-xs mt-[-50px] rounded-lg shadow-2xl" />
                <h1 class="text-3xl font-bold">{name}</h1>
                <p><b>Price per unit:</b> {price}</p>
                </div>
                <div className='text-white'>
                    <h3 className='text-md'><b>Description:</b> {description} </h3>
                    <p><b>Minimum Order Quantity:</b> {minOrderQuantity}</p>
                    <p><b>Available Quantity:</b> {availableQuantity}</p>
                    <p><b>Order Date:</b> {formattedDate}</p>
                    
                    <button onClick={() => handleOrder(_id)} class="btn btn-primary mt-3">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;