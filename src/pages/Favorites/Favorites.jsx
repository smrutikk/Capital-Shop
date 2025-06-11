// src/pages/Favorites/Favorites.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../apis/axiosClient";
import Card from "../../components/Card/Card"; // Assuming Card component is in this path
import { toast } from "react-toastify";

const Favorites = () => {
  document.title = "Capital Shop - Favorites";

  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      setIsLoading(true);
      const likedProductIds = JSON.parse(localStorage.getItem("likedProducts") || "[]");

      if (likedProductIds.length === 0) {
        setFavoriteProducts([]);
        setIsLoading(false);
        return;
      }

      try {
        // Fetch details for each liked product
        const productPromises = likedProductIds.map(id => 
          axiosClient.get(`products/${id}`)
        );
        
        const products = await Promise.all(productPromises);
        setFavoriteProducts(products);

      } catch (error) {
        console.error("Failed to fetch favorite products:", error);
        toast.error("Could not load your favorite items.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavoriteProducts();
  }, []);

  // This function will be called by the Card component to update the UI instantly
  // when a product is un-liked from the favorites page.
  const handleUnlike = (productId) => {
    setFavoriteProducts(prevProducts => 
      prevProducts.filter(p => p.id !== productId)
    );
  };

  return (
    <div className="font-jost min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-50 to-rose-100 py-16 flex items-center justify-center flex-col text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Your Favorite Items</h1>
        <div className="flex items-center text-gray-600">
          <Link
            to="/home"
            className="hover:text-red-600 transition-colors border-r border-rose-200 pr-3"
          >
            Home
          </Link>
          <span className="pl-3">Favorites</span>
        </div>
      </div>

      {/* Favorites Content */}
      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your favorites...</p>
          </div>
        ) : favoriteProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favoriteProducts.map((product) => (
              // We pass the handleUnlike function to each card
              <Card 
                key={product.id} 
                product={product} 
                onUnlike={handleUnlike} 
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-lg shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <p className="text-2xl font-medium text-gray-500 mb-4">You have no favorite items yet</p>
            <p className="text-gray-500 mb-6">Click the heart icon on a product to save it here.</p>
            <Link
              to="/home"
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
            >
              Discover Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;