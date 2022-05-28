import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { _id, price, userEmail, userName } = order;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setError(error?.message || '');
        setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: userEmail
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError?.message);
            setProcessing(false);
        }
        else {
            setError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congratulation!!');


            const payment = {
                orderID: _id,
                transactionId: paymentIntent.id,

            }

            fetch(`http://localhost:5000/purchase/${_id}`, {
                method: 'PATCH',
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })

        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm my-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                error && <p className='text-red-500'>{error}</p>
            }
            {
                success && <div className='text-green-500 text-xl'>
                    <p>{success}</p>
                    <p>Your Transaction Id: <span className='text-orange-600'>{transactionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;