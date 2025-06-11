import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import CheckoutStepper from '../../components/Checkout/CheckoutStepper';
import CartSlice from '../../components/Cart/CartSlice';

// --- Icon Components for Visual Appeal ---
const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);
const PayPalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.32,18.005 C8.32,18.005 8.286,18.294 8.019,18.294 L4.942,18.294 C4.66,18.294 4.621,18.117 4.673,17.882 C5.029,16.276 6.136,10.134 6.136,10.134 C6.158,9.948 6.294,9.839 6.48,9.839 L9.056,9.839 C13.786,9.839 15.12,12.062 14.54,14.689 C14.072,16.784 12.355,18.005 9.977,18.005 L8.32,18.005 Z M10.096,6.000 L12.448,6.000 C16.758,6.000 18.45,7.900 17.805,10.684 C17.26,13.065 15.65,14.225 13.56,14.225 C13.56,14.225 13.882,12.868 14.053,12.164 C14.25,11.353 14.85,9.878 14.18,9.314 C13.46,8.710 11.96,8.913 11.96,8.913 L11.45,11.884 C11.39,12.205 11.13,12.336 10.83,12.285 L8.521,11.889 C8.232,11.841 8.083,11.562 8.149,11.258 L9.467,6.467 C9.54,6.177 9.79,6.000 10.096,6.000 Z"/>
    </svg>
);
const CashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);
// --- End of Icon Components ---

const PaymentPage = () => {
    document.title = "Payment Details";
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleFinalizePayment = (e) => {
        e.preventDefault();
        dispatch(CartSlice.actions.checkout());
        toast.success("Order placed successfully!");
        navigate('/order-success');
    }

    const paymentOptions = [
        { id: 'creditCard', label: 'Credit / Debit Card', icon: <CreditCardIcon /> },
        { id: 'paypal', label: 'PayPal', icon: <PayPalIcon /> },
        { id: 'cod', label: 'Cash on Delivery', icon: <CashIcon /> },
    ];

    return (
        <div className="font-jost bg-gray-50 min-h-screen">
            <CheckoutStepper currentStep={3} />

            <div className="container mx-auto px-4 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Payment Method Selection */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
                            <div className="space-y-4">
                                {paymentOptions.map((option) => (
                                    <label key={option.id} className={`flex items-center border-2 p-4 rounded-lg cursor-pointer transition-all ${
                                        paymentMethod === option.id ? 'border-orange-500 bg-orange-50' : 'border-gray-200'
                                    }`}>
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value={option.id}
                                            checked={paymentMethod === option.id}
                                            onChange={() => setPaymentMethod(option.id)}
                                            className="hidden"
                                        />
                                        {option.icon}
                                        <span className="font-semibold">{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Payment Details Form/Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h1 className="text-3xl font-bold text-center mb-8">Payment Details</h1>
                            
                            {/* Credit Card Form */}
                            {paymentMethod === 'creditCard' && (
                                <form onSubmit={handleFinalizePayment}>
                                    <div className="mb-6">
                                        <label className="block mb-2 font-medium">Card Number</label>
                                        <input type="text" placeholder="•••• •••• •••• ••••" className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block mb-2 font-medium">Cardholder Name</label>
                                        <input type="text" placeholder="John Doe" className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label className="block mb-2 font-medium">Expiry Date</label>
                                            <input type="text" placeholder="MM / YY" className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
                                        </div>
                                        <div>
                                            <label className="block mb-2 font-medium">CVV</label>
                                            <input type="text" placeholder="•••" className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">
                                        Place Order
                                    </button>
                                </form>
                            )}

                            {/* PayPal Content */}
                            {paymentMethod === 'paypal' && (
                                <div className="text-center">
                                    <p className="mb-6 text-gray-600">You will be redirected to the PayPal website to complete your payment.</p>
                                    <button onClick={handleFinalizePayment} className="w-full bg-[#00457C] text-white font-bold py-3 rounded-lg hover:bg-[#003057] transition-colors">
                                        Continue with PayPal
                                    </button>
                                </div>
                            )}

                            {/* Cash on Delivery Content */}
                            {paymentMethod === 'cod' && (
                                <div className="text-center">
                                    <p className="mb-6 text-gray-600">You will pay with cash upon delivery of your order.</p>
                                    <button onClick={handleFinalizePayment} className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">
                                        Confirm Order
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;