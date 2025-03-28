import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';
import TrendingNews from './TrendingNews';
import FAQ from './Provider/FAQ';

const Home = () => {
    const news = useLoaderData();
    
    // Trending and Featured News can be extracted similarly if data is available
    const trendingNews = news.filter(item => item.isTrending); // Example of filtering trending news
    const featuredArticles = news.filter(item => item.isFeatured); // Example for featured articles

    return (
        <div>
            <Banner></Banner>

            {/* Latest News */}
            <div className="container mx-auto p-6">
                <h2 className="text-3xl font-bold text-center mb-6">Latest News</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {news.slice(0, 6).map((newsItem) => (
                        <div key={newsItem._id} className="card bg-white shadow-lg rounded-lg p-4">
                            <img src={newsItem.image} alt={newsItem.title} className="w-full h-48 object-cover rounded-md" />
                            <h3 className="text-xl font-semibold mt-2">{newsItem.title}</h3>
                            <p className="mt-2 text-gray-600">{newsItem.content.substring(0, 100)}...</p>
                            <Link to={`/readmore/${newsItem._id}`} className="text-blue-500 mt-4 inline-block">Read More</Link>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <Link to="/news" className="btn bg-blue-500 text-white hover:bg-blue-600 py-2 px-6 rounded-full">
                        See More
                    </Link>
                </div>
            </div>

            {/* Trending News Section */}
           <TrendingNews></TrendingNews>

            {/* Featured Articles Section */}
           <FAQ></FAQ>

        </div>
    );
};

export default Home;
