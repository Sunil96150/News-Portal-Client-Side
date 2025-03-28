import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {

    const newsData = useLoaderData();
    
    console.log("All News Data:", newsData);


    return (
        <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">All News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {newsData.map((newsItem) => (
                <div key={newsItem._id} className="card bg-white shadow-lg rounded-lg p-4">
                    <img src={newsItem.image} alt={newsItem.title} className="w-full h-40 object-cover rounded-md mb-3" />
                    <h3 className="text-xl font-semibold">{newsItem.title}</h3>
                    <p className="mt-2 text-gray-600">{newsItem.content.substring(0, 150)}...</p>
                    <Link to={`/readmore/${newsItem._id}`} className="text-blue-500 mt-4 inline-block">Read More</Link>
                </div>
            ))}
        </div>
    </div>
    );
};

export default News;