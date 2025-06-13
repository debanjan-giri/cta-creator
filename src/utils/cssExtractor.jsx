// const spacingMap = {
//   0: "0px",
//   1: "4px",
//   2: "8px",
//   3: "16px",
//   4: "24px",
//   5: "48px",
// };

// export const utils = (classNames, styleObj) => {
//   const style = {};

//   classNames.split(" ").forEach((cls) => {
//     if (!cls) return;

//     const match = cls.match(/^([mp])([trblxy]?)-([0-5])$/);
//     if (!match) return;

//     const [, type, direction, size] = match;
//     const value = spacingMap[size];

//     const propMap = {
//       "": ["Top", "Right", "Bottom", "Left"],
//       t: ["Top"],
//       r: ["Right"],
//       b: ["Bottom"],
//       l: ["Left"],
//       x: ["Left", "Right"],
//       y: ["Top", "Bottom"],
//     };

//     const prefix = type === "p" ? "padding" : "margin";
//     const dirs = propMap[direction];

//     dirs.forEach((dir) => {
//       const key = dir ? `${prefix}${dir}` : prefix;
//       style[key] = value;
//     });
//   });

//   console.log("stylestylestyle", style);

//   return style;
// };

// const spacingMap = {
//   0: "0px",
//   1: "4px",
//   2: "8px",
//   3: "16px",
//   4: "24px",
//   5: "48px",
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
//   "fw-bold": "700",
//   "fw-bolder": "800",
// };

// const opacityMap = {
//   "opacity-0": "0",
//   "opacity-25": "0.25",
//   "opacity-50": "0.5",
//   "opacity-75": "0.75",
//   "opacity-100": "1",
// };

// const textAlignMap = {
//   "text-start": "left",
//   "text-end": "right",
//   "text-center": "center",
//   "text-justify": "justify",
// };

// export const utils = (classNames = "", styleObj = {}) => {
//   const style = { ...styleObj };

//   classNames.split(" ").forEach((cls) => {
//     if (!cls) return;

//     // Spacing utilities
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
//         s: ["Left"],
//         e: ["Right"],
//         "": ["Top", "Right", "Bottom", "Left"],
//       };
//       directions[dir || ""].forEach((d) => {
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

//     // Text align
//     if (textAlignMap[cls]) {
//       style.textAlign = textAlignMap[cls];
//       return;
//     }

//     // Opacity
//     if (opacityMap[cls]) {
//       style.opacity = opacityMap[cls];
//       return;
//     }

//     // Width & height
//     match = cls.match(/^(w|h)-(\d{1,3}|auto)$/);
//     if (match) {
//       const [, dim, val] = match;
//       if (val === "auto") {
//         style[dim === "w" ? "width" : "height"] = "auto";
//       } else {
//         style[dim === "w" ? "width" : "height"] = `${val}%`;
//       }
//       return;
//     }

//     // Display
//     if (cls.startsWith("d-")) {
//       style.display = cls.replace("d-", "").replace("-", "");
//       return;
//     }

//     // Background color (fallback example)
//     if (cls.startsWith("bg-")) {
//       style.backgroundColor = `var(--bs-${cls})`;
//       return;
//     }

//     // Text color (fallback example)
//     if (cls.startsWith("text-")) {
//       style.color = `var(--bs-${cls})`;
//       return;
//     }

//     // Border
//     if (cls === "border") {
//       style.border = "1px solid #dee2e6";
//       return;
//     }
//     if (cls.startsWith("border-")) {
//       if (cls.startsWith("border-") && !cls.includes("border-0")) {
//         style.borderColor = `var(--bs-${cls})`;
//       }
//     }

//     // Rounded
//     if (cls.startsWith("rounded")) {
//       if (cls === "rounded") style.borderRadius = "0.25rem";
//       else if (cls === "rounded-circle") style.borderRadius = "50%";
//       else if (cls === "rounded-pill") style.borderRadius = "50rem";
//       else {
//         const roundMap = {
//           "rounded-0": "0",
//           "rounded-1": "0.2rem",
//           "rounded-2": "0.25rem",
//           "rounded-3": "0.3rem",
//         };
//         style.borderRadius = roundMap[cls] || style.borderRadius;
//       }
//     }
//   });

//   return style;
// };

