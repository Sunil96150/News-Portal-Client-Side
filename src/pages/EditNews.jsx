import React, { useState, useEffect } from 'react';
import { useLoaderData  } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditNews = () => {
    const newsItem = useLoaderData(); 
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        author: '',
        published_at: '',
        image: '',
        content: '',
    });

    useEffect(() => {
        if (newsItem) {
            setFormData({
                title: newsItem.title,
                category: newsItem.category,
                author: newsItem.author,
                published_at: newsItem.published_at,
                image: newsItem.image,
                content: newsItem.content,
            });
        }
    }, [newsItem]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form Data:', formData);

         fetch(`http://localhost:5000/news/${newsItem._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: 'Successful!',
                                text: 'Edit your news Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })
    };

    return (
        <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-lg mt-10 bg-white">
            <h2 className="text-3xl font-bold mt-4 text-center">Edit News</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="input input-bordered w-full bg-white text-black"
                    required
                />
                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Category"
                    className="input input-bordered w-full bg-white text-black"
                    required
                />
                <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Author"
                    className="input input-bordered w-full bg-white text-black"
                    required
                />
                <input
                    type="date"
                    name="published_at"
                    value={formData.published_at}
                    onChange={handleChange}
                    className="input input-bordered w-full bg-white text-black"
                    required
                />
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="input input-bordered w-full bg-white text-black"
                    required
                />
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Content"
                    className="textarea textarea-bordered w-full bg-white text-black"
                    required
                />
                <button type="submit" className="btn bg-blue-500 hover:bg-blue-600 text-white w-full">
                    Edit News
                </button>
            </form>
        </div>
    );
};

export default EditNews;
