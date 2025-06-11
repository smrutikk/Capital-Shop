import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Fixed import path
import "swiper/css";
import "swiper/css/navigation";

// Use `import` instead of `require` for TypeScript compatibility
import Hero1 from "../assets/images/hero1.webp";
import Hero2 from "../assets/images/hero2.webp";

const Hero = () => {
  return (
    <div className="w-full">
      <Swiper
        navigation={true}
        spaceBetween={30}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img 
              src={Hero1} 
              alt="Fashion Sale - Minimal Menz Style" 
              className="w-full h-auto"
            />
            <div className="absolute top-0 left-0 w-full md:w-[50%] h-full flex flex-col justify-center items-center text-center p-4">
              <p className="text-3xl md:text-5xl font-clicker text-red-600">
                Fashion Sale
              </p>
              <p className="text-xl md:text-5xl font-bold mt-2 md:mt-6 mb-1 md:mb-3">
                Minimal Menz Style
              </p>
              <p className="hidden md:block text-sm md:text-lg px-1 md:px-[20%]">
                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                voluptas iure, delectus dignissimos facilis neque nulla earum.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img 
              src={Hero2} 
              alt="Fashion Sale - Minimal Menz Style" 
              className="w-full h-auto"
            />
            <div className="absolute top-0 right-0 w-full md:w-[50%] h-full flex flex-col justify-center items-center text-center p-4">
              <p className="text-3xl md:text-5xl font-clicker text-red-600">
                Fashion Sale
              </p>
              <p className="text-xl md:text-5xl font-bold mt-2 md:mt-6 mb-1 md:mb-3">
                Minimal Menz Style
              </p>
              <p className="hidden md:block text-sm md:text-lg px-1 md:px-[20%]">
                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                voluptas iure, delectus dignissimos facilis neque nulla earum.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;