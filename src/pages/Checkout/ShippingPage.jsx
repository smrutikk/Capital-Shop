import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutStepper from '../../components/Checkout/CheckoutStepper';

const ShippingPage = () => {
    document.title = "Shipping Information";
    const navigate = useNavigate();
    
    // State to hold all form fields in one object
    const [shippingDetails, setShippingDetails] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        email: ''
    });

    // On component mount, try to load the saved address from localStorage
    useEffect(() => {
        try {
            const savedAddress = localStorage.getItem('shippingAddress');
            if (savedAddress) {
                setShippingDetails(JSON.parse(savedAddress));
            }
        } catch (error) {
            console.error("Failed to parse shipping address from localStorage", error);
        }
    }, []);

    // A single handler to update the state object
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save the current address to localStorage for next time
        try {
            localStorage.setItem('shippingAddress', JSON.stringify(shippingDetails));
        } catch (error) {
            console.error("Failed to save shipping address to localStorage", error);
        }
        // Proceed to the next step
        navigate('/checkout/payment');
    };

    return (
        <div className="font-jost bg-gray-50 min-h-screen">
            <CheckoutStepper currentStep={2} />
            
            <div className="container mx-auto px-4 pb-12 max-w-2xl">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h1 className="text-3xl font-bold text-center mb-8">Shipping Information</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input type="text" name="firstName" placeholder="First Name" value={shippingDetails.firstName} onChange={handleInputChange} className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
                            <input type="text" name="lastName" placeholder="Last Name" value={shippingDetails.lastName} onChange={handleInputChange} className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
                        </div>
                        <div className="mb-6">
                            <input type="text" name="address" placeholder="Address" value={shippingDetails.address} onChange={handleInputChange} className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <input type="text" name="city" placeholder="City" value={shippingDetails.city} onChange={handleInputChange} className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
                            <input type="text" name="state" placeholder="State / Province" value={shippingDetails.state} onChange={handleInputChange} className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
                            <input type="text" name="zip" placeholder="Zip / Postal Code" value={shippingDetails.zip} onChange={handleInputChange} className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
                        </div>
                         <div className="mb-6">
                            <input type="email" name="email" placeholder="Email Address" value={shippingDetails.email} onChange={handleInputChange} className="p-3 border rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:outline-none" required />
                        </div>
                        <button type="submit" className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">
                            Continue to Payment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ShippingPage;