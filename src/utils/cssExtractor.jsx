// const spacingMap = {
//   0: "0px",
//   1: "0.25rem", // 4px
//   2: "0.5rem", // 8px
//   3: "1rem", // 16px
//   4: "1.5rem", // 24px
//   5: "3rem", // 48px
// };

// const fontSizeMap = {
//   "fs-1": "2.5rem",
//   "fs-2": "2rem",
//   "fs-3": "1.75rem",
//   "fs-4": "1.5rem",
//   "fs-5": "1.25rem",
//   "fs-6": "1rem",
// };

// const fontWeightMap = {
//   "fw-light": "300",
//   "fw-lighter": "200",
//   "fw-normal": "400",
//   "fw-medium": "500",
//   "fw-semibold": "600",
//   "fw-bold": "700",
//   "fw-bolder": "800",
// };

// const opacityMap = {
//   "opacity-0": "0",
//   "opacity-25": "0.25",
//   "opacity-50": "0.5",
//   "opacity-75": "0.75",
//   "opacity-100": "1",
//   "bg-opacity-10": "0.1",
//   "bg-opacity-25": "0.25",
//   "bg-opacity-50": "0.5",
//   "bg-opacity-75": "0.75",
//   "text-opacity-25": "0.25",
//   "text-opacity-50": "0.5",
//   "text-opacity-75": "0.75",
//   "text-opacity-100": "1",
// };

// const textAlignMap = {
//   "text-start": "left",
//   "text-end": "right",
//   "text-center": "center",
//   "text-justify": "justify",
// };

// const displayMap = {
//   "d-none": "none",
//   "d-block": "block",
//   "d-inline": "inline",
//   "d-inline-block": "inline-block",
//   "d-flex": "flex",
//   "d-inline-flex": "inline-flex",
//   "d-grid": "grid",
//   "d-table": "table",
//   "d-table-cell": "table-cell",
//   "d-table-row": "table-row",
// };

// const flexDirectionMap = {
//   "flex-row": "row",
//   "flex-row-reverse": "row-reverse",
//   "flex-column": "column",
//   "flex-column-reverse": "column-reverse",
// };

// const justifyContentMap = {
//   "justify-content-start": "flex-start",
//   "justify-content-end": "flex-end",
//   "justify-content-center": "center",
//   "justify-content-between": "space-between",
//   "justify-content-around": "space-around",
//   "justify-content-evenly": "space-evenly",
// };

// const alignItemsMap = {
//   "align-items-start": "flex-start",
//   "align-items-end": "flex-end",
//   "align-items-center": "center",
//   "align-items-baseline": "baseline",
//   "align-items-stretch": "stretch",
// };

// const flexWrapMap = {
//   "flex-wrap": "wrap",
//   "flex-nowrap": "nowrap",
//   "flex-wrap-reverse": "wrap-reverse",
// };

// const positionMap = {
//   "position-static": "static",
//   "position-relative": "relative",
//   "position-absolute": "absolute",
//   "position-fixed": "fixed",
//   "position-sticky": "sticky",
// };

// const zIndexMap = {
//   "z-n1": "-1",
//   "z-0": "0",
//   "z-1": "1",
//   "z-2": "2",
//   "z-3": "3",
// };

// const overflowMap = {
//   "overflow-auto": "auto",
//   "overflow-hidden": "hidden",
//   "overflow-visible": "visible",
//   "overflow-scroll": "scroll",
// };

// const objectFitMap = {
//   "object-fit-contain": "contain",
//   "object-fit-cover": "cover",
//   "object-fit-fill": "fill",
//   "object-fit-scale": "scale-down",
//   "object-fit-none": "none",
// };

// const colorMap = {
//   // Bootstrap color variables
//   primary: "#0d6efd",
//   secondary: "#6c757d",
//   success: "#198754",
//   info: "#0dcaf0",
//   warning: "#ffc107",
//   danger: "#dc3545",
//   light: "#f8f9fa",
//   dark: "#212529",
//   white: "#ffffff",
//   black: "#000000",
//   muted: "#6c757d",
// };

