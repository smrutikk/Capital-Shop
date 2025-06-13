import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";
import Contactus from "./pages/Contact Us/Contactus";
import AboutUs from "./pages/About Us/AboutUs";
import FAQ from "./pages/FAQ/FAQ";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home/Home"));
const Cart = lazy(() => import("./pages/Cart/Cart")); // Ensure this path is correct
const Category = lazy(() => import("./pages/Category/Category")); // Ensure this path is correct
const ProductDetail = lazy(() => import("./pages/Product Details/ProductDetail"));
const Register = lazy(() => import("./pages/Login/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

// New lazy-loaded imports for the checkout flow
const ShippingPage = lazy(() => import("./pages/Checkout/ShippingPage"));
const PaymentPage = lazy(() => import("./pages/Checkout/PaymentPage"));
const OrderSuccessPage = lazy(() => import("./pages/Checkout/OrderSuccessPage"));

function App() {
  const RequireAuth = ({ children }) => {
    const isLoggedIn = localStorage.getItem("loginSuccess") === "true";
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  const RequireNoAuth = ({ children }) => {
    const isLoggedIn = localStorage.getItem("loginSuccess") === "true";
    return isLoggedIn ? <Navigate to="/home" /> : children;
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        
        <Header />
        <ScrollToTop />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            
            <Route
              path="/home"
              element={ <Suspense fallback={<Loader />}><Home /></Suspense> }
            />
            <Route
              path="/product/:id"
              element={ <Suspense fallback={<Loader />}><ProductDetail /></Suspense> }
            />
            <Route
              path="/category/:id" 
              element={ <Suspense fallback={<Loader />}><Category /></Suspense> }
            />
            <Route
              path="/blog"
              element={ <Suspense fallback={<Loader />}><Blog /></Suspense> }
            />
            <Route
              path="/contact"
              element={ <Suspense fallback={<Loader />}><Contactus /></Suspense> }
            />
            <Route
              path="/aboutUs"
              element={ <Suspense fallback={<Loader />}><AboutUs /></Suspense> }
            />
            <Route
              path="/faq"
              element={ <Suspense fallback={<Loader />}><FAQ /></Suspense> }
            />
            
            <Route
              path="/login"
              element={ <Suspense fallback={<Loader />}><RequireNoAuth><Login /></RequireNoAuth></Suspense> }
            />
            <Route
              path="/register"
              element={ <Suspense fallback={<Loader />}><RequireNoAuth><Register /></RequireNoAuth></Suspense> }
            />
            
            <Route
              path="/cart"
              element={ <Suspense fallback={<Loader />}><RequireAuth><Cart /></RequireAuth></Suspense> }
            />
            <Route
              path="/favorites"
              element={ <Suspense fallback={<Loader />}><RequireAuth><Favorites /></RequireAuth></Suspense> }
            />

            {/* NEW CHECKOUT ROUTES */}
            <Route
              path="/checkout/shipping"
              element={ <Suspense fallback={<Loader />}><RequireAuth><ShippingPage /></RequireAuth></Suspense> }
            />
            <Route
              path="/checkout/payment"
              element={ <Suspense fallback={<Loader />}><RequireAuth><PaymentPage /></RequireAuth></Suspense> }
            />
            <Route
              path="/order-success"
              element={ <Suspense fallback={<Loader />}><OrderSuccessPage /></Suspense> }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;