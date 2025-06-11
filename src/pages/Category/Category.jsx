import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import { FiFilter, FiChevronRight, FiHome } from "react-icons/fi";
import { getProductsByCategory } from '../../services/productService';

const CategoryPage = () => {
  document.title = "Capital Shop - Category";
  const { id } = useParams(); // The category ID from the URL
  const navigate = useNavigate();
  const location = useLocation();

  // State for products and loading
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // State for filters. The category in the filter now syncs with the URL.
  const [fromMoney, setFromMoney] = useState("0");
  const [toMoney, setToMoney] = useState("");

  // Static category list for the dropdown menu
  // In your CategoryPage component, update the categories state:
const [categories] = useState([
  { id: 1, name: "All Clothing" },
  { id: 2, name: "Men's Fashion" },
  { id: 3, name: "Women's Fashion" },
  { id: 4, name: "Kids' Fashion" },
  { id: 5, name: "Accessories" },
]);
  
  // This state holds the currently selected category in the dropdown.
  // We initialize it from the URL parameter.
  const [selectedDropdownCategory, setSelectedDropdownCategory] = useState(id || "1");

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // When the component loads or the URL id changes, fetch data.
    const getData = async () => {
      if (!id) return;
      setIsLoading(true);
      
      const allProducts = await getProductsByCategory(id);
      
      // Apply price filters
      const filteredProducts = allProducts.filter(
        (product) =>
          product.price >= parseFloat(fromMoney) &&
          product.price <= (toMoney === "" ? Infinity : parseFloat(toMoney))
      );
      
      setProducts(filteredProducts);
      setIsLoading(false);
    };
    
    getData();
  }, [id, fromMoney, toMoney]); // Rerun this effect if id or price filters change

  // This function is called when the user clicks the "Apply Filters" button.
  const handleApplyFilters = () => {
    // It navigates to the new category URL, which will trigger the useEffect to refetch data.
    navigate(`/category/${selectedDropdownCategory}`);
  };

  // Find the name of the current category to display in the title
  const currentCategoryName = categories.find(cat => cat.id === parseInt(id))?.name || "Products";

  return (
    <div className="font-jost bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-[#F3EAD8] to-[#D9D2C5] py-16 flex items-center justify-center flex-col">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Shop by Category</h1>
        <div className="flex items-center text-sm text-gray-600">
          <Link to="/home" className="flex items-center hover:text-primary transition-colors">
            <FiHome className="mr-1" /> Home
          </Link>
          <FiChevronRight className="mx-2" />
          <span className="text-gray-800 font-medium">{currentCategoryName}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center mb-6">
                <FiFilter className="text-primary mr-2" />
                <h2 className="text-xl font-bold text-gray-800">Filters</h2>
              </div>

              <div className="mb-8">
                <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  id="category-select"
                  onChange={(e) => setSelectedDropdownCategory(e.target.value)}
                  value={selectedDropdownCategory}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                >
                  {categories.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-4">Price Range</h3>
                <div className="flex items-center gap-3 mb-4">
                  <input id="min-price" value={fromMoney} onChange={(e) => setFromMoney(e.target.value)} type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Min" min="0"/>
                  <span className="text-gray-400">to</span>
                  <input id="max-price" value={toMoney} onChange={(e) => setToMoney(e.target.value)} type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Max" min="0"/>
                </div>
                <button
                  onClick={handleApplyFilters}
                  className="w-full bg-primary hover:bg-primary-dark text-white bg-blue-900 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 animate-pulse"><div className="h-48 bg-gray-200"></div><div className="p-4"><div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div><div className="h-4 bg-gray-200 rounded w-1/2"></div></div></div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">{currentCategoryName}</h2>
                  <p className="text-sm text-gray-500">{products.length} items</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {products.map((item) => (
                    <Card product={item} key={item.id} />
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or select a different category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;