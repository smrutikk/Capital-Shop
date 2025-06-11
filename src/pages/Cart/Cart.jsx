import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CartSlice from "../../components/Cart/CartSlice";
import CheckoutStepper from "../../components/Checkout/CheckoutStepper";

import { getValidImageUrls } from "../../utils/imageUtils";

const CartPage = () => {
  document.title = "Capital Shop - Your Cart";

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout/shipping');
    } else {
      toast.info("Your cart is empty.");
    }
  };

  return (
    <div className="font-jost min-h-screen bg-gray-50">
      <CheckoutStepper currentStep={1} />

      <div className="container mx-auto px-4 pb-12">
        <h1 className="text-3xl font-bold text-center mb-8">Shopping Cart</h1>
        <div className="hidden md:grid grid-cols-12 gap-4 bg-white rounded-t-lg shadow-sm p-4 border-b border-gray-200">
          <div className="col-span-5 font-medium text-gray-700"><p>Product</p></div>
          <div className="col-span-2 font-medium text-gray-700 text-center"><p>Price</p></div>
          <div className="col-span-3 font-medium text-gray-700 text-center"><p>Quantity</p></div>
          <div className="col-span-2 font-medium text-gray-700 text-right"><p>Total</p></div>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-lg shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <p className="text-2xl font-medium text-gray-500 mb-4">Your cart is empty</p>
            <Link to="/home" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map((item) => {
              const validImages = getValidImageUrls(item.images);
              return (
              <div key={item.id} className="grid grid-cols-12 gap-4 bg-white p-4 border-b border-gray-200 hover:bg-orange-50 transition-colors">
                <div className="col-span-12 md:col-span-5 flex items-center space-x-4">
                  <img 
                    src={validImages[0]} // Use the cleaned URL
                    alt={item.title} 
                    className="w-16 h-16 object-cover rounded-md border border-gray-200"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{item.title}</p>
                    <button onClick={() => {
                        dispatch(CartSlice.actions.removeItemFromCart({ id: item.id }));
                        toast.info(`${item.title} removed from cart`);
                      }} className="text-sm text-orange-600 hover:text-orange-800 mt-1">
                      Remove
                    </button>
                  </div>
                </div>

                <div className="col-span-4 md:col-span-2 flex md:justify-center items-center">
                  <p className="text-gray-700 font-medium">${item.price.toFixed(2)}</p>
                </div>

                <div className="col-span-4 md:col-span-3 flex items-center justify-center">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                      onClick={() => dispatch(CartSlice.actions.delCart({ id: item.id }))}
                      disabled={item.quantity <= 1}>
                      -
                    </button>
                    <span className="px-4 py-1 text-center w-12">{item.quantity}</span>
                    <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                      onClick={() => dispatch(CartSlice.actions.addCart(item))}>
                      +
                    </button>
                  </div>
                </div>

                <div className="col-span-4 md:col-span-2 flex md:justify-end items-center">
                  <p className="font-medium text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
)})}

            <div className="bg-white rounded-b-lg shadow-sm p-6 mt-4">
              <div className="flex justify-end">
                <div className="w-full md:w-1/3 space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-orange-600">${calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="pt-4">
                    <button onClick={handleCheckout} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md transition-colors font-medium">
                      Proceed to Shipping
                    </button>
                  </div>
                  <div className="pt-2">
                    <Link to="/home" className="w-full inline-block text-center text-orange-600 hover:text-orange-800 py-2 rounded-md transition-colors">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;