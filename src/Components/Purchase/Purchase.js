import React from 'react';

const Purchase = ({tool}) => {
    const { name, img, description, minOrderQuantity, availableQuantity, price } = tool;
    return (
        <div>
            <h3>Purchase : {name}</h3>
        </div>
    );
};

export default Purchase;