// const roundedMap = {
//   rounded: "0.375rem",
//   "rounded-0": "0",
//   "rounded-1": "0.25rem",
//   "rounded-2": "0.375rem",
//   "rounded-3": "0.5rem",
//   "rounded-4": "1rem",
//   "rounded-5": "2rem",
//   "rounded-circle": "50%",
//   "rounded-pill": "50rem",
// };

// const gapMap = {
//   "gap-0": "0",
//   "gap-1": "0.25rem",
//   "gap-2": "0.5rem",
//   "gap-3": "1rem",
//   "gap-4": "1.5rem",
//   "gap-5": "3rem",
// };

// export const utils = (classNames = "", styleObj = {}) => {
//   const style = {
//     fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
//     ...styleObj,
//   };


//   if (!classNames) return style;

//   const classes = classNames.split(" ").filter((cls) => cls.trim());

//   classes.forEach((cls) => {
//     if (!cls) return;
//     let match = cls.match(/^([mp])([trblxyse]?)-([0-5])$/);
//     if (match) {
//       const [, type, dir, size] = match;
//       const value = spacingMap[size];
//       const prefix = type === "p" ? "padding" : "margin";

//       const directions = {
//         t: ["Top"],
//         r: ["Right"],
//         b: ["Bottom"],
//         l: ["Left"],
//         x: ["Left", "Right"],
//         y: ["Top", "Bottom"],
//         s: ["Left"], // start
//         e: ["Right"], // end
//         "": ["Top", "Right", "Bottom", "Left"],
//       };

//       (directions[dir] || directions[""]).forEach((d) => {
//         style[`${prefix}${d}`] = value;
//       });
//       return;
//     }

//     // Font size
//     if (fontSizeMap[cls]) {
//       style.fontSize = fontSizeMap[cls];
//       return;
//     }

//     // Font weight
//     if (fontWeightMap[cls]) {
//       style.fontWeight = fontWeightMap[cls];
//       return;
//     }

//     // Text alignment
//     if (textAlignMap[cls]) {
//       style.textAlign = textAlignMap[cls];
//       return;
//     }

//     // Display
//     if (displayMap[cls]) {
//       style.display = displayMap[cls];
//       return;
//     }

//     // Flex direction
//     if (flexDirectionMap[cls]) {
//       style.flexDirection = flexDirectionMap[cls];
//       return;
//     }

//     // Justify content
//     if (justifyContentMap[cls]) {
//       style.justifyContent = justifyContentMap[cls];
//       return;
//     }

//     // Align items
//     if (alignItemsMap[cls]) {
//       style.alignItems = alignItemsMap[cls];
//       return;
//     }

//     // Flex wrap
//     if (flexWrapMap[cls]) {
//       style.flexWrap = flexWrapMap[cls];
//       return;
//     }

//     // Flex grow/shrink
//     if (cls === "flex-grow-0") style.flexGrow = "0";
//     if (cls === "flex-grow-1") style.flexGrow = "1";
//     if (cls === "flex-shrink-0") style.flexShrink = "0";
//     if (cls === "flex-shrink-1") style.flexShrink = "1";

//     // Position
//     if (positionMap[cls]) {
//       style.position = positionMap[cls];
//       return;
//     }

//     // Position offsets
//     match = cls.match(/^(top|bottom|start|end)-([0-5]|50|100)$/);
//     if (match) {
//       const [, dir, val] = match;
//       let value =
//         val === "50" ? "50%" : val === "100" ? "100%" : spacingMap[val];
//       if (dir === "start") style.left = value;
//       else if (dir === "end") style.right = value;
//       else style[dir] = value;
//       return;
//     }

//     // Z-index
//     if (zIndexMap[cls]) {
//       style.zIndex = zIndexMap[cls];
//       return;
//     }

//     // Overflow
//     if (overflowMap[cls]) {
//       style.overflow = overflowMap[cls];
//       return;
//     }

//     // Object fit
//     if (objectFitMap[cls]) {
//       style.objectFit = objectFitMap[cls];
//       return;
//     }

//     // Width & height
//     match = cls.match(/^(w|h|mw|mh)-(\d{1,3}|auto)$/);
//     if (match) {
//       const [, dim, val] = match;
//       const property = {
//         w: "width",
//         h: "height",
//         mw: "maxWidth",
//         mh: "maxHeight",
//       }[dim];

