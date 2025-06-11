

import axiosClient from '../apis/axiosClient';

const filterForRealClothes = (products) => {
  const clothingKeywords = [
    'shirt', 't-shirt', 'jeans', 'pants', 'jacket', 'dress',
    'sweater', 'hoodie', 'shorts', 'coat', "men's", 'fashion', 'classic'
  ];
  
  return products?.filter(product => 
    clothingKeywords.some(keyword => product.title.toLowerCase().includes(keyword)
  )) || [];
};

export const getProductsByCategory = async (categoryId) => {
  const numericId = parseInt(categoryId, 10);

  // Unified handling for clothing categories (1, 2, 3)
  if ([1, 2, 3].includes(numericId)) {
    try {
      const allItemsFromApi = await axiosClient.get('categories/1/products');
      return filterForRealClothes(allItemsFromApi);
    } catch (error) {
      console.error("Failed to fetch clothing products:", error);
      return [];
    }
  }
  
  // Kids' Fashion (4) -> maps to API's "Shoes"
  if (numericId === 4) { 
    try {
      return await axiosClient.get('categories/4/products');
    } catch (error) {
      console.error("Failed to fetch shoes/kids products:", error);
      return [];
    }
  }
  
  // Other categories
  try {
    return await axiosClient.get(`categories/${numericId}/products`);
  } catch (error) {
    console.error(`Failed to fetch category ${numericId} products:`, error);
    return [];
  }
};