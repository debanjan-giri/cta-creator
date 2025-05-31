/**
 * Cleans data by removing null, undefined, and empty string values
 * Also handles special cases for HTML content and very long text
 * @param {Object} data - The data object to clean
 * @returns {Object} - The cleaned data object
 */
const cleanData = (data) => {
  return Object.fromEntries(
    Object.entries(data).filter(([key, val]) => {
      // Keep non-string values that are not null or undefined
      if (typeof val !== "string") {
        return val !== null && val !== undefined;
      }

      // Special handling for HTML content - keep it even if it looks empty
      if (val.includes("<") && val.includes(">")) {
        return true;
      }

      // For regular strings, remove if empty after trimming
      return val.trim() !== "";
    })
  );
};

export default cleanData;
