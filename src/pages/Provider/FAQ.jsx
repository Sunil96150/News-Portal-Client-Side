import React from 'react';

const FAQ = () => {
    const faqs = [
        {
          question: "How can I read the latest news?",
          answer: "You can browse the latest headlines on our homepage or explore different categories for specific topics."
        },
        {
          question: "Do I need to create an account to read news?",
          answer: "No, you can access most of the news articles for free. However, premium content requires a subscription."
        },
        {
          question: "How do I subscribe for premium news?",
          answer: "Click on the 'Subscribe' button, choose a plan, and complete the payment to access exclusive news."
        },
        {
          question: "Can I submit news articles?",
          answer: "Yes! If you are a registered journalist or a contributor, you can submit articles for review."
        }
      ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        tabIndex={0} 
                        className="collapse collapse-plus bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg border border-base-300 p-4"
                    >
                        <div className="collapse-title font-semibold text-lg text-gray-900 dark:text-gray-200">
                            {faq.question}
                        </div>
                        <div className="collapse-content text-sm text-gray-600 dark:text-gray-300">
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
