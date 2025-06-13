// src/pages/FAQ/FAQ.jsx
import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaCreditCard, FaTruck, FaExchangeAlt, FaQuestionCircle } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('ordering');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (itemId) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const faqCategories = {
    ordering: {
      title: "Ordering",
      icon: <FaShoppingCart className="mr-2" />,
      items: [
        {
          id: 'ord1',
          question: "How do I place an order?",
          answer: "To place an order: 1) Browse our products and select items, 2) Add them to your cart, 3) Proceed to checkout, 4) Enter your shipping and payment details, 5) Review and confirm your order. You'll receive an order confirmation email once completed."
        },
        {
          id: 'ord2',
          question: "Can I modify my order after placing it?",
          answer: "Order modifications are possible within 1 hour of placement. Contact our customer support immediately at support@example.com or call +1 (555) 123-4567. Include your order number in all communications."
        },
        {
          id: 'ord3',
          question: "How do I use a discount code?",
          answer: "Enter your valid discount code in the 'Promo Code' field during checkout before payment. The discount will be applied to your order total if all conditions are met. Only one code can be used per order."
        }
      ]
    },
    payment: {
      title: "Payment",
      icon: <FaCreditCard className="mr-2" />,
      items: [
        {
          id: 'pay1',
          question: "What payment methods do you accept?",
          answer: "We accept: Visa, Mastercard, American Express, Discover, PayPal, Apple Pay, Google Pay, and Amazon Pay. All transactions are securely processed with 256-bit SSL encryption."
        },
        {
          id: 'pay2',
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard PCI-compliant security measures. We never store full credit card numbers on our servers. All payments are processed through certified payment gateways."
        },
        {
          id: 'pay3',
          question: "Why was my payment declined?",
          answer: "Common reasons include: insufficient funds, incorrect card details, billing address mismatch, or bank security restrictions. Contact your bank for specifics or try an alternative payment method."
        }
      ]
    },
    shipping: {
      title: "Shipping",
      icon: <FaTruck className="mr-2" />,
      items: [
        {
          id: 'ship1',
          question: "How long does shipping take?",
          answer: "Standard shipping: 3-5 business days ($5.99). Express shipping: 2 business days ($12.99). Overnight shipping: 1 business day ($24.99). International shipping: 7-14 business days (varies by country)."
        },
        {
          id: 'ship2',
          question: "How can I track my order?",
          answer: "Tracking numbers are emailed once your order ships. Click the tracking link in your email or visit our Order Status page. For real-time updates, use the carrier's website with your tracking number."
        },
        {
          id: 'ship3',
          question: "Do you ship internationally?",
          answer: "Yes, we ship to over 50 countries. International orders may be subject to customs fees and import taxes, which are the customer's responsibility. Delivery times vary by destination."
        }
      ]
    },
    returns: {
      title: "Returns & Exchanges",
      icon: <FaExchangeAlt className="mr-2" />,
      items: [
        {
          id: 'ret1',
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items. Items must be unused, in original packaging with tags attached. Some exclusions apply (final sale items, perishables). Refunds are issued to the original payment method."
        },
        {
          id: 'ret2',
          question: "How do I initiate a return?",
          answer: "1) Log in to your account, 2) Go to Order History, 3) Select the item(s) to return, 4) Print the prepaid return label, 5) Package securely and ship within 7 days. Alternatively, contact our support team."
        },
        {
          id: 'ret3',
          question: "How long do refunds take?",
          answer: "Once we receive your return, processing takes 3-5 business days. Bank processing may take additional 5-10 business days. You'll receive email confirmation at each stage of the process."
        }
      ]
    },
    support: {
      title: "Customer Support",
      icon: <MdSupportAgent className="mr-2" />,
      items: [
        {
          id: 'sup1',
          question: "How do I contact customer support?",
          answer: "Available 24/7 via: Live Chat (click the chat icon), Email (support@example.com), Phone (+1 (555) 123-4567), or Twitter (@ExampleSupport). Average response time is under 30 minutes."
        },
        {
          id: 'sup2',
          question: "What are your support hours?",
          answer: "Our customer support team is available 24 hours a day, 7 days a week, including holidays. For fastest service, use our live chat feature during peak hours (9AM-9PM EST)."
        },
        {
          id: 'sup3',
          question: "Where can I find product care instructions?",
          answer: "Care instructions are included with each product and available on the product page under 'Details'. For specific questions, contact our support team with the product SKU number."
        }
      ]
    }
  };

  // Filter FAQs based on search query
  const filteredItems = Object.entries(faqCategories).reduce((acc, [key, category]) => {
    const filteredCategoryItems = category.items.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (filteredCategoryItems.length > 0) {
      acc[key] = {
        ...category,
        items: filteredCategoryItems
      };
    }
    
    return acc;
  }, {});

  const currentCategory = filteredItems[activeCategory] || faqCategories[activeCategory];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-20 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
              <FaQuestionCircle className="text-5xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How can we help?</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Find instant answers to your questions or connect with our support team
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400 text-lg" />
          </div>
          <input
            type="text"
            placeholder="Search help articles, FAQs, and more..."
            className="block w-full pl-12 pr-4 py-4 border-0 rounded-xl bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:shadow-lg transition-all duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-8">
              <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <h2 className="text-xl font-bold">FAQ Categories</h2>
              </div>
              <nav className="p-4 space-y-1">
                {Object.entries(faqCategories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                      activeCategory === key 
                        ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-sm' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className={`mr-3 ${activeCategory === key ? 'text-indigo-600' : 'text-gray-500'}`}>
                      {category.icon}
                    </span>
                    {category.title}
                  </button>
                ))}
              </nav>
              <div className="p-4 border-t">
                <button className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg transition-all duration-200 shadow hover:shadow-md">
                  <MdSupportAgent className="mr-2 text-lg" />
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Category Header */}
              <div className="px-8 py-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-200">
                <h2 className="text-2xl font-bold flex items-center text-gray-800">
                  <span className="mr-3 text-indigo-600">{currentCategory.icon}</span>
                  {currentCategory.title}
                </h2>
              </div>

              {/* FAQ Items */}
              <div className="divide-y divide-gray-100">
                {currentCategory.items.length > 0 ? (
                  currentCategory.items.map((item) => (
                    <div 
                      key={item.id} 
                      className={`p-6 transition-all duration-200 ${expandedItems.includes(item.id) ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                    >
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex justify-between items-center text-left group"
                      >
                        <h3 className="text-lg font-medium text-gray-800 group-hover:text-indigo-600">
                          {item.question}
                        </h3>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${expandedItems.includes(item.id) ? 'transform rotate-180 text-indigo-600' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedItems.includes(item.id) && (
                        <div className="mt-4 text-gray-600 pl-2 pr-6 animate-fadeIn">
                          <p className="leading-relaxed">{item.answer}</p>
                          <button className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center">
                            <MdSupportAgent className="mr-1" />
                            Still need help with this?
                          </button>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <div className="mx-auto mb-4 w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                      <FaSearch className="text-indigo-600 text-2xl" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">No results found</h3>
                    <p className="text-gray-600 mb-4">We couldn't find any matches for "{searchQuery}"</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200"
                    >
                      Clear search
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Popular Questions */}
            {!searchQuery && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Questions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "How do I track my order?",
                    "What is your return policy?",
                    "Do you offer international shipping?",
                    "How can I change my account information?",
                    "What payment methods do you accept?",
                    "How do I contact customer support?"
                  ].map((question, index) => (
                    <div 
                      key={index} 
                      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:border-indigo-100 hover:-translate-y-1"
                    >
                      <h3 className="font-medium text-gray-800 mb-3">{question}</h3>
                      <button className="text-indigo-600 text-sm font-medium hover:underline flex items-center">
                        View answer
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Support CTA */}
            <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl overflow-hidden">
              <div className="p-8 md:p-10 text-white">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold mb-3">Still need help?</h2>
                    <p className="mb-4 opacity-90 max-w-lg">
                      Our dedicated support team is ready to assist you with any questions or issues you might have.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <div className="flex items-center text-sm bg-white/10 px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        <span>24/7 Support</span>
                      </div>
                      <div className="flex items-center text-sm bg-white/10 px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        <span>Average response: 15 min</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 flex justify-center md:justify-end">
                    <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-bold hover:bg-gray-100 transition flex items-center shadow-md hover:shadow-lg">
                      <MdSupportAgent className="mr-2 text-xl" />
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;