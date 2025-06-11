import CategoryBanner from "../components/Category";
import Hero from "../components/Hero";
import { useEffect, useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
//import { Product } from "../../@types/type";
import axiosClient from "../apis/axiosClient";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

// Import images properly
import CustomerImage from "../assets/images/customer.webp";
import Delivery from "../assets/images/services1.png";
import Secure from "../assets/images/services2.png";
import Money from "../assets/images/services3.png";
import Support from "../assets/images/services4.png";

const Home = () => {
  document.title = "Capital Shop";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await axiosClient.get('categories?limit=4');
        setCategories(categoriesData);
        if (categoriesData.length > 0) {
          setActiveCategory(categoriesData[0].id);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!activeCategory) return;
      try {
        const productsData = await axiosClient.get(
          `categories/${activeCategory}/products?offset=0&limit=10`
        );
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, [activeCategory]);

  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="font-jost">
      <Hero />
      <CategoryBanner />
      
      {/* Trending Section */}
      <div className="px-2 md:px-20">
        <div className="flex flex-row justify-between items-center border-b border-gray-300 md:mb-9">
          <h2 className="text-xl md:text-3xl font-medium pb-4">
            Trending This Week
          </h2>
          <div className="hidden md:flex gap-5">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`pb-4 px-2 transition-all duration-200 ${
                  activeCategory === category.id
                    ? "border-b-4 border-primary font-semibold"
                    : "opacity-75"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Slider */}
      <div className="md:px-20">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 }
          }}
          navigation
          spaceBetween={10}
          rewind
        
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="py-7">
                <Card product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Testimonial Section */}
      <div className="mt-10 bg-[#f3ead8] px-2 py-6 md:p-20 text-center">
        <h2 className="text-xl md:text-3xl font-semibold">
          Customer Testimonial
        </h2>
        <p className="text-lg md:text-2xl font-normal md:px-[25%] mt-3 md:mt-10 mb-6">
          Everybody is different, which is why we offer styles for every body.
          Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos
          facilis neque nulla earum.
        </p>
        <div className="flex items-center justify-center">
          <img 
            src={CustomerImage} 
            alt="Customer" 
            className="mr-6 w-16 h-16 rounded-full object-cover" 
          />
          <div>
            <p className="text-base">Petey Cruiser</p>
            <p className="text-lg">Designer at Colorlib</p>
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="px-2 md:px-20 py-10">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-8">
          You May Like
        </h2>
        <Swiper
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 }
          }}
          navigation
          spaceBetween={10}
          rewind
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="py-7">
                <Card product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 px-2 md:px-20 py-32 bg-[#f6f6f6] gap-8">
        {[
          { img: Delivery, title: "Fast & Free Delivery", text: "Free delivery on all orders" },
          { img: Secure, title: "Secure Payment", text: "Free delivery on all orders" },
          { img: Money, title: "Money Back", text: "Free delivery on all orders" },
          { img: Support, title: "Online Support", text: "Free delivery on all orders" }
        ].map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={service.img} alt={service.title} className="h-16 w-auto" />
            <h3 className="text-base md:text-xl font-medium mt-6">{service.title}</h3>
            <p className="text-sm md:text-base text-[#57667e] mt-2">{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;