import { Link, } from "react-router-dom";
import logo from "./../../../../src/assets/assets/logo.svg"
// import { useContext } from "react";
// import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
// const{user,logOut} =useContext(AuthContext)
const{user,logOut} =useAuth()
const handleLogout =()=>{
  logOut()
  .then(()=>{})
  .catch((error)=>console.log(error))
}


    const navLinks = <>
     <li><Link to="/">Home</Link></li> 
     <li> <Link to="/about">About</Link></li>
     <li><Link to="/services">Services</Link></li> 
      <li><Link to="/contact">Contact</Link></li>
     { user?.email? <>
      <li><Link to="/booking">My Booking</Link></li>
     <li><Link  onClick={handleLogout}>Logout</Link></li></>

     : <li><Link to="/login">Login</Link></li>}
     
    </>
    return (
        <div>
           
    <div className="navbar bg-white">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case hidden  md:block lg:block text-xl">
           <img src={logo} alt="" className="w-14" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
    
      <div className="navbar-end">
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
          </div>
          </div>
          <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <a className="btn btn-outline text-[#FF3811] ">Appoinment</a>
      </div>
    </div>
    
    
        </div>
    );
};

export default Navbar;