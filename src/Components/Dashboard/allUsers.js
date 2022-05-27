import React from 'react';
import { useQuery } from 'react-query';

import Loading from '../Shared/Loading';
import User from './User';

const AllUsers = () => {


    const { data: users, isLoading, refetch } = useQuery('users', ()=>
        fetch('http://localhost:5000/user',{
            method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
        })
        .then(res => res.json())
    );

    if(isLoading){
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2 className="text-2xl text-center">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
            <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                            <User
                            key={user._id}
                            user={user}
                            index={index}
                            refetch={refetch}
                            ></User>
                                
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;