//       if (val === "auto") {
//         style[property] = "auto";
//       } else {
//         style[property] = `${val}%`;
//       }
//       return;
//     }

//     // Min/Max width/height with specific values
//     if (cls === "mw-25") style.maxWidth = "25%";
//     if (cls === "mw-50") style.maxWidth = "50%";
//     if (cls === "mw-75") style.maxWidth = "75%";
//     if (cls === "mw-100") style.maxWidth = "100%";
//     if (cls === "w-auto") style.width = "auto";

//     // Gap
//     if (gapMap[cls]) {
//       style.gap = gapMap[cls];
//       return;
//     }

//     // Opacity
//     if (opacityMap[cls]) {
//       if (cls.startsWith("bg-opacity-")) {
//         style["--bs-bg-opacity"] = opacityMap[cls];
//       } else if (cls.startsWith("text-opacity-")) {
//         style["--bs-text-opacity"] = opacityMap[cls];
//       } else {
//         style.opacity = opacityMap[cls];
//       }
//       return;
//     }

//     // Background color
//     if (cls.startsWith("bg-")) {
//       const colorKey = cls.replace("bg-", "");
//       if (colorMap[colorKey]) {
//         style.backgroundColor = colorMap[colorKey];
//       }
//       return;
//     }

//     // Text color
//     if (cls.startsWith("text-")) {
//       const colorKey = cls.replace("text-", "");
//       if (colorMap[colorKey]) {
//         style.color = colorMap[colorKey];
//       }
//       return;
//     }

//     // Border
//     if (cls === "border") {
//       style.border = "1px solid #dee2e6";
//       return;
//     }

//     // Border color
//     if (cls.startsWith("border-") && colorMap[cls.replace("border-", "")]) {
//       style.borderColor = colorMap[cls.replace("border-", "")];
//       return;
//     }

//     // Border width
//     match = cls.match(/^border-(\d)$/);
//     if (match) {
//       const width = match[1] === "0" ? "0" : `${match[1]}px`;
//       style.borderWidth = width;
//       return;
//     }

//     // Border radius
//     if (roundedMap[cls]) {
//       style.borderRadius = roundedMap[cls];
//       return;
//     }

//     // Text utilities
//     if (cls === "text-nowrap") {
//       style.whiteSpace = "nowrap";
//       return;
//     }

//     if (cls === "text-wrap") {
//       style.whiteSpace = "normal";
//       return;
//     }

//     if (cls === "text-truncate") {
//       style.overflow = "hidden";
//       style.textOverflow = "ellipsis";
//       style.whiteSpace = "nowrap";
//       return;
//     }

//     // Button classes
//     if (cls.startsWith("btn-")) {
//       const variant = cls.replace("btn-", "");
//       if (colorMap[variant]) {
//         if (variant === "light") {
//           style.backgroundColor = colorMap[variant];
//           style.color = colorMap.dark;
//           style.borderColor = "#dee2e6";
//         } else if (variant === "dark") {
//           style.backgroundColor = colorMap[variant];
//           style.color = colorMap.white;
//           style.borderColor = colorMap[variant];
//         } else {
//           style.backgroundColor = colorMap[variant];
//           style.color = colorMap.white;
//           style.borderColor = colorMap[variant];
//         }
//         style.padding = "0.375rem 0.75rem";
//         style.borderRadius = "0.375rem";
//         style.border = "1px solid transparent";
//         style.cursor = "pointer";
//         style.textDecoration = "none";
//         style.display = "inline-block";
//         style.textAlign = "center";
//         style.verticalAlign = "middle";
//         style.userSelect = "none";
//         style.lineHeight = "1.5";
//         style.fontWeight = "400";
//       }
//       return;
//     }

//     if (cls === "btn") {
//       style.padding = "0.375rem 0.75rem";
//       style.borderRadius = "0.375rem";
//       style.border = "1px solid transparent";
//       style.cursor = "pointer";
//       style.textDecoration = "none";
//       style.display = "inline-block";
//       style.textAlign = "center";
//       style.verticalAlign = "middle";
//       style.userSelect = "none";
//       style.lineHeight = "1.5";
//       style.fontWeight = "400";
//       return;
//     }

