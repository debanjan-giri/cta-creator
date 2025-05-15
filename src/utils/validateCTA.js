import ctaSchema from '../schema/ctaSchema';

/**
 * Validates a CTA object against the schema
 * @param {Object} ctaData - The CTA data to validate
 * @returns {Object} - Object with isValid flag and any errors
 */
const validateCTA = (ctaData) => {
  const errors = {};
  let isValid = true;

  // Helper function to validate a field against its schema
  const validateField = (fieldValue, fieldSchema, fieldName) => {
    if (!fieldSchema) return true;

    // Check if field is an array
    if (Array.isArray(fieldSchema)) {
      if (!Array.isArray(fieldValue)) {
        errors[fieldName] = `${fieldName} should be an array`;
        return false;
      }
      
      // Validate each item in the array
      return fieldValue.every((item, index) => {
        const itemErrors = {};
        let itemValid = true;
        
        // Validate each property of the item
        Object.keys(fieldSchema[0]).forEach(propName => {
          const propSchema = fieldSchema[0][propName];
          const propValue = item[propName];
          
          if (propSchema.enum && propValue && !propSchema.enum.includes(propValue)) {
            itemErrors[propName] = `${propName} must be one of: ${propSchema.enum.join(', ')}`;
            itemValid = false;
          }
        });
        
        if (!itemValid) {
          if (!errors[fieldName]) errors[fieldName] = [];
          errors[fieldName][index] = itemErrors;
        }
        
        return itemValid;
      });
    }
    
    // Check if field is an object
    if (typeof fieldSchema === 'object' && !Array.isArray(fieldSchema)) {
      if (!fieldValue || typeof fieldValue !== 'object') {
        errors[fieldName] = `${fieldName} should be an object`;
        return false;
      }
      
      let objectValid = true;
      
      // Validate each property of the object
      Object.keys(fieldSchema).forEach(propName => {
        const propSchema = fieldSchema[propName];
        const propValue = fieldValue[propName];
        
        if (propSchema.enum && propValue && !propSchema.enum.includes(propValue)) {
          if (!errors[fieldName]) errors[fieldName] = {};
          errors[fieldName][propName] = `${propName} must be one of: ${propSchema.enum.join(', ')}`;
          objectValid = false;
        }
      });
      
      return objectValid;
    }
    
    return true;
  };

  // Validate each field in the CTA data
  Object.keys(ctaSchema).forEach(fieldName => {
    const fieldSchema = ctaSchema[fieldName];
    const fieldValue = ctaData[fieldName];
    
    if (!validateField(fieldValue, fieldSchema, fieldName)) {
      isValid = false;
    }
  });

  return {
    isValid,
    errors: Object.keys(errors).length > 0 ? errors : null
  };
};

export default validateCTA;
