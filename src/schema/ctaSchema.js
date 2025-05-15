/**
 * JSON Schema for Dynamic CTA Creator
 * This file defines the schema for creating dynamic Call-To-Action (CTA) cards
 */

const ctaSchema = {
  title: {
    content: {
      type: "string",
      description: "The main title text content (HTML supported)"
    },
    variation: {
      type: "string",
      enum: ["H1", "H2", "H3", "H4", "H5", "H6", "sub_header"],
      description: "Heading style/size"
    },
    opacity: {
      type: "string",
      enum: ["text-opacity-10", "text-opacity-25", "text-opacity-50", "text-opacity-75", "text-opacity-100"],
      description: "Text opacity level"
    },
    color: {
      type: "string",
      description: "Text color (Bootstrap variants or custom hex)"
    },
    startEndorment: {
      type: "string",
      description: "Icon/image to display before the title"
    },
    endEndorment: {
      type: "string",
      description: "Icon/image to display after the title"
    },
    extraClass: {
      type: "string",
      description: "Additional Bootstrap classes for custom styling"
    }
  },
  
  imageObject: [{
    position: {
      type: "string",
      enum: ["top-right", "top-left", "bottom-left", "bottom-right", "left", "right", "top", "top_center", "bottom"],
      description: "Image position relative to content"
    },
    url: {
      type: "string",
      description: "Image URL or SVG code"
    },
    size: {
      type: "string",
      enum: ["W-25", "W-50", "W-75", "W-100", "H-25", "H-50", "H-75", "H-100"],
      description: "Image dimensions (width/height)"
    },
    alt: {
      type: "string",
      description: "Alternative text for accessibility"
    },
    extraClass: {
      type: "string",
      description: "Additional Bootstrap classes for custom styling"
    }
  }],
  
  paragraph: {
    content: {
      type: "string",
      description: "Paragraph text content (HTML supported)"
    },
    opacity: {
      type: "string",
      enum: ["text-opacity-10", "text-opacity-25", "text-opacity-50", "text-opacity-75", "text-opacity-100"],
      description: "Text opacity level"
    },
    color: {
      type: "string",
      description: "Text color (Bootstrap variants or custom hex)"
    },
    extraClass: {
      type: "string",
      description: "Additional Bootstrap classes for custom styling"
    }
  },
  
  button: [{
    variation: {
      type: "string",
      description: "Button style/color (Bootstrap variants or custom hex)"
    },
    btnTextColor: {
      type: "string",
      description: "Text color when using custom hex for variation"
    },
    text: {
      type: "string",
      description: "Button text content"
    },
    url: {
      type: "string",
      description: "Action URL for the button"
    },
    action: {
      type: "string",
      enum: ["internal_redirect", "external_redirect"],
      description: "Redirect behavior"
    },
    size: {
      type: "string",
      description: "Button size (sm, md, lg, w-100, or pixel value)"
    },
    position: {
      type: "string",
      enum: ["left", "right", "center"],
      description: "Button alignment"
    },
    startEndorment: {
      type: "string",
      description: "Icon/image before button text"
    },
    endEndorment: {
      type: "string",
      description: "Icon/image after button text"
    },
    extraClass: {
      type: "string",
      description: "Additional Bootstrap classes for custom styling"
    }
  }],
  
  cardStyle: {
    cardbgImage: {
      type: "string",
      description: "Background image URL"
    },
    cardbgcolor: {
      type: "string",
      description: "Background color (Bootstrap variants or custom hex)"
    },
    color: {
      type: "string",
      description: "Text color (Bootstrap variants or custom hex)"
    },
    cardbgopacity: {
      type: "string",
      description: "Background opacity (value between 0.00 and 1)"
    },
    border: {
      type: "string",
      enum: ["border", "border-top", "border-end", "border-bottom", "border-start"],
      description: "Border style"
    },
    borderColor: {
      type: "string",
      enum: ["border-white", "border-dark", "border-light", "border-info", "border-warning", "border-danger", "border-success", "border-secondary", "border-primary"],
      description: "Border color"
    },
    borderRadius: {
      type: "string",
      enum: ["rounded", "rounded-start", "rounded-end", "rounded-top", "rounded-bottom"],
      description: "Border radius style"
    },
    borderOpacity: {
      type: "string",
      enum: ["border-opacity-10", "border-opacity-25", "border-opacity-50", "border-opacity-75", "border-opacity-100"],
      description: "Border opacity"
    },
    borderWidth: {
      type: "string",
      enum: ["border-0", "border-1", "border-2", "border-3"],
      description: "Border width"
    },
    extraClass: {
      type: "string",
      description: "Additional Bootstrap classes for custom styling"
    }
  },
  
  tag: {
    position: {
      type: "string",
      enum: ["left", "right"],
      description: "Tag position"
    },
    text: {
      type: "string",
      description: "Tag text content"
    },
    bgColor: {
      type: "string",
      description: "Background color (Bootstrap variants or custom hex)"
    },
    textColor: {
      type: "string",
      description: "Text color (Bootstrap variants or custom hex)"
    },
    borderRadius: {
      type: "string",
      enum: ["rounded-top", "rounded-end", "rounded-bottom", "rounded-start", "rounded-circle", "rounded-pill"],
      description: "Border radius style"
    },
    bgOpacity: {
      type: "string",
      enum: ["bg-opacity-10", "bg-opacity-25", "bg-opacity-50", "bg-opacity-75", "bg-opacity-100"],
      description: "Background opacity"
    },
    extraClass: {
      type: "string",
      description: "Additional Bootstrap classes for custom styling"
    }
  },
  
  formJson: [{
    label: {
      type: "string",
      description: "Form field label"
    },
    field_name: {
      type: "string",
      description: "Form field name/identifier"
    },
    type: {
      type: "string",
      enum: ["text", "number", "textarea", "radio", "checkbox", "dropdown"],
      description: "Input type"
    },
    is_mandatory: {
      type: "string",
      enum: ["0", "1"],
      description: "Whether field is required (0 = not required, 1 = required)"
    },
    options: {
      type: "string",
      description: "Comma-separated options for radio, checkbox, dropdown fields"
    },
    extraClass: {
      type: "string",
      description: "Additional Bootstrap classes for custom styling"
    }
  }]
};

export default ctaSchema;
