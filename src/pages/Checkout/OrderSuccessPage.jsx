import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const OrderSuccessPage = () => {
    document.title = "Order Successful!";

    return (
        <div className="font-jost bg-gray-50 flex items-center justify-center min-h-screen">
            <div className="bg-white p-12 rounded-lg shadow-lg text-center max-w-md mx-4">
                <FiCheckCircle size={80} className="text-green-500 mx-auto mb-6" />
                
                <h1 className="text-3xl font-bold mb-3">
                    Thank You!
                </h1>
                
                <p className="text-xl text-gray-700 mb-6">
                    Your order has been placed successfully.
                </p>
                
                <p className="text-gray-500 mb-8">
                    You will receive an email confirmation shortly.
                </p>
                
                <Link 
                    to="/home" 
                    className="w-full bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors"
                >
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
}

export default OrderSuccessPage;