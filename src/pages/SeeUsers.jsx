import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SeeUsers = () => {
    const loadedUsers = useLoaderData();
    const [users , setUsers] = useState(loadedUsers);
    const navigate = useNavigate()
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
                    
        
                    fetch(`http://localhost:5000/newsUser/${id}` ,{
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
        
                      navigate('/')
                        }
                    })
                    }
                  });

    }
    return (
        
           
        <div className="overflow-x-auto">

        <h2 className="text-5xl text-center my-5 text-gray-500 font-bold">See All Users: {users.length}</h2>

  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>CreateAt</th>
        <th>last Log in</th>
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
                <td>{user.lastLogInTime}</td>
                <td><button className="btn btn-neutral">Update</button>
                <button
                     onClick={() => hendelUserDelete(user._id)}
                className="btn btn-warning mt-2 sm:mt-0 ml-2">X</button></td>
                
              </tr>)
        }
    
    </tbody>
  </table>
</div>


    );
};

export default SeeUsers;