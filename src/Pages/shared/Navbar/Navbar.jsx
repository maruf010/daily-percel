import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import WebLogo from '../WebLogo/WebLogo';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/sendParcel">Send a Percel</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>
        {
            user && <>
                <li><NavLink to="/dashboard">dashboard</NavLink></li>
            </>
        }
        <li><NavLink to='/beARider'>Be a Rider</NavLink></li>
        <li><NavLink>About us</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
                navigate('/login')
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className="navbar py-5 rounded-xl bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <span className="btn btn-ghost text-xl">
                    <WebLogo></WebLogo>
                </span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogOut} className='btn '>Logout</button> :
                        <Link to='/login' className='btn text-black btn-primary'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;