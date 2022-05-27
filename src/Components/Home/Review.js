import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-2xl">
            <div className="card-body">
                <h1 className='text-center font-bold text-xl'>{review.review}</h1>
                <p className='text-center'>"{review.description}"</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                        <div aria-disabled class="rating rating-sm">
                            <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400"/>
                            <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" class="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;