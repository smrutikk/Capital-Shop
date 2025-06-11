import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { Logout } from "../../pages/Login/AccountSlice";
import { getLoginSuccess, quantityItem } from "../../redux/selectors";

// This file will be the single source of truth for your category list.
// This file will be the single source of truth for your category list.
export const Category = [
    { id: 1, name: "All Clothing" },
    { id: 2, name: "Men's Fashion" },
    { id: 3, name: "Women's Fashion" },
    { id: 4, name: "Kids' Fashion" },
    { id: 5, name: "Accessories" },
];

const Header = () => {
    const quantity = useSelector(quantityItem);
    const loginStatus = useSelector(getLoginSuccess);
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => {
        if (path === "/home") return location.pathname === "/home" || location.pathname === "/";
        return location.pathname.startsWith(path);
    };

    const isPagesActive = isActive("/cart") || isActive("/favorites") || isActive("/login");

    const handleLogout = () => {
        localStorage.setItem("loginSuccess", "false");
        localStorage.removeItem("currentUser");
        dispatch(Logout());
        navigate("/login");
    };

    return (
        <div className="font-jost">
            <div className="px-2 md:px-20 bg-slate-50 flex justify-between items-center transition-all">
                <div>
                    <Link to="/home">
                        <img src={Logo} alt="Capital Shop Logo" className="h-9" />
                    </Link>
                </div>
                <div className="hidden md:flex flex-row items-center">
                    <Link to="/home" className={`md:p-6 text-base font-bold cursor-pointer ${isActive("/home") ? "text-orange-500" : "hover:text-orange-500"}`}>Home</Link>
                    
                    <Link to="/category/2" className={`md:p-6 text-base font-bold cursor-pointer ${isActive("/category/2") ? "text-orange-500" : "hover:text-orange-500"}`}>Men</Link>
                    
                    <Link to="/category/3" className={`md:p-6 text-base font-bold cursor-pointer ${isActive("/category/3") ? "text-orange-500" : "hover:text-orange-500"}`}>Women</Link>
                    
                    <Link to="/category/4" className={`md:p-6 text-base font-bold cursor-pointer ${isActive("/category/4") ? "text-orange-500" : "hover:text-orange-500"}`}>Baby Collection</Link>
                    
                    <div className="relative group">
                        <div className={`md:p-6 text-base font-bold cursor-pointer flex items-center gap-1 ${isPagesActive ? "text-orange-500" : "hover:text-orange-500"}`}>
                            Pages
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className="absolute hidden group-hover:block top-full left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-md p-2 z-50 border w-40">
                           <Link to="/favorites" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500 rounded-md">Favorite Page</Link>
                           <Link to="/cart" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-500 rounded-md">Cart Page</Link>
                        </div>
                    </div>
                    
                    <Link to="/blog" className={`md:p-6 text-base font-bold cursor-pointer ${isActive("/blog") ? "text-orange-500" : "hover:text-orange-500"}`}>Blog</Link>
                    
                    <Link to="/contact" className={`md:p-6 text-base font-bold cursor-pointer ${isActive("/contact") ? "text-orange-500" : "hover:text-orange-500"}`}>Contact</Link>
                </div>

                <div className="flex flex-row items-center">
                    <div className="relative group">
                        <Link to={loginStatus === "true" ? "#" : "/login"} className="relative p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                        
                        {loginStatus === "true" && (
                            <div className="absolute hidden group-hover:block border shadow-lg p-3 z-50 bg-white right-0 rounded-lg">
                                <p onClick={handleLogout} className="hover:text-orange-500 cursor-pointer whitespace-nowrap">Log Out</p>
                            </div>
                        )}
                    </div>

                    <Link to="/cart" className="relative p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {quantity > 0 && (
                            <div className="absolute top-1 right-1 rounded-full bg-red-500 h-4 w-4 flex justify-center items-center text-white text-xs font-bold">
                                {quantity}
                            </div>
                        )}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;