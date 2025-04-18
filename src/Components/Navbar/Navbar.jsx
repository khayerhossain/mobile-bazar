import React from 'react';
import { NavLink } from 'react-router';
import { IoCart} from "react-icons/io5";
import { MdBookmarkAdd } from "react-icons/md";


const Navbar = () => {
    return (
        <div className="navbar p-0 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <NavLink className={({isActive})=>(isActive ? 'text-indigo-600':'')} to="/">Home</NavLink>
         <NavLink className={({isActive})=>(isActive ? 'text-indigo-600':'')} to="/about">About</NavLink>
         <NavLink className={({isActive})=>(isActive ? 'text-indigo-600':'')} to="/cart"><IoCart />
         </NavLink>
            <NavLink className={({isActive})=>(isActive ? 'text-indigo-600':'')} to="/favorites"><MdBookmarkAdd />
            </NavLink>
           
            </ul>
          </div>
          <a className="btn p-0 btn-ghost text-xl">Mobile Bazar</a>
        </div>
        <div className="navbar-center hidden lg:flex">
         
        </div>
        <div className="navbar-end hidden lg:flex">
        <ul className="menu gap-3 menu-horizontal px-1">
        <NavLink className={({isActive})=>(isActive ? 'text-indigo-600':'')} to="/">Home</NavLink>
         <NavLink className={({isActive})=>(isActive ? 'text-indigo-600':'')} to="/about">About</NavLink>
         <NavLink className={({isActive})=>(isActive ? 'text-indigo-600':'')} to="/cart"><IoCart size={20} />
         </NavLink>
            <NavLink className={({isActive})=>(isActive ? 'text-indigo-600':'')} to="/favorites"><MdBookmarkAdd size={20} />
            </NavLink>
          
          </ul>
        </div>
      </div>
    );
};

export default Navbar;