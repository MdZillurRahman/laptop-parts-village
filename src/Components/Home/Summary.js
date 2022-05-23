import React from 'react';

const Summary = ({ summary }) => {
    const { img, description, number } = summary;

    return (
        <div class="card w-lg bg-base-100 shadow-2xl">
            <figure><img className='bg-white w-52' src={img} alt="Shoes" /></figure>
            <div class="card-body text-center font-bold text-blue-800 ">
                <h2 class="text-center text-4xl font-bold text-blue-800 ">{number}</h2>
                <p className='text-xl'>{description}</p>
            </div>
        </div>
    );
};

export default Summary;