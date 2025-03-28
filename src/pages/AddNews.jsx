import React from 'react';
import Swal from 'sweetalert2';

const AddNews = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const newsData = Object.fromEntries(formData);
        
        console.log("Submitted News:", newsData);
        
        //sent to data at mongodb

        fetch('http://localhost:5000/news', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newsData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successful!',
                        text: 'Add your news Successful',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-3xl font-semibold mb-4 text-center">Add News</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    className="input input-bordered w-full bg-white text-black" 
                    required 
                />
                <input 
                    type="text" 
                    name="category" 
                    placeholder="Category" 
                    className="input input-bordered w-full bg-white text-black" 
                    required 
                />
                <input 
                    type="text" 
                    name="author" 
                    placeholder="Author" 
                    className="input input-bordered w-full bg-white text-black" 
                    required 
                />
                <input 
                    type="date" 
                    name="published_at" 
                    className="input input-bordered w-full bg-white text-black" 
                    required 
                />
                <input 
                    type="text" 
                    name="image" 
                    placeholder="Image URL" 
                    className="input input-bordered w-full bg-white text-black" 
                    required 
                />
                <textarea 
                    name="content" 
                    placeholder="Content" 
                    className="textarea textarea-bordered w-full bg-white text-black" 
                    required
                ></textarea>
                <button 
                    type="submit" 
                    className="btn bg-blue-500 hover:bg-blue-600 text-white w-full"
                >
                    Submit News
                </button>
            </form>
        </div>
    );
};

export default AddNews;
