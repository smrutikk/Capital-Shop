// src/utils/imageUtils.js (New File)

// A reliable placeholder image service
const FALLBACK_IMAGE = "https://via.placeholder.com/640x480.png?text=Image+Not+Available";

/**
 * Cleans and validates image URLs from the API.
 * @param {string[] | string} images - The 'images' property from an API product.
 * @returns {string[]} An array containing at least one valid image URL.
 */
export const getValidImageUrls = (images) => {
  let imageUrls = [];

  // The API sometimes returns a JSON string, not an actual array. We need to parse it.
  if (typeof images === 'string') {
    try {
      // A simple check to see if it's a JSON array-like string
      if (images.startsWith('[') && images.endsWith(']')) {
        // The string might contain invalid JSON like ["https:"//..."], so we clean it.
        const cleanedString = images.replace(/\\/g, '').replace(/"/g, '');
        const urlsInString = cleanedString.substring(1, cleanedString.length - 1).split(',');
        imageUrls = urlsInString;
      } else {
        // It's just a single URL string
        imageUrls = [images];
      }
    } catch (e) {
      // If parsing fails, we have no valid images
      imageUrls = [];
    }
  } else if (Array.isArray(images)) {
    imageUrls = images;
  }

  const validUrls = imageUrls
    // 1. Ensure the item is a non-empty string
    .filter(url => typeof url === 'string' && url.trim() !== '')
    // 2. Check for a valid URL format
    .filter(url => url.startsWith('http://') || url.startsWith('https://'))
    // 3. MOST IMPORTANT: Filter out the dead service
    .filter(url => !url.includes('placeimg.com'));

  // If after all filtering, we have no images, return the fallback.
  if (validUrls.length === 0) {
    return [FALLBACK_IMAGE];
  }

  return validUrls;
};