//     // Shadow utilities
//     if (cls === "shadow-sm")
//       style.boxShadow = "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)";
//     if (cls === "shadow") style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
//     if (cls === "shadow-lg")
//       style.boxShadow = "0 1rem 3rem rgba(0, 0, 0, 0.175)";
//     if (cls === "shadow-none") style.boxShadow = "none";

//     // Cursor
//     if (cls === "cursor-pointer") style.cursor = "pointer";

//     // User select
//     if (cls === "user-select-none") style.userSelect = "none";

//     // Vertical align
//     if (cls === "align-middle") style.verticalAlign = "middle";
//     if (cls === "align-top") style.verticalAlign = "top";
//     if (cls === "align-bottom") style.verticalAlign = "bottom";

//     // Line height
//     if (cls === "lh-1") style.lineHeight = "1";
//     if (cls === "lh-sm") style.lineHeight = "1.25";
//     if (cls === "lh-base") style.lineHeight = "1.5";
//     if (cls === "lh-lg") style.lineHeight = "1.75";

//     // Aspect ratio
//     if (cls === "ratio-1x1") style.aspectRatio = "1/1";
//     if (cls === "ratio-4x3") style.aspectRatio = "4/3";
//     if (cls === "ratio-16x9") style.aspectRatio = "16/9";
//     if (cls === "ratio-21x9") style.aspectRatio = "21/9";
//   });

//   return style;
// };

const MAPS = {
  spacing: {
    0: "0px",     
    1: "0.25rem",
    2: "0.5rem",
    3: "1rem",
    4: "1.5rem",
    5: "3rem"
  },

  fontSize: {
    "fs-1": "2.5rem", "fs-2": "2rem", "fs-3": "1.75rem",
    "fs-4": "1.5rem", "fs-5": "1.25rem", "fs-6": "1rem"
  },

  fontWeight: {
    "fw-light": "300", "fw-lighter": "200", "fw-normal": "400",
    "fw-medium": "500", "fw-semibold": "600", "fw-bold": "700", "fw-bolder": "800"
  },

  opacity: {
    "opacity-0": "0", "opacity-25": "0.25", "opacity-50": "0.5", "opacity-75": "0.75", "opacity-100": "1",
    "bg-opacity-10": "0.1", "bg-opacity-25": "0.25", "bg-opacity-50": "0.5", "bg-opacity-75": "0.75", "bg-opacity-85": "0.85", "bg-opacity-100": "1",
    "text-opacity-25": "0.25", "text-opacity-50": "0.5", "text-opacity-75": "0.75", "text-opacity-100": "1"
  },

  textAlign: {
    "text-start": "left", "text-end": "right", "text-center": "center", "text-justify": "justify"
  },

  display: {
    "d-none": "none", "d-block": "block", "d-inline": "inline", "d-inline-block": "inline-block",
    "d-flex": "flex", "d-inline-flex": "inline-flex", "d-grid": "grid", "d-table": "table",
    "d-table-cell": "table-cell", "d-table-row": "table-row"
  },

  flexDirection: {
    "flex-row": "row", "flex-row-reverse": "row-reverse",
    "flex-column": "column", "flex-column-reverse": "column-reverse"
  },

  justifyContent: {
    "justify-content-start": "flex-start", "justify-content-end": "flex-end", "justify-content-center": "center",
    "justify-content-between": "space-between", "justify-content-around": "space-around", "justify-content-evenly": "space-evenly"
  },

  alignItems: {
    "align-items-start": "flex-start", "align-items-end": "flex-end", "align-items-center": "center",
    "align-items-baseline": "baseline", "align-items-stretch": "stretch"
  },

  flexWrap: {
    "flex-wrap": "wrap", "flex-nowrap": "nowrap", "flex-wrap-reverse": "wrap-reverse"
  },

  position: {
    "position-static": "static", "position-relative": "relative", "position-absolute": "absolute",
    "position-fixed": "fixed", "position-sticky": "sticky"
  },

  zIndex: {
    "z-n1": "-1", "z-0": "0", "z-1": "1", "z-2": "2", "z-3": "3", "z-4": "4", "z-5": "5"
  },

  overflow: {
    "overflow-auto": "auto", "overflow-hidden": "hidden", "overflow-visible": "visible", "overflow-scroll": "scroll",
    "overflow-x-auto": "auto", "overflow-x-hidden": "hidden", "overflow-x-visible": "visible", "overflow-x-scroll": "scroll",
    "overflow-y-auto": "auto", "overflow-y-hidden": "hidden", "overflow-y-visible": "visible", "overflow-y-scroll": "scroll"
  },

  objectFit: {
    "object-fit-contain": "contain", "object-fit-cover": "cover", "object-fit-fill": "fill",
    "object-fit-scale": "scale-down", "object-fit-none": "none"
  },

  colors: {
    primary: "#0d6efd", secondary: "#6c757d", success: "#198754", info: "#0dcaf0",
    warning: "#ffc107", danger: "#dc3545", light: "#f8f9fa", dark: "#212529",
    white: "#ffffff", black: "#000000", muted: "#6c757d", transparent: "transparent"
  },

  rounded: {
    rounded: "0.375rem", "rounded-0": "0", "rounded-1": "0.25rem", "rounded-2": "0.375rem",
    "rounded-3": "0.5rem", "rounded-4": "1rem", "rounded-5": "2rem",
    "rounded-circle": "50%", "rounded-pill": "50rem",
    "rounded-top": "0.375rem 0.375rem 0 0", "rounded-bottom": "0 0 0.375rem 0.375rem",
    "rounded-start": "0.375rem 0 0 0.375rem", "rounded-end": "0 0.375rem 0.375rem 0"
  },

  gap: {
    "gap-0": "0", "gap-1": "0.25rem", "gap-2": "0.5rem", "gap-3": "1rem", "gap-4": "1.5rem", "gap-5": "3rem",
    "row-gap-0": "0", "row-gap-1": "0.25rem", "row-gap-2": "0.5rem", "row-gap-3": "1rem", "row-gap-4": "1.5rem", "row-gap-5": "3rem",
    "column-gap-0": "0", "column-gap-1": "0.25rem", "column-gap-2": "0.5rem", "column-gap-3": "1rem", "column-gap-4": "1.5rem", "column-gap-5": "3rem"
  }
};

