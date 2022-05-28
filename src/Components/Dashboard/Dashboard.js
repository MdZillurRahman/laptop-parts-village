import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/UseAdmin';

const Dashboard = () => {
const [user] = useAuthState(auth);
const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard_Sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-4xl font-bold text-primary text-center'>Dashboard</h2>
                <Outlet></Outlet>
                
            </div>
            <div className="drawer-side">
                <label for="dashboard_Sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {
                        !admin &&
                        <>
                        <li><Link to="/dashboard/orders">My Orders</Link></li>
                    <li><Link to="/dashboard/review">Add a Review</Link></li>
                        </>
                    }
                    
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                    {
                       admin && 
                       <>
                       <li><Link to="/dashboard/users">All Users</Link></li>
                       <li><Link to="/dashboard/addTool">Add A tool</Link></li>
                       <li><Link to="/dashboard/manageAllOrders">Manage All Orders</Link></li>
                       <li><Link to="/dashboard/manageTools">Manage Tools</Link></li>
                       </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;