import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
            fetch(`https://stark-cove-59535.herokuapp.com/purchase`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res);
                    return res.json()})
                .then(data => {
                    setOrders(data);
                });
    }, [])

    return (
        <div>
            <h2 className='text-xl text-primary text-center my-4'>Manage All Orders</h2>
            <div className="overflow-x-auto my-4">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Tool</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length && orders?.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.userName}</td>
                                    <td>{order.tool}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td>
                                        { !order.paid && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pending</button></Link>}
                                        { order.paid && <span className='btn btn-xs btn-gray'>paid</span>}
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );


};

export default ManageAllOrders;