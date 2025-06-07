import React, { memo, useRef, useState, useEffect } from "react";
import { Accordion, Badge, Button, Card, Stack } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";

import { DynamicCTATemplateCard } from "../CTA/DynamicCTATemplateCard";
import GeminJsonCreator from "../utils/GeminJsonCreator";
import { Copy, IdCardIcon } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

const CardPreview = memo(
  ({ editorData, activeMenu, setActiveMenu, isHover }) => {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Json"); // Default to JSON tab
    const containerRef = useRef(null);
    const [domTree, setDomTree] = useState("");

    useEffect(() => {
      if (containerRef.current) {
        // Get the outer HTML (or you can recursively build a custom tree)
        setDomTree(containerRef.current.outerHTML);
      }
    }, [editorData]);

    console.log("domTree", domTree);

    const handleCopy = (data) => {
      const copyData =
        typeof data === "string" ? data : JSON.stringify(data, null, 2);
      navigator.clipboard.writeText(copyData);
      toast.success(`Copied to clipboard`);
    };

    // Tab configuration
    const tabs = [
      { key: "Json", title: "JSON" },
      { key: "Html", title: "HTML" },
    ];

    const getCurrentTabData = () => {
      return activeTab === "Json" ? editorData : domTree;
    };

    const renderTabContent = () => {
      switch (activeTab) {
        case "Json":
          return (
            <pre
              className="m-0"
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                overflow: "visible",
                maxWidth: "100%",
              }}
            >
              {JSON.stringify(editorData, null, 2)}
            </pre>
          );
        case "Html":
          return (
            <pre
              className="m-0"
              style={{
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                overflow: "visible",
                maxWidth: "100%",
              }}
            >
              {domTree}
            </pre>
          );
        default:
          return null;
      }
    };;

    return (
      <div
        className="p-3 m-3 bg-light rounded shadow-sm"
        style={{ maxHeight: "100%", overflow: "hidden" }}
      >
        {/* Tab Styles */}
        <style>{`
          .tab-btn {
            background: none;
            border: none;
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #6c757d;
            position: relative;
            white-space: nowrap;
            cursor: pointer;
            font-weight: 500;
            transition: color 0.2s ease;
          }
          .tab-btn:hover {
            color: #0d6efd;
          }
          .tab-btn.active {
            color: #0d6efd;
          }
          .tab-btn .underline {
            position: absolute;
            bottom: -2px;
            left: 25%;
            right: 25%;
            height: 3px;
            background-color: #0d6efd;
            border-radius: 2px;
            transition: all 0.2s ease;
          }
          .tab-btn .icon {
            margin-bottom: 0.25rem;
            font-size: 1.1rem;
          }
          /* Hide scrollbar for Chrome, Safari and Opera */
          .output-content::-webkit-scrollbar {
            display: none;
          }
          .output-content {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE 10+ */
          }
          .tab-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
          }
        `}</style>

        <div className="bg-white rounded p-3 fw-semibold mb-3 d-flex justify-content-between align-items-center">
          <span className="m-0">Card Preview</span>

          <Stack direction="horizontal" gap={2}>
            <Badge
              bg="secondary"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? "Hide Output" : "Show Output"}
            </Badge>
          </Stack>
        </div>

        {open ? (
          <div className="bg-white p-4 rounded-3 border shadow-sm">
            {/* Tab Header with Navigation and Copy Button */}
            <div className="tab-header">
              {/* Tab Navigation using Swiper */}
              <Swiper
                slidesPerView="auto"
                spaceBetween={12}
                modules={[Mousewheel]}
                mousewheel={{ forceToAxis: true }}
                grabCursor
                freeMode={true}
                style={{ width: "auto", flex: 1 }}
              >
                {tabs.map((tab) => (
                  <SwiperSlide key={tab.key} style={{ width: "auto" }}>
                    <button
                      className={`tab-btn ${
                        activeTab === tab.key ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tab.key)}
                    >
                      <span>{tab.title}</span>
                      {activeTab === tab.key && <div className="underline" />}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Copy Button */}
              <Button
                variant="primary"
                size="sm"
                className="rounded d-flex align-items-center gap-1 ms-3"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy(getCurrentTabData());
                }}
              >
                Copy <Copy size={15} />
              </Button>
            </div>

            {/* Tab Content */}
            <div
              className="output-content"
              style={{
                maxHeight: "500px",
                overflow: "auto",
                padding: "1rem",
              }}
            >
              {renderTabContent()}
            </div>
          </div>
        ) : (
          <div ref={containerRef}>
            {editorData ? (
              <div className="">
                <DynamicCTATemplateCard
                  isHover={isHover}
                  setActiveMenu={setActiveMenu}
                  {...editorData}
                />
              </div>
            ) : (
              <div className="text-muted fst-italic p-2">
                No card data available
              </div>
            )}
          </div>
        )}

        <ToastContainer position="top-center" autoClose={2000} />
      </div>
    );
  }
);

export default CardPreview;

// import React, { memo, useRef, useState, useEffect } from "react";
// import { Accordion, Badge, Button, Card, Stack } from "react-bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/mousewheel";

// import { DynamicCTATemplateCard } from "../CTA/DynamicCTATemplateCard";
// import GeminJsonCreator from "../utils/GeminJsonCreator";
// import { Copy, IdCardIcon } from "lucide-react";
// import { ToastContainer, toast } from "react-toastify";

// const CardPreview = memo(
//   ({ editorData, activeMenu, setActiveMenu, isHover }) => {
//     const [open, setOpen] = useState(false);
//     const [activeTab, setActiveTab] = useState("Json");
//     const containerRef = useRef(null);
//     const [domTree, setDomTree] = useState("");

//     // Function to extract complete DOM with styles and behavior
//     const extractCompleteDOM = () => {
//       if (!containerRef.current) return "";

//       const element = containerRef.current;

//       // 1. Get all stylesheets content
//       const getAllStyles = () => {
//         let allStyles = "";

//         // Get inline styles and computed styles
//         const getAllComputedStyles = (el) => {
//           const elements = [el, ...el.querySelectorAll("*")];
//           let styles = "";

//           elements.forEach((elem, index) => {
//             const computedStyle = window.getComputedStyle(elem);
//             const className = `elem-${index}`;

//             // Add class to element for targeting
//             if (!elem.classList.contains(className)) {
//               elem.classList.add(className);
//             }

//             let cssRules = `.${className} {\n`;

//             // Important CSS properties to preserve
//             const importantProps = [
//               "display",
//               "position",
//               "top",
//               "left",
//               "right",
//               "bottom",
//               "width",
//               "height",
//               "min-width",
//               "min-height",
//               "max-width",
//               "max-height",
//               "margin",
//               "margin-top",
//               "margin-right",
//               "margin-bottom",
//               "margin-left",
//               "padding",
//               "padding-top",
//               "padding-right",
//               "padding-bottom",
//               "padding-left",
//               "border",
//               "border-width",
//               "border-style",
//               "border-color",
//               "border-radius",
//               "background",
//               "background-color",
//               "background-image",
//               "background-size",
//               "color",
//               "font-family",
//               "font-size",
//               "font-weight",
//               "line-height",
//               "text-align",
//               "text-decoration",
//               "text-transform",
//               "flex",
//               "flex-direction",
//               "justify-content",
//               "align-items",
//               "flex-wrap",
//               "grid",
//               "grid-template-columns",
//               "grid-template-rows",
//               "gap",
//               "transform",
//               "transition",
//               "opacity",
//               "visibility",
//               "box-shadow",
//               "cursor",
//               "overflow",
//               "z-index",
//             ];

//             importantProps.forEach((prop) => {
//               const value = computedStyle.getPropertyValue(prop);
//               if (
//                 value &&
//                 value !== "initial" &&
//                 value !== "normal" &&
//                 value !== "none" &&
//                 value !== "auto"
//               ) {
//                 cssRules += `  ${prop}: ${value};\n`;
//               }
//             });

//             cssRules += "}\n\n";
//             styles += cssRules;
//           });

//           return styles;
//         };

//         // Get existing stylesheet rules
//         try {
//           for (let sheet of document.styleSheets) {
//             try {
//               for (let rule of sheet.cssRules || sheet.rules) {
//                 if (rule.cssText && !rule.cssText.includes(":hover")) {
//                   allStyles += rule.cssText + "\n";
//                 }
               
//               }
//             } catch (e) {
//               console.warn("Cannot access stylesheet:", sheet.href);
//             }
//           }
//         } catch (e) {
//           console.warn("Error accessing stylesheets");
//         }

//         // Add computed styles
//         allStyles += getAllComputedStyles(element);

//         return allStyles;
//       };

//       // 2. Create interactive JavaScript that mimics React behavior
//       const createInteractiveJS = () => {
//         return `
//           // Component state management
//           let componentState = {
//             activeMenu: ${activeMenu ? `"${activeMenu}"` : null},
//             editorData: ${JSON.stringify(editorData, null, 2)}
//           };

//           function handleClick(element, event) {
//             console.log('Component clicked:', componentState);
            
//             // Dispatch click event
//             const clickEvent = new CustomEvent('componentClick', {
//               detail: { 
//                 element: element,
//                 editorData: componentState.editorData,
//                 originalEvent: event
//               }
//             });
//             document.dispatchEvent(clickEvent);
//           }

//           // Initialize component behavior
//           function initializeComponent() {
//             const mainElement = document.querySelector('[data-component-root="true"]');
            
//             if (mainElement) {
//               // Add event listeners
             
              
//               mainElement.addEventListener('click', (e) => {
//                 handleClick(mainElement, e);
//               });

//               // Handle all clickable children
//               const clickableElements = mainElement.querySelectorAll('[data-clickable="true"], button, [role="button"]');
//               clickableElements.forEach(el => {
//                 el.addEventListener('click', (e) => {
//                   handleClick(el, e);
//                 });
//               });

//               // Handle form elements
//               const formElements = mainElement.querySelectorAll('input, textarea, select');
//               formElements.forEach(el => {
//                 el.addEventListener('change', (e) => {
//                   console.log('Form element changed:', e.target.value);
//                 });
//               });
//             }
//           }

//           // Wait for DOM to be ready
//           if (document.readyState === 'loading') {
//             document.addEventListener('DOMContentLoaded', initializeComponent);
//           } else {
//             initializeComponent();
//           }

//           // Additional utility functions
//           window.updateComponentState = function(newState) {
//             componentState = { ...componentState, ...newState };
//             console.log('Component state updated:', componentState);
//           };

//           window.getComponentState = function() {
//             return componentState;
//           };
//         `;
//       };

//       // 3. Get the HTML and add necessary attributes
//       const clonedElement = element.cloneNode(true);

//       // Add data attributes for JavaScript targeting
//       clonedElement.setAttribute("data-component-root", "true");

//       // Find and mark interactive elements
//       const interactiveElements = clonedElement.querySelectorAll(
//         'button, [role="button"], input, textarea, select'
//       );
//       interactiveElements.forEach((el) => {
//         el.setAttribute("data-clickable", "true");
//       });

//       const htmlContent = clonedElement.outerHTML;
//       const cssContent = getAllStyles();
//       const jsContent = createInteractiveJS();

//       // 4. Build complete standalone HTML
//       const completeHTML = `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Dynamic CTA Template Card</title>
//   <style>
//     /* Reset and base styles */
//     * {
//       margin: 0;
//       padding: 0;
//       box-sizing: border-box;
//     }
    
//     body {
//       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
//       background-color: #f8f9fa;
//       padding: 20px;
//       min-height: 100vh;
//     }

//     /* Component styles */
//     ${cssContent}
    
//     /* Clickable elements styling */
//     [data-clickable="true"] {
//       cursor: pointer;
//       transition: opacity 0.2s ease;
//     }

//     /* Loading state */
//     .component-loading {
//       opacity: 0.7;
//       pointer-events: none;
//     }
//   </style>
// </head>
// <body>
//   <div id="app">
//     ${htmlContent}
//   </div>
  
//   <script>
//     ${jsContent}
//     document.addEventListener('componentClick', (e) => {
//       console.log('Component click event:', e.detail);
//     });
//   </script>
// </body>
// </html>`;

//       return completeHTML;
//     };

//     useEffect(() => {
//       if (containerRef.current && editorData) {
//         // Small delay to ensure DOM is fully rendered
//         const timer = setTimeout(() => {
//           const completeDOM = extractCompleteDOM();
//           setDomTree(completeDOM);
//         }, 100);

//         return () => clearTimeout(timer);
//       }
//     }, [editorData, isHover, activeMenu]);

//     console.log("domTree", domTree);

//     const handleCopy = (data) => {
//       const copyData =
//         typeof data === "string" ? data : JSON.stringify(data, null, 2);
//       navigator.clipboard.writeText(copyData);
//       toast.success(`Copied to clipboard`);
//     };

//     // Function to save as HTML file
//     const saveAsHTMLFile = () => {
//       if (domTree) {
//         const blob = new Blob([domTree], { type: "text/html" });
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement("a");
//         a.href = url;
//         a.download = "dynamic-cta-template-card.html";
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//         URL.revokeObjectURL(url);
//         toast.success("HTML file downloaded!");
//       }
//     };

//     // Tab configuration
//     const tabs = [
//       { key: "Json", title: "JSON" },
//       { key: "Html", title: "HTML" },
//     ];

//     const getCurrentTabData = () => {
//       return activeTab === "Json" ? editorData : domTree;
//     };

//     const renderTabContent = () => {
//       switch (activeTab) {
//         case "Json":
//           return (
//             <pre
//               className="m-0"
//               style={{
//                 whiteSpace: "pre-wrap",
//                 wordBreak: "break-word",
//                 overflow: "visible",
//                 maxWidth: "100%",
//               }}
//             >
//               {JSON.stringify(editorData, null, 2)}
//             </pre>
//           );
//         case "Html":
//           return (
//             <pre
//               className="m-0"
//               style={{
//                 whiteSpace: "pre-wrap",
//                 wordBreak: "break-word",
//                 overflow: "visible",
//                 maxWidth: "100%",
//               }}
//             >
//               {domTree}
//             </pre>
//           );
//         default:
//           return null;
//       }
//     };

//     return (
//       <div
//         className="p-3 m-3 bg-light rounded shadow-sm"
//         style={{ maxHeight: "100%", overflow: "hidden" }}
//       >
//         {/* Tab Styles */}
//         <style>{`
//           .tab-btn {
//             background: none;
//             border: none;
//             padding: 0.5rem 1rem;
//             font-size: 0.9rem;
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             color: #6c757d;
//             position: relative;
//             white-space: nowrap;
//             cursor: pointer;
//             font-weight: 500;
//             transition: color 0.2s ease;
//           }
//           .tab-btn:hover {
//             color: #0d6efd;
//           }
//           .tab-btn.active {
//             color: #0d6efd;
//           }
//           .tab-btn .underline {
//             position: absolute;
//             bottom: -2px;
//             left: 25%;
//             right: 25%;
//             height: 3px;
//             background-color: #0d6efd;
//             border-radius: 2px;
//             transition: all 0.2s ease;
//           }
//           .tab-btn .icon {
//             margin-bottom: 0.25rem;
//             font-size: 1.1rem;
//           }
//           .output-content::-webkit-scrollbar {
//             display: none;
//           }
//           .output-content {
//             scrollbar-width: none;
//             -ms-overflow-style: none;
//           }
//           .tab-header {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             margin-bottom: 1rem;
//           }
//         `}</style>

//         <div className="bg-white rounded p-3 fw-semibold mb-3 d-flex justify-content-between align-items-center">
//           <span className="m-0">Card Preview</span>

//           <Stack direction="horizontal" gap={2}>
//             <Badge
//               bg="secondary"
//               style={{ cursor: "pointer" }}
//               onClick={() => {
//                 setOpen(!open);
//               }}
//             >
//               {open ? "Hide Output" : "Show Output"}
//             </Badge>
//           </Stack>
//         </div>

//         {open ? (
//           <div className="bg-white p-4 rounded-3 border shadow-sm">
//             <div className="tab-header">
//               <Swiper
//                 slidesPerView="auto"
//                 spaceBetween={12}
//                 modules={[Mousewheel]}
//                 mousewheel={{ forceToAxis: true }}
//                 grabCursor
//                 freeMode={true}
//                 style={{ width: "auto", flex: 1 }}
//               >
//                 {tabs.map((tab) => (
//                   <SwiperSlide key={tab.key} style={{ width: "auto" }}>
//                     <button
//                       className={`tab-btn ${
//                         activeTab === tab.key ? "active" : ""
//                       }`}
//                       onClick={() => setActiveTab(tab.key)}
//                     >
//                       <span>{tab.title}</span>
//                       {activeTab === tab.key && <div className="underline" />}
//                     </button>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>

//               <Stack direction="horizontal" gap={2}>
//                 <Button
//                   variant="outline-primary"
//                   size="sm"
//                   className="rounded d-flex align-items-center gap-1"
//                   onClick={saveAsHTMLFile}
//                   disabled={!domTree}
//                 >
//                   Download HTML
//                 </Button>
//                 <Button
//                   variant="primary"
//                   size="sm"
//                   className="rounded d-flex align-items-center gap-1"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleCopy(getCurrentTabData());
//                   }}
//                 >
//                   Copy <Copy size={15} />
//                 </Button>
//               </Stack>
//             </div>

//             <div
//               className="output-content"
//               style={{
//                 maxHeight: "500px",
//                 overflow: "auto",
//                 padding: "1rem",
//               }}
//             >
//               {renderTabContent()}
//             </div>
//           </div>
//         ) : (
//           <div ref={containerRef}>
//             {editorData ? (
//               <div className="">
//                 <DynamicCTATemplateCard
//                   isHover={isHover}
//                   setActiveMenu={setActiveMenu}
//                   {...editorData}
//                 />
//               </div>
//             ) : (
//               <div className="text-muted fst-italic p-2">
//                 No card data available
//               </div>
//             )}
//           </div>
//         )}

//         <ToastContainer position="top-center" autoClose={2000} />
//       </div>
//     );
//   }
// );

// export default CardPreview;
