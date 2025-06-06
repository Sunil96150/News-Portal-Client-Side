import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../pages/Provider/AuthContext';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const handelLogOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: "Log out Successful!",
          text: "Log Out this website.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.log('Log out error:', error);
      });
  };

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`http://localhost:5000/newsUser/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.role === 'admin');
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsAdmin(false);
          setLoading(false);
        });
    } else {
      setIsAdmin(false);
      setLoading(false);
    }
  }, [user]);

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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/addnews">Add News</Link></li>
            {loading ? (
              <li>Loading...</li>
            ) : (
              isAdmin && <li><Link to="/admins">Admins</Link></li>
            )}
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
          {loading ? (
            <li className="animate-pulse text-gray-300">Loading...</li>
          ) : (
            isAdmin && <li><Link to="/admins">Admins</Link></li>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <button onClick={handelLogOut} className="btn btn-primary">Log out</button>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary">Log in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
