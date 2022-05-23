import React from 'react';

const Summary = ({ summary }) => {
    const { img, description, number } = summary;

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{number}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Summary;