const PATTERNS = {
  spacing: /^([mp])([trblxyse]?)-([0-5])$/,
  position: /^(top|bottom|start|end)-([0-5]|50|100)$/,
  dimensions: /^(w|h|mw|mh|min-vw|min-vh|vw|vh)-(\d{1,3}|auto)$/,
  borderWidth: /^border-([0-5])$/
};

const SPACING_DIRECTIONS = {
  t: ["Top"], r: ["Right"], b: ["Bottom"], l: ["Left"],
  x: ["Left", "Right"], y: ["Top", "Bottom"],
  s: ["Left"], e: ["Right"], "": ["Top", "Right", "Bottom", "Left"]
};

const DIMENSION_PROPS = {
  w: "width", h: "height", mw: "maxWidth", mh: "maxHeight",
  "min-vw": "minWidth", "min-vh": "minHeight", vw: "width", vh: "height"
};

const applySpacing = (style, type, dir, size) => {
  const value = MAPS.spacing[size];
  const prefix = type === "p" ? "padding" : "margin";
  const directions = SPACING_DIRECTIONS[dir] || SPACING_DIRECTIONS[""];

  directions.forEach(d => {
    style[`${prefix}${d}`] = value;
  });
};

const applyDimensions = (style, cls, dim, val) => {
  const property = DIMENSION_PROPS[dim];

  if (val === "auto") {
    style[property] = "auto";
  } else if (dim === "vw") {
    style[property] = `${val}vw`;
  } else if (dim === "vh") {
    style[property] = `${val}vh`;
  } else {
    style[property] = `${val}%`;
  }
};

const applyButton = (style, variant) => {
  const baseButton = {
    padding: "0.375rem 0.75rem",
    borderRadius: "0.375rem",
    border: "1px solid transparent",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "middle",
    userSelect: "none",
    lineHeight: "1.5",
    fontWeight: "400"
  };

  Object.assign(style, baseButton);

  if (variant && MAPS.colors[variant]) {
    const color = MAPS.colors[variant];
    if (variant === "light") {
      style.backgroundColor = color;
      style.color = MAPS.colors.dark;
      style.borderColor = "#dee2e6";
    } else if (variant === "dark") {
      style.backgroundColor = color;
      style.color = MAPS.colors.white;
      style.borderColor = color;
    } else {
      style.backgroundColor = color;
      style.color = MAPS.colors.white;
      style.borderColor = color;
    }
  }
};

