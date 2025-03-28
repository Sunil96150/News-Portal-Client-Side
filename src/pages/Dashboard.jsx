import React from 'react';
import SubscriptionDashboard from './SubscriptionOverview';
import NewsStatistics from './NewsStatistics';
import FAQ from './Provider/FAQ';

const Dashboard = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <SubscriptionDashboard></SubscriptionDashboard>
            <NewsStatistics></NewsStatistics>
            <FAQ></FAQ>
        </div>
    );
};

export default Dashboard;