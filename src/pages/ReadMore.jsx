import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ReadMore = () => {
    const newsItem = useLoaderData(); 
    const navitage = useNavigate()

    const handleDelete = _id => {
        console.log(_id)

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
            

            fetch(`https://newspaper-server-delta.vercel.app/news/${_id}` ,{
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

              navitage('/')
                }
            })
            }
          });
    }



    return (
        <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-lg mt-10 bg-white">
            <img src={newsItem.image} alt={newsItem.title} className="w-full h-64 object-cover rounded-md" />
            <h2 className="text-3xl font-bold mt-4">{newsItem.title}</h2>
            <p className="text-gray-600 mt-2">{newsItem.content}</p>
            <p className="text-sm text-gray-400 mt-4">Published on: {newsItem.published_at}</p>

            <div className="mt-6 flex justify-between">
                <Link to={`/edit/${newsItem._id}`} className="btn btn-primary text-white">Edit</Link>
                <button 
                    onClick={() =>handleDelete(newsItem._id)} 
                    className="btn btn-warning text-white"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ReadMore;