const SINGLE_PROPS = {
  "flex-grow-0": { flexGrow: "0" },
  "flex-grow-1": { flexGrow: "1" },
  "flex-shrink-0": { flexShrink: "0" },
  "flex-shrink-1": { flexShrink: "1" },
  "flex-fill": { flex: "1 1 auto" },

  "mw-25": { maxWidth: "25%" }, "mw-50": { maxWidth: "50%" },
  "mw-75": { maxWidth: "75%" }, "mw-100": { maxWidth: "100%" },
  "w-auto": { width: "auto" }, "h-auto": { height: "auto" },

  // Borders
  "border": { border: "1px solid #dee2e6" },
  "border-top": { borderTop: "1px solid #dee2e6" },
  "border-bottom": { borderBottom: "1px solid #dee2e6" },
  "border-start": { borderLeft: "1px solid #dee2e6" },
  "border-end": { borderRight: "1px solid #dee2e6" },

  // Shadows
  "shadow-sm": { boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)" },
  "shadow": { boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)" },
  "shadow-lg": { boxShadow: "0 1rem 3rem rgba(0, 0, 0, 0.175)" },
  "shadow-none": { boxShadow: "none" },

  // Text utilities
  "text-nowrap": { whiteSpace: "nowrap" },
  "text-wrap": { whiteSpace: "normal" },
  "text-truncate": { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  "text-break": { wordWrap: "break-word", wordBreak: "break-word" },
  "text-decoration-none": { textDecoration: "none" },
  "text-decoration-underline": { textDecoration: "underline" },
  "text-decoration-line-through": { textDecoration: "line-through" },
  "text-lowercase": { textTransform: "lowercase" },
  "text-uppercase": { textTransform: "uppercase" },
  "text-capitalize": { textTransform: "capitalize" },

  // Cursor
  "cursor-pointer": { cursor: "pointer" },

  // User select
  "user-select-none": { userSelect: "none" },
  "user-select-all": { userSelect: "all" },
  "user-select-auto": { userSelect: "auto" },

  // Vertical align
  "align-middle": { verticalAlign: "middle" },
  "align-top": { verticalAlign: "top" },
  "align-bottom": { verticalAlign: "bottom" },
  "align-baseline": { verticalAlign: "baseline" },
  "align-text-top": { verticalAlign: "text-top" },
  "align-text-bottom": { verticalAlign: "text-bottom" },

  // Line height
  "lh-1": { lineHeight: "1" },
  "lh-sm": { lineHeight: "1.25" },
  "lh-base": { lineHeight: "1.5" },
  "lh-lg": { lineHeight: "1.75" },

  // Aspect ratio
  "ratio-1x1": { aspectRatio: "1/1" },
  "ratio-4x3": { aspectRatio: "4/3" },
  "ratio-16x9": { aspectRatio: "16/9" },
  "ratio-21x9": { aspectRatio: "21/9" },

  // Float
  "float-start": { float: "left" },
  "float-end": { float: "right" },
  "float-none": { float: "none" },

  // Visibility
  "visible": { visibility: "visible" },
  "invisible": { visibility: "hidden" },

  // Custom classes
  "tag": {
    padding: "0.25rem 0.5rem",
    fontSize: "0.75rem",
    borderRadius: "0.25rem",
    display: "inline-block"
  },
  "ctaLink": {
    textDecoration: "none",
    border: "none",
    outline: "none"
  },
  "hover": {
    transition: "all 0.2s ease-in-out",
    cursor: "pointer"
  }
};

export const utils = (classNames = "", styleObj = {}) => {
  const style = {
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    ...styleObj
  };

  if (!classNames) return style;

  const classes = classNames.split(" ");

  for (const cls of classes) {
    if (!cls) continue;

    if (SINGLE_PROPS[cls]) {
      Object.assign(style, SINGLE_PROPS[cls]);
      continue;
    }

    if (MAPS.fontSize[cls]) { style.fontSize = MAPS.fontSize[cls]; continue; }
    if (MAPS.fontWeight[cls]) { style.fontWeight = MAPS.fontWeight[cls]; continue; }
    if (MAPS.textAlign[cls]) { style.textAlign = MAPS.textAlign[cls]; continue; }
    if (MAPS.display[cls]) { style.display = MAPS.display[cls]; continue; }
    if (MAPS.flexDirection[cls]) { style.flexDirection = MAPS.flexDirection[cls]; continue; }
    if (MAPS.justifyContent[cls]) { style.justifyContent = MAPS.justifyContent[cls]; continue; }
    if (MAPS.alignItems[cls]) { style.alignItems = MAPS.alignItems[cls]; continue; }
    if (MAPS.flexWrap[cls]) { style.flexWrap = MAPS.flexWrap[cls]; continue; }
    if (MAPS.position[cls]) { style.position = MAPS.position[cls]; continue; }
    if (MAPS.zIndex[cls]) { style.zIndex = MAPS.zIndex[cls]; continue; }
    if (MAPS.objectFit[cls]) { style.objectFit = MAPS.objectFit[cls]; continue; }
    if (MAPS.rounded[cls]) { style.borderRadius = MAPS.rounded[cls]; continue; }

    if (MAPS.overflow[cls]) {
      if (cls.startsWith("overflow-x-")) {
        style.overflowX = MAPS.overflow[cls];
      } else if (cls.startsWith("overflow-y-")) {
        style.overflowY = MAPS.overflow[cls];
      } else {
        style.overflow = MAPS.overflow[cls];
      }
      continue;
    }

    if (MAPS.gap[cls]) {
      if (cls.startsWith("row-gap-")) {
        style.rowGap = MAPS.gap[cls];
      } else if (cls.startsWith("column-gap-")) {
        style.columnGap = MAPS.gap[cls];
      } else {
        style.gap = MAPS.gap[cls];
      }
      continue;
    }

    if (MAPS.opacity[cls]) {
      if (cls.startsWith("bg-opacity-")) {
        style["--bs-bg-opacity"] = MAPS.opacity[cls];
      } else if (cls.startsWith("text-opacity-")) {
        style["--bs-text-opacity"] = MAPS.opacity[cls];
      } else {
        style.opacity = MAPS.opacity[cls];
      }
      continue;
    }

    let match;

    if ((match = cls.match(PATTERNS.spacing))) {
      applySpacing(style, match[1], match[2], match[3]);
      continue;
    }

    // Position offsets
    if ((match = cls.match(PATTERNS.position))) {
      const [, dir, val] = match;
      const value = val === "50" ? "50%" : val === "100" ? "100%" : MAPS.spacing[val];
      if (dir === "start") style.left = value;
      else if (dir === "end") style.right = value;
      else style[dir] = value;
      continue;
    }

    // Width & height
    if ((match = cls.match(PATTERNS.dimensions))) {
      applyDimensions(style, cls, match[1], match[2]);
      continue;
    }

    // Border width
    if ((match = cls.match(PATTERNS.borderWidth))) {
      const borderSize = match[1];
      if (borderSize === "0") {
        style.borderWidth = "0";
      } else {
        style.borderWidth = `${borderSize}px`;
      }
      continue;
    }

    // Background color
    if (cls.startsWith("bg-")) {
      const colorKey = cls.slice(3);
      if (MAPS.colors[colorKey]) {
        style.backgroundColor = MAPS.colors[colorKey];
      }
      continue;
    }

    // Text color
    if (cls.startsWith("text-")) {
      const colorKey = cls.slice(5);
      if (MAPS.colors[colorKey]) {
        style.color = MAPS.colors[colorKey];
      }
      continue;
    }

    // Border color
    if (cls.startsWith("border-") && MAPS.colors[cls.slice(7)]) {
      style.borderColor = MAPS.colors[cls.slice(7)];
      continue;
    }

    // Button variants
    if (cls.startsWith("btn-")) {
      const variant = cls.slice(4);
      applyButton(style, variant);
      continue;
    }

    // Base button
    if (cls === "btn") {
      applyButton(style);
      continue;
    }
  }

  return style;
};