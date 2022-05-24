import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../Images/icon.png';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const navbar = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/tools/:id'>Purchase</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/contactUs'>Contact Us</Link></li>
        {/* {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        } */}
        <li>{user ? <button onClick={logout}>Sign Out</button> : <Link to='/login'>Login</Link>}</li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32">
                            {navbar}
                        </ul>
                    </div>
                    <Link to='/home'><img className='w-12 ml-16 hidden lg:block' src={logo} alt="" /></Link>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">Laptop Parts Village</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>    
                </div>
            </div>
        </div>
    );
};

export default Navbar;