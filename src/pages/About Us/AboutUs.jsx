// src/pages/AboutUs/AboutUs.jsx
import React, { useState } from 'react';
import { FaUsers, FaAward, FaHandshake, FaChartLine, FaMapMarkerAlt, FaShoppingBag, FaLightbulb, FaLeaf, FaGlobe } from 'react-icons/fa';
import teamMembers from './teamData';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="bg-gray-50">
      {/* Hero Section - Modern with background image */}
      <div className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174" 
            alt="Office workspace" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-blue-600/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
            <span className="text-blue-300 font-medium">Since 2023</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Building the Future of <span className="text-blue-400">E-commerce</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Revolutionizing online shopping through innovation, quality, and exceptional customer experiences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Company Overview - Modern card layout */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Journey
              </div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg mb-6 text-gray-700">
                Founded in 2023, we started as a passionate team with a vision to transform online shopping. 
                Today, we're proud to serve millions globally with our curated selection of exceptional products.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                By combining cutting-edge technology with human-centered design, we create seamless experiences 
                that delight customers at every touchpoint.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100 shadow-sm transition-all duration-300 hover:shadow-md">
                  <FaUsers className="text-blue-600 text-3xl mb-3" />
                  <h3 className="font-bold text-2xl text-gray-800">10M+</h3>
                  <p className="text-gray-600 text-sm">Happy Customers</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-white p-5 rounded-xl border border-purple-100 shadow-sm transition-all duration-300 hover:shadow-md">
                  <FaShoppingBag className="text-purple-600 text-3xl mb-3" />
                  <h3 className="font-bold text-2xl text-gray-800">50K+</h3>
                  <p className="text-gray-600 text-sm">Products</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl border border-green-100 shadow-sm transition-all duration-300 hover:shadow-md">
                  <FaGlobe className="text-green-600 text-3xl mb-3" />
                  <h3 className="font-bold text-2xl text-gray-800">50+</h3>
                  <p className="text-gray-600 text-sm">Countries</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-white p-5 rounded-xl border border-amber-100 shadow-sm transition-all duration-300 hover:shadow-md">
                  <FaLeaf className="text-amber-600 text-3xl mb-3" />
                  <h3 className="font-bold text-2xl text-gray-800">100%</h3>
                  <p className="text-gray-600 text-sm">Eco-Friendly</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Our team" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <p className="text-lg">Our dedicated team at the 2024 Innovation Summit</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <FaLightbulb className="text-green-600 text-2xl" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Innovation Award 2025</p>
                    <p className="text-gray-600 text-sm">E-commerce Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section - Modern rounded tabs */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-3">
              Our Philosophy
            </div>
            <h2 className="text-4xl font-bold mb-4">Core Principles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The foundation of everything we do is built on these fundamental beliefs
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-1 mb-8 max-w-3xl mx-auto">
            <div className="flex flex-wrap">
              <button
                className={`py-3 px-6 font-medium rounded-lg transition-all duration-300 ${
                  activeTab === 'mission' 
                    ? 'bg-blue-600 text-white shadow' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setActiveTab('mission')}
              >
                Our Mission
              </button>
              <button
                className={`py-3 px-6 font-medium rounded-lg transition-all duration-300 ${
                  activeTab === 'values' 
                    ? 'bg-blue-600 text-white shadow' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setActiveTab('values')}
              >
                Our Values
              </button>
              <button
                className={`py-3 px-6 font-medium rounded-lg transition-all duration-300 ${
                  activeTab === 'history' 
                    ? 'bg-blue-600 text-white shadow' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setActiveTab('history')}
              >
                Our Journey
              </button>
            </div>
          </div>

          <div className="min-h-[300px] max-w-4xl mx-auto">
            {activeTab === 'mission' && (
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-white to-blue-50 p-6 rounded-2xl border border-blue-100 transition-all duration-300 hover:border-blue-300">
                  <div className="bg-blue-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-5">
                    <FaAward className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quality First</h3>
                  <p className="text-gray-600">We meticulously curate only the highest quality products for our customers.</p>
                </div>
                <div className="bg-gradient-to-b from-white to-purple-50 p-6 rounded-2xl border border-purple-100 transition-all duration-300 hover:border-purple-300">
                  <div className="bg-purple-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-5">
                    <FaHandshake className="text-purple-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Customer Centric</h3>
                  <p className="text-gray-600">Every decision starts with our customers' needs and experiences.</p>
                </div>
                <div className="bg-gradient-to-b from-white to-green-50 p-6 rounded-2xl border border-green-100 transition-all duration-300 hover:border-green-300">
                  <div className="bg-green-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-5">
                    <FaChartLine className="text-green-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Continuous Innovation</h3>
                  <p className="text-gray-600">We constantly evolve to stay at the forefront of e-commerce technology.</p>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl border border-blue-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <div className="bg-blue-600 w-2 h-2 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold">Integrity</h3>
                  </div>
                  <p className="text-gray-600 pl-10">Transparent, honest business practices that build trust with our community.</p>
                </div>
                <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-2xl border border-green-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                      <div className="bg-green-600 w-2 h-2 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold">Sustainability</h3>
                  </div>
                  <p className="text-gray-600 pl-10">Eco-friendly practices throughout our supply chain and operations.</p>
                </div>
                <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl border border-purple-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg mr-4">
                      <div className="bg-purple-600 w-2 h-2 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold">Diversity & Inclusion</h3>
                  </div>
                  <p className="text-gray-600 pl-10">Celebrating differences and fostering an inclusive environment.</p>
                </div>
                <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl border border-amber-100">
                  <div className="flex items-start mb-4">
                    <div className="bg-amber-100 p-2 rounded-lg mr-4">
                      <div className="bg-amber-600 w-2 h-2 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold">Community Focus</h3>
                  </div>
                  <p className="text-gray-600 pl-10">Giving back and creating positive impact in communities we serve.</p>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 to-green-300 rounded-full"></div>
                
                <div className="relative pl-10 pb-10">
                  <div className="absolute left-0 w-6 h-6 rounded-full bg-blue-600 border-4 border-white -ml-[14px]"></div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-sm font-semibold text-blue-600 mb-1">June 2023</div>
                    <h3 className="text-xl font-bold mb-2">Humble Beginnings</h3>
                    <p className="text-gray-600">Founded in a small office with just 5 team members and a dream to change e-commerce.</p>
                  </div>
                </div>
                
                <div className="relative pl-10 pb-10">
                  <div className="absolute left-0 w-6 h-6 rounded-full bg-purple-600 border-4 border-white -ml-[14px]"></div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-sm font-semibold text-purple-600 mb-1">January 2024</div>
                    <h3 className="text-xl font-bold mb-2">First Million Customers</h3>
                    <p className="text-gray-600">Reached our first million customers and expanded to international markets.</p>
                  </div>
                </div>
                
                <div className="relative pl-10">
                  <div className="absolute left-0 w-6 h-6 rounded-full bg-green-600 border-4 border-white -ml-[14px]"></div>
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="text-sm font-semibold text-green-600 mb-1">Present Day</div>
                    <h3 className="text-xl font-bold mb-2">Industry Innovation Leader</h3>
                    <p className="text-gray-600">Recognized for our AI-powered shopping assistant and sustainable practices.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Team Section - Modern cards with hover effect */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-3">
              The People Behind Our Success
            </div>
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to creating exceptional shopping experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-72 object-cover"
                  />
                  {hoveredMember === member.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                      <p className="text-white text-sm mb-4 transition-all duration-300">{member.bio}</p>
                      <div className="flex space-x-3">
                        {member.socialLinks.map((link) => (
                          <a 
                            key={link.name} 
                            href={link.url} 
                            className="bg-white/20 text-white p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                            aria-label={link.name}
                          >
                            {link.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-600 mb-1">{member.position}</p>
                  <p className="text-sm text-gray-500">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Locations Section - Modern map layout */}
        <section>
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-3">
              Global Reach
            </div>
            <h2 className="text-4xl font-bold mb-4">Our Worldwide Presence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Serving customers across the globe from our strategic locations
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 p-8">
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-6 text-gray-800">Our Offices</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-blue-300 transition-colors">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <FaMapMarkerAlt className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Global Headquarters</h4>
                        <p className="text-gray-600">San Francisco, California</p>
                        <p className="text-gray-500 text-sm mt-1">123 Tech Street, Suite 500</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-purple-300 transition-colors">
                      <div className="bg-purple-100 p-3 rounded-lg mr-4">
                        <FaMapMarkerAlt className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">European Operations</h4>
                        <p className="text-gray-600">Berlin, Germany</p>
                        <p className="text-gray-500 text-sm mt-1">45 Innovation Avenue</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-green-300 transition-colors">
                      <div className="bg-green-100 p-3 rounded-lg mr-4">
                        <FaMapMarkerAlt className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Asia Pacific Hub</h4>
                        <p className="text-gray-600">Singapore</p>
                        <p className="text-gray-500 text-sm mt-1">8 Marina Boulevard</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-xl border border-blue-200">
                  <h4 className="font-bold text-gray-800 mb-3">Global Distribution Centers</h4>
                  <p className="text-gray-600 text-sm">
                    With facilities in 6 countries across 3 continents, we ensure fast, sustainable 
                    delivery to customers worldwide.
                  </p>
                </div>
              </div>
              
              <div className="md:w-3/5 bg-gray-100 min-h-[400px] p-8 flex items-center justify-center">
                <div className="relative w-full h-full max-w-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b" 
                    alt="World map" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                  
                  {/* Map markers */}
                  <div className="absolute top-[30%] left-[20%]">
                    <div className="animate-pulse w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="absolute top-[45%] left-[50%]">
                    <div className="animate-pulse w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="absolute top-[60%] left-[80%]">
                    <div className="animate-pulse w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;