// Enhanced Bootstrap utilities to inline CSS converter
const spacingMap = {
  0: "0px",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "1rem", // 16px
  4: "1.5rem", // 24px
  5: "3rem", // 48px
};

const fontSizeMap = {
  "fs-1": "2.5rem",
  "fs-2": "2rem",
  "fs-3": "1.75rem",
  "fs-4": "1.5rem",
  "fs-5": "1.25rem",
  "fs-6": "1rem",
};

const fontWeightMap = {
  "fw-light": "300",
  "fw-lighter": "200",
  "fw-normal": "400",
  "fw-medium": "500",
  "fw-semibold": "600",
  "fw-bold": "700",
  "fw-bolder": "800",
};

const opacityMap = {
  "opacity-0": "0",
  "opacity-25": "0.25",
  "opacity-50": "0.5",
  "opacity-75": "0.75",
  "opacity-100": "1",
  "bg-opacity-10": "0.1",
  "bg-opacity-25": "0.25",
  "bg-opacity-50": "0.5",
  "bg-opacity-75": "0.75",
  "text-opacity-25": "0.25",
  "text-opacity-50": "0.5",
  "text-opacity-75": "0.75",
  "text-opacity-100": "1",
};

const textAlignMap = {
  "text-start": "left",
  "text-end": "right",
  "text-center": "center",
  "text-justify": "justify",
};

const displayMap = {
  "d-none": "none",
  "d-block": "block",
  "d-inline": "inline",
  "d-inline-block": "inline-block",
  "d-flex": "flex",
  "d-inline-flex": "inline-flex",
  "d-grid": "grid",
  "d-table": "table",
  "d-table-cell": "table-cell",
  "d-table-row": "table-row",
};

const flexDirectionMap = {
  "flex-row": "row",
  "flex-row-reverse": "row-reverse",
  "flex-column": "column",
  "flex-column-reverse": "column-reverse",
};

const justifyContentMap = {
  "justify-content-start": "flex-start",
  "justify-content-end": "flex-end",
  "justify-content-center": "center",
  "justify-content-between": "space-between",
  "justify-content-around": "space-around",
  "justify-content-evenly": "space-evenly",
};

const alignItemsMap = {
  "align-items-start": "flex-start",
  "align-items-end": "flex-end",
  "align-items-center": "center",
  "align-items-baseline": "baseline",
  "align-items-stretch": "stretch",
};

const flexWrapMap = {
  "flex-wrap": "wrap",
  "flex-nowrap": "nowrap",
  "flex-wrap-reverse": "wrap-reverse",
};

const flexGrowShrinkMap = {
  "flex-grow-0": "0",
  "flex-grow-1": "1",
  "flex-shrink-0": "0",
  "flex-shrink-1": "1",
};

const positionMap = {
  "position-static": "static",
  "position-relative": "relative",
  "position-absolute": "absolute",
  "position-fixed": "fixed",
  "position-sticky": "sticky",
};

const zIndexMap = {
  "z-n1": "-1",
  "z-0": "0",
  "z-1": "1",
  "z-2": "2",
  "z-3": "3",
};

const overflowMap = {
  "overflow-auto": "auto",
  "overflow-hidden": "hidden",
  "overflow-visible": "visible",
  "overflow-scroll": "scroll",
};

const objectFitMap = {
  "object-fit-contain": "contain",
  "object-fit-cover": "cover",
  "object-fit-fill": "fill",
  "object-fit-scale": "scale-down",
  "object-fit-none": "none",
};

const colorMap = {
  // Bootstrap color variables
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  info: "#0dcaf0",
  warning: "#ffc107",
  danger: "#dc3545",
  light: "#f8f9fa",
  dark: "#212529",
  white: "#ffffff",
  black: "#000000",
  muted: "#6c757d",
};

const roundedMap = {
  rounded: "0.375rem",
  "rounded-0": "0",
  "rounded-1": "0.25rem",
  "rounded-2": "0.375rem",
  "rounded-3": "0.5rem",
  "rounded-4": "1rem",
  "rounded-5": "2rem",
  "rounded-circle": "50%",
  "rounded-pill": "50rem",
};

const gapMap = {
  "gap-0": "0",
  "gap-1": "0.25rem",
  "gap-2": "0.5rem",
  "gap-3": "1rem",
  "gap-4": "1.5rem",
  "gap-5": "3rem",
};

