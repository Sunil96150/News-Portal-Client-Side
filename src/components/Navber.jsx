import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../pages/Provider/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {

    const {user , logOutUser} = useContext(AuthContext)

  const handelLogOut = () =>{
    logOutUser()
    .then( ()=>{
      console.log('Successfull Log Out')

      Swal.fire({
                 title: "Log out Successful!",
                 text: "Log Out this website.",
                 icon: "success",
                 confirmButtonText: "OK",
                      })
    })
    .then(error =>{
      console.log('here your error' , error)
    })
  }



    return (
        <div className="navbar bg-gray-800 text-white shadow-md px-4 md:px-8">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/addnews">Add News</Link></li>
                        <li><Link to="/seeusers">See Users</Link></li>
                    </ul>
                </div>
                <Link to="/" className="text-xl font-bold">NewsPortal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/addnews">Add News</Link></li>
                    <li><Link to="/seeusers">See Users</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
            <div>
        {
          user ? <>
                   <button onClick={handelLogOut} className='btn btn-primary'>Log out</button>
          </> :
          <>
           <Link to='/login'>
                <button className='btn btn-primary'>Log in</button>
         </Link>
          </>        }
      </div>
            </div>
        </div>
    );
};

export default Navbar;
