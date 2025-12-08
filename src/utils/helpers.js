/**
 * Converts a string into a URL-friendly slug.
 * Example: "Data Scientist" -> "data-scientist"
 * @param {string} text - The string to convert.
 * @returns {string} - The slugified string.
 */
export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, ''); // Remove all non-word chars except -
};

/**
 * Capitalizes the first letter of a string.
 * Example: "hello" -> "Hello"
 * @param {string} text - The string to capitalize.
 * @returns {string} - The capitalized string.
 */
export const capitalizeFirstLetter = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Debounces a function, delaying its execution until after a certain time has passed
 * since it was last called. Useful for search input fields.
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The delay in milliseconds.
 * @returns {Function} - The debounced function.
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};