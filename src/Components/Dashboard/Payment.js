import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const { id } = useParams();

    const stripePromise = loadStripe('pk_test_51L4OkGGwYjminko06FwRKbCpX1ckvDiRNN5qBwBYFDBQrCMOcR3l09Up8iZBwlFvbCylfT6jgruZpVamyZXcyb3j00Bb7Dpddd');

    const url = `https://stark-cove-59535.herokuapp.com/purchase/${id}`;

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className="card-title">Pay For : {order.tool}</h2>
                    <p>Get Your Delivery Soon</p>
                    <p>Please pay: $ {order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;