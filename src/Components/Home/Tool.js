import React from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

const Tool = ({ tool, date, admin }) => {
    const { _id, name, img, description, minOrderQuantity, availableQuantity, price } = tool;
    
    const formattedDate = format(date, 'PP');
    const navigate = useNavigate();

    const handleOrder = (id) =>{
        navigate(`/tools/${id}`);
    }


    return (
        <div className="hero bg-gray-300 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className='text-black'>
                <img src={img} className="max-w-xs mt-[-50px] rounded-lg shadow-2xl border-2" alt=''/>
                <h1 className="text-3xl font-bold">{name}</h1>
                <p><b>Price per unit:</b> {price}</p>
                </div>
                <div className='text-black'>
                    <h3 className='text-md'><b>Description:</b> {description} </h3>
                    <p><b>Minimum Order Quantity:</b> {minOrderQuantity}</p>
                    <p><b>Available Quantity:</b> {availableQuantity}</p>
                    <p><b>Order Date:</b> {formattedDate}</p>
                    
                    {!admin && <button onClick={() => handleOrder(_id)} className="btn btn-primary mt-3 text-white orderNowButton" >Order Now</button>}
                </div>
            </div>  
        </div>
    );
};

export default Tool;