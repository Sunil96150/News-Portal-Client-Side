import React from 'react';
import banner from '../assets/banner.jpg'
import { Link } from 'react-router-dom';

const TrendingNews = () => {
    return (
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${banner})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">News Protal</h1>
      <p className="mb-5">
      A news portal is an online platform that provides the latest news, articles, and updates on various topics such as politics, sports, entertainment, and technology. It allows users to stay informed with real-time news and in-depth analysis. Modern news portals often include multimedia content, user interaction, and personalized recommendations.
      </p>
    <Link to ='/dashboard'>  <button className="btn btn-primary">Go to Dashboard</button></Link>
    </div>
  </div>
</div>
    );
};

export default TrendingNews;
