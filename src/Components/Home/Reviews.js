import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <section className='my-20 mx-16'>
            <div className='text-center mb-12'>
                <div>
                    <h4 className='font-bold text-2xl text-primary'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Clients Says</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Review
                    key = {review._id}
                    review = {review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;