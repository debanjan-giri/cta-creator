import { useState, useEffect } from "react";
import {
  SquarePilcrow,
  Heart,
  Paintbrush,
  Image,
  LetterText,
  Tag,
  Pointer,
  Paperclip,
  Braces,
  FileCog,
  CircleArrowRight,
} from "lucide-react";

import "react-toastify/dist/ReactToastify.css";
import TitleEditor from "../screens/TitleEditor";
import ImageEditor from "../screens/ImageEditor";
import ButtonEditor from "../screens/ButtonEditor";
import TagEditor from "../screens/TagEditor";
import CardEditor from "../screens/CardEditor";
import FormEditor from "../screens/FormEditor";
import OthersEditor from "../screens/OthersEditor";
import ParagraphEditor from "../screens/ParagraphEditor";
import CardPreview from "./CardPreview";
import CardTemplate from "./CardTemplate";
import MenuIconBar from "./MenuIconBar";
import { Button, Container, Navbar } from "react-bootstrap";
import templateData from "../constants/templateData";
import BootstrapVisualController from "../components/BootstrapModal";
import { toast, ToastContainer } from "react-toastify";

const menuDetails = {
  title: {
    component: TitleEditor,
    icon: LetterText,
    text: "Title",
  },
  imageObject: { component: ImageEditor, icon: Image, text: "Image" },
  paragraph: {
    component: ParagraphEditor,
    icon: SquarePilcrow,
    text: "Subtitle",
  },
  tag: { component: TagEditor, icon: Tag, text: "Tag" },
  button: { component: ButtonEditor, icon: Pointer, text: "Button" },
  cardStyle: {
    component: CardEditor,
    icon: Paintbrush,
    text: "Card",
  },
  formJson: { component: FormEditor, icon: Paperclip, text: "From" },
  others: { component: OthersEditor, icon: FileCog, text: "Type" },
};

