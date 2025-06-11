import React from "react";
import { FiClock, FiCalendar, FiUser, FiArrowRight, FiSearch } from "react-icons/fi";

const Blog = () => {
  // A helper function to scroll to the top of the page smoothly.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // ====================================================================
  // CORRECTED IMAGE URLS
  // ====================================================================

  const featuredPost = {
     id: 1,
    title: "The New Era of Street Style: Comfort Meets High Fashion",
    excerpt: "Street style is no longer just about what's trendy; it's about personal expression and comfort...",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
    date: "June 08, 2024",
    readTime: "6 min read",
    author: "Jenna Sterling",
    category: "Street Style",
  };

  const blogPosts = [
    {
      id: 2,
      title: "Building the Perfect Capsule Wardrobe for Any Season",
      excerpt: "Simplify your life and refine your style...",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
      date: "June 02, 2024",
      readTime: "8 min read",
      author: "Maria Garcia",
      category: "Minimalism",
    },
    {
      id: 3,
      title: "Vintage Revival: Why '90s Fashion is Here to Stay",
      excerpt: "From baggy jeans to slip dresses...",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
      date: "May 25, 2024",
      readTime: "5 min read",
      author: "David Chen",
      category: "Trends",
    },
    {
      id: 4,
      title: "How to Accessorize: Turning a Simple Outfit into a Statement",
      excerpt: "The right accessories can transform any look...",
      image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9",
      date: "May 18, 2024",
      readTime: "6 min read",
      author: "Chloe Kim",
      category: "Style Guides",
    },
    {
      id: 5,
      title: "5 Sustainable Fashion Brands That Are Changing the Game",
      excerpt: "Looking to make your wardrobe more eco-friendly?",
      image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6",
      date: "May 11, 2024",
      readTime: "7 min read",
      author: "Samuel Jones",
      category: "Sustainability",
    },
  ];


  const categories = [
    { name: "All Fashion", count: 18 },
    { name: "Street Style", count: 4 },
    { name: "Trends", count: 5 },
    { name: "Style Guides", count: 3 },
    { name: "Sustainability", count: 2 },
  ];

  const popularPosts = [
    {
      id: 1,
      title: "The New Era of Street Style: Comfort Meets High Fashion",
      date: "June 08, 2024",
    },
    {
      id: 2,
      title: "Building the Perfect Capsule Wardrobe for Any Season",
      date: "June 02, 2024",
    },
    {
      id: 4,
      title: "How to Accessorize: Turning a Simple Outfit into a Statement",
      date: "May 18, 2024",
    },
  ];

  return (
    // The rest of the UI remains the same as the last version
    <div className="font-jost bg-slate-50 min-h-screen">
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">The Style Edit</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
            Your daily dose of fashion news, styling tips, and trend reports.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-2/3">
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-gray-800 relative inline-block after:absolute after:content-[''] after:w-1/2 after:h-1 after:bg-orange-500 after:-bottom-2 after:left-0">
                Featured Story
              </h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100">
                <div className="relative overflow-hidden h-80">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-1.5 bg-orange-500 text-white rounded-full text-sm font-semibold shadow-md">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 gap-6 mb-6">
                    <span className="flex items-center"><FiCalendar className="mr-2" /> {featuredPost.date}</span>
                    <span className="flex items-center"><FiClock className="mr-2" /> {featuredPost.readTime}</span>
                    <span className="flex items-center"><FiUser className="mr-2" /> {featuredPost.author}</span>
                  </div>
                  <button onClick={scrollToTop} className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium group transition-colors duration-200">
                    Read more 
                    <FiArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8 text-gray-800 relative inline-block after:absolute after:content-[''] after:w-1/2 after:h-1 after:bg-orange-500 after:-bottom-2 after:left-0">
                Recent Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group border border-gray-100">
                    <div className="relative overflow-hidden h-52">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-semibold shadow">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight flex-grow">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-4 mt-auto">
                        <span className="flex items-center"><FiCalendar className="mr-2" /> {post.date}</span>
                        <span className="flex items-center"><FiClock className="mr-2" /> {post.readTime}</span>
                      </div>
                      <button onClick={scrollToTop} className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium group transition-colors duration-200 self-start">
                        Read more 
                        <FiArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-16">
                <nav className="flex items-center space-x-2">
                  <button onClick={scrollToTop} className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200">Previous</button>
                  <button onClick={scrollToTop} className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-md">1</button>
                  <button onClick={scrollToTop} className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200">2</button>
                  <button onClick={scrollToTop} className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200">Next</button>
                </nav>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 space-y-8 sticky top-24 self-start">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 relative pb-2 after:absolute after:content-[''] after:w-10 after:h-0.5 after:bg-orange-500 after:bottom-0 after:left-0">
                Search
              </h3>
              <div className="relative">
                <input type="text" placeholder="Search posts..." className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 pl-10" />
                <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 relative pb-2 after:absolute after:content-[''] after:w-10 after:h-0.5 after:bg-orange-500 after:bottom-0 after:left-0">
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button onClick={scrollToTop} className="w-full text-left flex justify-between items-center py-2 px-3 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200">
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-xs font-medium">{category.count}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 relative pb-2 after:absolute after:content-[''] after:w-10 after:h-0.5 after:bg-orange-500 after:bottom-0 after:left-0">
                Popular Posts
              </h3>
              <ul className="space-y-4">
                {popularPosts.map((post) => (
                  <li key={post.id}>
                    <button onClick={scrollToTop} className="w-full text-left group block p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <h4 className="text-md font-medium text-gray-800 group-hover:text-orange-600 mb-1 transition-colors duration-200">{post.title}</h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;