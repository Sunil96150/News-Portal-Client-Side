
import { useState } from 'react';
import { FaAddressCard, FaCashRegister, FaDashcube, FaHome, FaSignInAlt, FaUser } from 'react-icons/fa';
import { FaDeleteLeft, FaRegNewspaper, FaUsersGear } from "react-icons/fa6";
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Admins = () => {

     const loadedUsers = useLoaderData();
    const [users , setUsers] = useState(loadedUsers);
    const navigate = useNavigate()

 const handleMakeAdmin = (id, currentRole) => {
  const newRole = currentRole === "admin" ? "user" : "admin";

  Swal.fire({
    title: `Do you want to make this user a ${newRole}?`,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: `Yes, make ${newRole}`,

  }).then(result => {
    if (result.isConfirmed) {
      fetch(`https://news-server-protal.vercel.app/newsUser/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ role: newRole })
      })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount > 0) {
            const newUsers = users.map(user =>
              user._id === id ? { ...user, role: newRole } : user
            );
            setUsers(newUsers);

            Swal.fire({
              title: "Success!",
              text: `User is now a ${newRole}.`,
              icon: "success",
              confirmButtonText: "OK"
            });
          }
        });
    } else if (result.isDenied) {
      Swal.fire("Changes canceled", "", "info");
    }
  });
};


    const hendelUserDelete = id =>{

         console.log(id)
        
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                    
        
                    fetch(`https://news-server-protal.vercel.app/newsUser/${id}` ,{
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount > 0){
                              Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
        
                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers);
                            navigate('/Admins')
                        }
                    })
                    }
                  });
                }
              
    
    return (
       
        <div className='flex max-w-7xl mx-auto'>
           <div className='w-64  min-h-screen bg-orange-400 lg:pt-20'> 
            <ul className='manu p-4'>
                <li >
                    <NavLink to ='/' className='flex items-center gap-2 mb-4 text-2xl hover:bg-black hover:text-white p-2 rounded-lg'>
                    <FaHome className='' />
                    HOME
                    </NavLink></li>
                <li >
                    <NavLink to ='/news' className='flex items-center gap-2 mb-4 text-2xl  hover:bg-black hover:text-white p-2 rounded-lg'>
                    <FaRegNewspaper />
                  NEWS
                    </NavLink></li>
                <li >
                    <NavLink to ='/dashboard' className='flex items-center gap-2 mb-4 text-2xl  hover:bg-black hover:text-white p-2 rounded-lg'>
                   <FaDashcube />
                    DASHBOARD
                    </NavLink></li>
                <li >
                    <NavLink to ='/addnews' className='flex items-center gap-2 mb-4 text-2xl  hover:bg-black hover:text-white p-2 rounded-lg'>
                    <FaAddressCard />
                    ADD NEWS
                    </NavLink></li>
                <li >
                    <NavLink to ='/login' className='flex items-center gap-2 mb-4 text-2xl  hover:bg-black hover:text-white p-2 rounded-lg'>
                    <FaSignInAlt />
                    Log In
                    </NavLink></li>
                <li >
                    <NavLink to ='/register' className='flex items-center gap-2 mb-4 text-2xl  hover:bg-black hover:text-white p-2 rounded-lg'>
                    <FaCashRegister />
                    Register
                    </NavLink></li>
               
                

            </ul>

           </div>
           <div className="flex-1 overflow-x-auto">

        <h2 className="text-5xl text-center my-5 text-gray-500 font-bold">See All Users: {users.length}</h2>

  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>CreateAt</th>
        <th>Role</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
        {
            users.map((user , index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createAt}</td>
                          <td>
            <button
              onClick={() => handleMakeAdmin(user._id, user.role)}
              className={`btn mt-2 sm:mt-0 ml-2 ${user.role === "admin" ? "bg-red-400" : "bg-orange-400"}`}
            >
              {user.role === "admin" ? "Admin" : <FaUsersGear className="text-2xl text-white" />}
            </button>
          </td>
              
                <td>
                <button
                     onClick={() =>  hendelUserDelete(user._id)}
                className="btn mt-2 sm:mt-0 ml-2">
                  <FaDeleteLeft className='text-red-600'></FaDeleteLeft>
                  </button></td>
                
              </tr>)
        }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Admins