const Layout = () => {
  const [activeMenu, setActiveMenu] = useState("title");
  const [editorData, setEditorData] = useState(templateData[0]?.data);
  const ActiveComponent = menuDetails[activeMenu]?.component || TitleEditor;
  const [mobile, setMobile] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Handle template selection
  const handleTemplateSelect = (templateData) => {
    console.log("templateData", templateData);
    setEditorData(templateData);
  };

  // Handle editor data changes
  const handleEditorChange = (updatedData, section = null) => {
    setEditorData((prev) => {
      if (section) {
        return {
          ...prev,
          [section]: updatedData,
        };
      }
      return {
        ...prev,
        [activeMenu]: updatedData,
      };
    });
  };

  // Close mobile menu when clicking outside
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".mobile-menu-container")) {
      setShowMobileMenu(false);
    }
  };

  useEffect(() => {
    if (showMobileMenu) {
      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }
  }, [showMobileMenu]);

  return (
    <div className="d-flex flex-column vh-100">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-3">
        <div className="navbar-brand text-muted fw-bold fs-5 d-flex align-items-center">
          <Braces className="me-2" />
          Dynamic CTA creator
        </div>

        {/* Mobile hamburger menu */}
        <div className="d-block d-md-none mobile-menu-container position-relative">
          <button
            className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
            onClick={(e) => {
              e.stopPropagation();
              setShowMobileMenu(!showMobileMenu);
            }}
            style={{ width: "40px", height: "40px" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Mobile dropdown menu */}
          {showMobileMenu && (
            <div
              className="position-absolute top-100 end-0 bg-white border rounded shadow-lg p-2 mt-1"
              style={{ zIndex: 1050, minWidth: "120px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={`btn btn-sm w-100 mb-2 ${
                  mobile === 0 ? "btn-primary" : "btn-outline-secondary"
                }`}
                onClick={() => {
                  setMobile(0);
                  setShowMobileMenu(false);
                }}
              >
                Preview
              </button>
              <button
                className={`btn btn-sm w-100 mb-2 ${
                  mobile === 1 ? "btn-primary" : "btn-outline-secondary"
                }`}
                onClick={() => {
                  setMobile(1);
                  setShowMobileMenu(false);
                }}
              >
                Editor
              </button>
              <button
                className={`btn btn-sm w-100 ${
                  mobile === 2 ? "btn-primary" : "btn-outline-secondary"
                }`}
                onClick={() => {
                  setMobile(2);
                  setShowMobileMenu(false);
                }}
              >
                Template
              </button>
            </div>
          )}
        </div>

        <div className="ms-auto d-none d-sm-flex align-items-center gap-2">
          <button
            className="btn btn-outline-secondary text-nowrap"
            onClick={() => toast.error("Under Development")}
          >
            Preview
          </button>
          <button
            className="btn btn-outline-secondary text-nowrap"
            onClick={() => toast.error("Under Development")}
          >
            Save as Draft
          </button>
          <button
            className="btn btn-primary d-flex align-items-center gap-1"
            onClick={() => toast.error("Under Development")}
          >
            Publish <CircleArrowRight size={18} />
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow-1 overflow-hidden">
        {/* Desktop Layout - Show all three sections side by side */}
        <div className="d-none d-md-block h-100">
          <div className="row g-0 h-100">
            {/* Editor Section - Left */}
            <div className="col-md-4 h-100 border-end">
              <div className="h-100 d-flex">
                {/* Menu Icon Bar */}
                <div
                  className="bg-light border-end d-flex flex-column align-items-center py-3"
                  style={{ minWidth: "90px" , maxWidth: "90px"}}
                >
                  <MenuIconBar
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                    menuDetails={menuDetails}
                  />
                </div>
                {/* Editor Content */}
                <div className="flex-grow-1 overflow-auto p-3">
                  <ActiveComponent
                    activeMenu={activeMenu}
                    changedData={editorData}
                    onChange={handleEditorChange}
                    modalComponent={
                      <BootstrapVisualController
                        onChange={handleEditorChange}
                        changedData={editorData}
                        activeMenu={activeMenu}
                        isLightButton={true}
                      />
                    }
                  />
                </div>
              </div>
            </div>

            {/* Preview Section - Center */}
            <div className="col-md-4 h-100 border-end bg-light">
              <div className="h-100 overflow-auto">
                <CardPreview
                  isHover={true}
                  setActiveMenu={setActiveMenu}
                  editorData={editorData}
                  handleEditorChange={handleEditorChange}
                />
              </div>
            </div>

            {/* Template Section - Right */}
            <div className="col-md-4 h-100">
              <div className="h-100 overflow-auto p-3">
                <CardTemplate
                  activeMenu={activeMenu}
                  setEditorData={setEditorData}
                  editorData={editorData}
                  onChange={handleEditorChange}
                  onSelectTemplate={handleTemplateSelect}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Show one section at a time */}
        <div className="d-block d-md-none h-100">
          {/* Mobile Editor View */}
          {mobile === 1 && (
            <div className="h-100 d-flex">
              {/* Menu Icon Bar */}
              <div
                className="bg-light border-end d-flex flex-column align-items-center p-3"
                style={{ width: "70px" }}
              >
                <MenuIconBar
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  menuDetails={menuDetails}
                />
              </div>
              {/* Editor Content */}
              <div className="flex-grow-1 overflow-auto p-3">
                <ActiveComponent
                  activeMenu={activeMenu}
                  changedData={editorData}
                  onChange={handleEditorChange}
                  modalComponent={
                    <BootstrapVisualController
                      onChange={handleEditorChange}
                      changedData={editorData}
                      activeMenu={activeMenu}
                    />
                  }
                />
              </div>
            </div>
          )}

          {/* Mobile Preview View */}
          {mobile === 0 && (
            <div className="h-100 bg-light overflow-auto">
              <CardPreview editorData={editorData} />
            </div>
          )}

          {/* Mobile Template View */}
          {mobile === 2 && (
            <div className="h-100 overflow-auto p-3">
              <CardTemplate
                setEditorData={setEditorData}
                editorData={editorData}
                onSelectTemplate={handleTemplateSelect}
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};
export default Layout;
