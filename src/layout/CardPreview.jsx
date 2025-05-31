// import React, { memo, useRef, useState, useEffect } from "react";
// import { Accordion, Badge, Button, Card, Stack } from "react-bootstrap";

// import { DynamicCTATemplateCard } from "../CTA/DynamicCTATemplateCard";
// import GeminJsonCreator from "../utils/GeminJsonCreator";
// import { Copy, IdCardIcon } from "lucide-react";
// import { ToastContainer, toast } from "react-toastify";

// const CardPreview = memo(
//   ({ editorData, activeMenu, setActiveMenu, isHover }) => {
//     const [showJson, setShowJson] = React.useState(false);
//     const [showHtml, setShowHtml] = React.useState(false);
//     const containerRef = useRef(null);
//     const [domTree, setDomTree] = useState("");

//     useEffect(() => {
//       if (containerRef.current) {
//         // Get the outer HTML (or you can recursively build a custom tree)
//         setDomTree(containerRef.current.outerHTML);
//       }
//     }, [editorData]);

//     console.log("domTree", domTree);

//     const handleCopy = (data) => {
//       navigator.clipboard.writeText(JSON.stringify(data, null, 2));
//       toast.success(`Copied to clipboard`);
//     };
//     return (
//       <div
//         className="p-3 m-3  bg-light rounded shadow-sm"
//         style={{ maxHeight: "100%", overflow: "hidden" }}
//       >
//         <div className="bg-white rounded p-3 fw-semibold mb-3 d-flex justify-content-between align-items-center">
//           <span className="m-0">Card Preview</span>

//           <Stack direction="horizontal" gap={2}>
//             {/* <Badge
//             bg="secondary"
//             style={{ cursor: "pointer" }}
//             onClick={() => {
//               setShowJson(false);
//               setShowHtml(!showHtml);
//             }}
//           >
//             {showHtml ? "Hide HTML" : "Show HTML"}
//           </Badge> */}
//             <Badge
//               bg="secondary"
//               style={{ cursor: "pointer" }}
//               onClick={() => {
//                 setShowJson(!showJson);
//                 setShowHtml(false);
//               }}
//             >
//               {showJson ? "Hide JSON" : "Show JSON"}
//             </Badge>
//           </Stack>
//         </div>

//         {showJson ? (
//           <div
//             className="bg-white p-2 rounded position-relative"
//             style={{
//               maxHeight: "500px",
//               overflow: "auto",
//               scrollbarWidth: "none", // Firefox
//               msOverflowStyle: "none", // IE 10+
//             }}
//           >
//             <style>
//               {`
//           /* Hide scrollbar for Chrome, Safari and Opera */
//           div::-webkit-scrollbar {
//             display: none;
//           }
//         `}
//             </style>

//             <Button
//               variant="primary"
//               size="sm"
//               className="position-absolute top-0 end-0 m-2 rounded d-flex align-items-center gap-1"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleCopy(editorData);
//               }}
//             >
//               Copy <Copy size={15} />
//             </Button>

//             <pre className="m-0">{JSON.stringify(editorData, null, 2)}</pre>
//             {/* {showHtml ? (
//             // <div dangerouslySetInnerHTML={{ __html: domTree }}></div>
//             <pre className="m-0">{domTree}</pre>
//           ) : (
//             <pre className="m-0">{JSON.stringify(editorData, null, 2)}</pre>
//           )} */}
//           </div>
//         ) : showHtml ? (
//           <div
//             className="bg-white p-2 rounded position-relative"
//             style={{
//               maxHeight: "500px",
//               overflow: "auto",
//               scrollbarWidth: "none", // Firefox
//               msOverflowStyle: "none", // IE 10+
//             }}
//           >
//             <style>
//               {`
//       /* Hide scrollbar for Chrome, Safari and Opera */
//       div::-webkit-scrollbar {
//         display: none;
//       }
//     `}
//             </style>

//             <Button
//               variant="primary"
//               size="sm"
//               className="position-absolute top-0 end-0 m-2 rounded d-flex align-items-center gap-1"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleCopy(domTree);
//               }}
//             >
//               Copy <Copy size={15} />
//             </Button>

//             <pre className="m-0">{domTree}</pre>
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
