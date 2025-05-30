import React from 'react';
import Swal from 'sweetalert2';

const SubscriptionDashboard = () => {
  const subscriptions = [
    {
      id: 1,
      type: 'Free Plan',
      price: '$0 USD/month',
      description: 'Access to limited news articles and basic features.',
      features: [
        'Access to News mini and reasoning',
        'Standard voice mode',
        'Real-time data from the web with search',
        'Limited access to News',
        'Limited access to file uploads, advanced data analysis, and image generation',
        'Use custom News',
      ],
    },
    {
      id: 2,
      type: 'Premium Duo',
      price: '$20 USD/month',
      description: 'Enhanced features for regular readers.',
      features: [
        'Everything in Free',
        'Extended limits on messaging, file uploads, advanced data analysis, and image generation',
        'Standard and advanced voice mode',
        'Access to deep research, multiple reasoning models , and a research preview of News',
        'More space for memories',
        'Create and use tasks, projects, and custom News',
        'Limited access to Sora video generation',
        'Opportunities to test new features',
      ],
    },
    {
      id: 3,
      type: 'Premium Family',
      price: '$200 USD/month',
      description: 'Best for families with unlimited access to everything.',
      features: [
        'Everything in Premium Duo',
        'Unlimited access to all reasoning models and News',
        'Unlimited access to advanced voice',
        'Extended access to deep research, which conducts multi-step online research for complex tasks',
        'Access to research previews of News and Operator',
        'Access to o1 pro mode, which uses more compute for the best answers to the hardest questions',
        'Extended access to Sora video generation',
        'Unlimited subject to abuse guardrails',
      ],
    },
  ];

  const handleSubscribe = (type) => {
    Swal.fire({
      title: 'Thank You!',
      text: `You have successfully subscribed to the ${type} plan.`,
      icon: 'success',
      confirmButtonText: 'Close',
    });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-extrabold text-center mb-10">Choose Your Subscription</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-stretch">
        {subscriptions.map((subscription) => (
          <div
            key={subscription.id}
            className="card h-full bg-base-100 shadow-xl hover:shadow-2xl transition-all rounded-lg border border-red-500 flex flex-col justify-between"
          >
            <div className="card-body text-center flex flex-col justify-between">
              <div>
                <h3 className="card-title text-xl font-bold">{subscription.type}</h3>
                <p className="text-md text-gray-600 text-2xl font-extrabold">{subscription.price}</p>
                <p className="text-sm text-gray-500 mb-4">{subscription.description}</p>
                <ul className="text-sm text-gray-500 list-inside list-disc space-y-2 text-left p-4 border border-gray-300 rounded-lg">
                  {subscription.features.map((feature, index) => (
                    <li key={index} className="ml-2">{feature}</li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
                onClick={() => handleSubscribe(subscription.type)}
              >
                Subscribe Now!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionDashboard;