export const utils = (classNames = "", styleObj = {}) => {
  const style = { ...styleObj };

  if (!classNames) return style;

  const classes = classNames.split(" ").filter((cls) => cls.trim());

  classes.forEach((cls) => {
    // Skip empty classes
    if (!cls) return;

    // Spacing utilities (margin/padding)
    let match = cls.match(/^([mp])([trblxyse]?)-([0-5])$/);
    if (match) {
      const [, type, dir, size] = match;
      const value = spacingMap[size];
      const prefix = type === "p" ? "padding" : "margin";

      const directions = {
        t: ["Top"],
        r: ["Right"],
        b: ["Bottom"],
        l: ["Left"],
        x: ["Left", "Right"],
        y: ["Top", "Bottom"],
        s: ["Left"], // start
        e: ["Right"], // end
        "": ["Top", "Right", "Bottom", "Left"],
      };

      (directions[dir] || directions[""]).forEach((d) => {
        style[`${prefix}${d}`] = value;
      });
      return;
    }

    // Font size
    if (fontSizeMap[cls]) {
      style.fontSize = fontSizeMap[cls];
      return;
    }

    // Font weight
    if (fontWeightMap[cls]) {
      style.fontWeight = fontWeightMap[cls];
      return;
    }

    // Text alignment
    if (textAlignMap[cls]) {
      style.textAlign = textAlignMap[cls];
      return;
    }

    // Display
    if (displayMap[cls]) {
      style.display = displayMap[cls];
      return;
    }

    // Flex direction
    if (flexDirectionMap[cls]) {
      style.flexDirection = flexDirectionMap[cls];
      return;
    }

    // Justify content
    if (justifyContentMap[cls]) {
      style.justifyContent = justifyContentMap[cls];
      return;
    }

    // Align items
    if (alignItemsMap[cls]) {
      style.alignItems = alignItemsMap[cls];
      return;
    }

    // Flex wrap
    if (flexWrapMap[cls]) {
      style.flexWrap = flexWrapMap[cls];
      return;
    }

    // Flex grow/shrink
    if (cls === "flex-grow-0") style.flexGrow = "0";
    if (cls === "flex-grow-1") style.flexGrow = "1";
    if (cls === "flex-shrink-0") style.flexShrink = "0";
    if (cls === "flex-shrink-1") style.flexShrink = "1";

    // Position
    if (positionMap[cls]) {
      style.position = positionMap[cls];
      return;
    }

    // Position offsets
    match = cls.match(/^(top|bottom|start|end)-([0-5]|50|100)$/);
    if (match) {
      const [, dir, val] = match;
      let value =
        val === "50" ? "50%" : val === "100" ? "100%" : spacingMap[val];
      if (dir === "start") style.left = value;
      else if (dir === "end") style.right = value;
      else style[dir] = value;
      return;
    }

    // Z-index
    if (zIndexMap[cls]) {
      style.zIndex = zIndexMap[cls];
      return;
    }

    // Overflow
    if (overflowMap[cls]) {
      style.overflow = overflowMap[cls];
      return;
    }

    // Object fit
    if (objectFitMap[cls]) {
      style.objectFit = objectFitMap[cls];
      return;
    }

    // Width & height
    match = cls.match(/^(w|h|mw|mh)-(\d{1,3}|auto)$/);
    if (match) {
      const [, dim, val] = match;
      const property = {
        w: "width",
        h: "height",
        mw: "maxWidth",
        mh: "maxHeight",
      }[dim];

      if (val === "auto") {
        style[property] = "auto";
      } else {
        style[property] = `${val}%`;
      }
      return;
    }

    // Min/Max width/height with specific values
    if (cls === "mw-25") style.maxWidth = "25%";
    if (cls === "mw-50") style.maxWidth = "50%";
    if (cls === "mw-75") style.maxWidth = "75%";
    if (cls === "mw-100") style.maxWidth = "100%";
    if (cls === "w-auto") style.width = "auto";

    // Gap
    if (gapMap[cls]) {
      style.gap = gapMap[cls];
      return;
    }

    // Opacity
    if (opacityMap[cls]) {
      if (cls.startsWith("bg-opacity-")) {
        style["--bs-bg-opacity"] = opacityMap[cls];
      } else if (cls.startsWith("text-opacity-")) {
        style["--bs-text-opacity"] = opacityMap[cls];
      } else {
        style.opacity = opacityMap[cls];
      }
      return;
    }

    // Background color
    if (cls.startsWith("bg-")) {
      const colorKey = cls.replace("bg-", "");
      if (colorMap[colorKey]) {
        style.backgroundColor = colorMap[colorKey];
      }
      return;
    }

    // Text color
    if (cls.startsWith("text-")) {
      const colorKey = cls.replace("text-", "");
      if (colorMap[colorKey]) {
        style.color = colorMap[colorKey];
      }
      return;
    }

    // Border
    if (cls === "border") {
      style.border = "1px solid #dee2e6";
      return;
    }

    // Border color
    if (cls.startsWith("border-") && colorMap[cls.replace("border-", "")]) {
      style.borderColor = colorMap[cls.replace("border-", "")];
      return;
    }

    // Border width
    match = cls.match(/^border-(\d)$/);
    if (match) {
      const width = match[1] === "0" ? "0" : `${match[1]}px`;
      style.borderWidth = width;
      return;
    }

    // Border radius
    if (roundedMap[cls]) {
      style.borderRadius = roundedMap[cls];
      return;
    }

    // Text utilities
    if (cls === "text-nowrap") {
      style.whiteSpace = "nowrap";
      return;
    }

    if (cls === "text-wrap") {
      style.whiteSpace = "normal";
      return;
    }

    if (cls === "text-truncate") {
      style.overflow = "hidden";
      style.textOverflow = "ellipsis";
      style.whiteSpace = "nowrap";
      return;
    }

    // Button classes
    if (cls.startsWith("btn-")) {
      const variant = cls.replace("btn-", "");
      if (colorMap[variant]) {
        if (variant === "light") {
          style.backgroundColor = colorMap[variant];
          style.color = colorMap.dark;
          style.borderColor = "#dee2e6";
        } else if (variant === "dark") {
          style.backgroundColor = colorMap[variant];
          style.color = colorMap.white;
          style.borderColor = colorMap[variant];
        } else {
          style.backgroundColor = colorMap[variant];
          style.color = colorMap.white;
          style.borderColor = colorMap[variant];
        }
        style.padding = "0.375rem 0.75rem";
        style.borderRadius = "0.375rem";
        style.border = "1px solid transparent";
        style.cursor = "pointer";
        style.textDecoration = "none";
        style.display = "inline-block";
        style.textAlign = "center";
        style.verticalAlign = "middle";
        style.userSelect = "none";
        style.lineHeight = "1.5";
        style.fontWeight = "400";
      }
      return;
    }

    if (cls === "btn") {
      style.padding = "0.375rem 0.75rem";
      style.borderRadius = "0.375rem";
      style.border = "1px solid transparent";
      style.cursor = "pointer";
      style.textDecoration = "none";
      style.display = "inline-block";
      style.textAlign = "center";
      style.verticalAlign = "middle";
      style.userSelect = "none";
      style.lineHeight = "1.5";
      style.fontWeight = "400";
      return;
    }

    // Shadow utilities
    if (cls === "shadow-sm")
      style.boxShadow = "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)";
    if (cls === "shadow") style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
    if (cls === "shadow-lg")
      style.boxShadow = "0 1rem 3rem rgba(0, 0, 0, 0.175)";
    if (cls === "shadow-none") style.boxShadow = "none";

    // Cursor
    if (cls === "cursor-pointer") style.cursor = "pointer";

    // User select
    if (cls === "user-select-none") style.userSelect = "none";

    // Vertical align
    if (cls === "align-middle") style.verticalAlign = "middle";
    if (cls === "align-top") style.verticalAlign = "top";
    if (cls === "align-bottom") style.verticalAlign = "bottom";

    // Line height
    if (cls === "lh-1") style.lineHeight = "1";
    if (cls === "lh-sm") style.lineHeight = "1.25";
    if (cls === "lh-base") style.lineHeight = "1.5";
    if (cls === "lh-lg") style.lineHeight = "1.75";

    // Aspect ratio
    if (cls === "ratio-1x1") style.aspectRatio = "1/1";
    if (cls === "ratio-4x3") style.aspectRatio = "4/3";
    if (cls === "ratio-16x9") style.aspectRatio = "16/9";
    if (cls === "ratio-21x9") style.aspectRatio = "21/9";
  });

  return style;
};
