import React from 'react';

const Summary = ({ summary }) => {
    const { img, description, number } = summary;

    return (
        <div className="card w-lg bg-base-100 shadow-2xl">
            <figure><img className='bg-white w-40' src={img} alt="Shoes" /></figure>
            <div className="card-body text-center font-bold text-blue-800 ">
                <h2 className="text-center text-4xl font-bold text-blue-800 ">{number}</h2>
                <p className='text-xl'>{description}</p>
            </div>
        </div>
    );
};

export default Summary;