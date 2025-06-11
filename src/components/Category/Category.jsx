import React from "react";
import { useNavigate } from "react-router-dom";

const staticCategories = [
  {
    id: 2,
    name: "Men's Fashion",
    image: "https://images.unsplash.com/photo-1552573102-2b44b44d85b5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
  },
  {
    id: 3,
    name: "Women's Fashion",
    image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 1,
    name: "Kids' Fashion",
    image: "https://media.istockphoto.com/photos/beautiful-stylish-little-girl-in-denim-clothes-picture-id1342428711?b=1&k=20&m=1342428711&s=170667a&w=0&h=iGI_3TqfLueET9mlu6uMbyb880BrBQocdbIIjA_rh-0=",
  },
];

const CategoryBanner = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className="text-xl md:text-3xl font-jost text-center pt-6 font-medium">
        Shop By Category
      </p>
      <div className="px-2 md:px-20 pt-7 pb-20 grid grid-cols-2 md:grid-cols-3 font-jost gap-5">
        {staticCategories.map((item) => (
          <div
            className="relative group overflow-hidden cursor-pointer aspect-[3/4]"
            key={item.id}
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute w-full p-1 flex flex-col items-center justify-center bottom-0 z-40 transition-all duration-300">
              <p className="font-bold text-lg md:text-2xl mb-2 text-center text-white drop-shadow-md">
                {item.name}
              </p>
              <p className="text-center cursor-pointer opacity-0 text-base text-white p-[1px] border-b group-hover:opacity-100 transition-opacity duration-300">
                Shop now
              </p>
            </div>
            <div className="absolute w-full h-1/2 bottom-0 bg-gradient-to-t from-[#292621cc] to-transparent"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryBanner;