import { useState } from "react";
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
} from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";
import TitleEditor from "../screens/TitleEditor";
import ImageEditor from "../screens/ImageEditor";
import ButtonEditor from "../screens/ButtonEditor";
import TagEditor from "../screens/TagEditor";
import CardEditor from "../screens/CardEditor";
import FormEditor from "../screens/FormEditor";
import OthersEditor from "../screens/OthersEditor";
import ParagraphEditor from "../screens/ParagraphEditor";
import CardPreview from "./CardPreview";
import JsonViewer from "./JsonViewer";
import MenuIconBar from "./MenuIconBar";
import { Navbar } from "react-bootstrap";
import cleanData from "../cleanData";

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
    text: "Paragraph",
  },
  button: { component: ButtonEditor, icon: Pointer, text: "Button" },
  cardStyle: {
    component: CardEditor,
    icon: Paintbrush,
    text: "Card",
  },
  tag: { component: TagEditor, icon: Tag, text: "Tag" },
  form: { component: FormEditor, icon: Paperclip, text: "From JSON" },
  cta: { component: OthersEditor, icon: Heart, text: "Others" },
};

const Layout = () => {
  const [activeMenu, setActiveMenu] = useState("title");
  const [editorData, setEditorData] = useState({
    title: {
      content: "Optimizing Vital Nutrients",
      variation: "sub_header",
      opacity: "text-opacity-100",
      color: "dark",
      startEndorment: "",
      endEndorment: "",
      extraClass: "d-flex justify-content-center pt-5 mt-5 w-100",
    },
    paragraph: {
      content: "<h5>The CoBoDex-CZS Experience</h5>",
      opacity: "text-opacity-100",
      color: "dark",
      extraClass: "d-flex justify-content-center pt-2",
    },
    button: [
      {
        url: "",
        text: "Return Home",
        variation: "#FF0000",
        btnTextColor: "#fff",
        size: "",
        position: "center",
        startEndorment: "",
        endEndorment:
          '<svg class="fill-white" fill="#fff" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 511.982 511.982"><g><path d="M386.514,247.375L142.705,3.566c-4.754-4.754-12.483-4.754-17.237,0c-4.754,4.754-4.754,12.483,0,17.237l235.179,235.203L125.467,491.185c-4.754,4.754-4.754,12.483,0,17.237c2.389,2.365,5.51,3.56,8.631,3.56c3.121,0,6.242-1.195,8.607-3.56l243.81-243.81C391.269,259.858,391.269,252.13,386.514,247.375z"></path></g></svg>',
        extraClass: "mb-3 mt-2 p-3 px-4 py-2 fs-5",
      },
    ],
    cardStyle: {
      cardbgImage:
        "https://img-cdn.clirnet.com/medwiki/43_server/video/1722864218_1719410698_cobadex_(1)_(1).webp",
      cardbgcolor: "",
      color: "",
      cardbgopacity: "",
      border: "",
      borderColor: "",
      borderOpacity: "",
      borderWidth: "rounded-3",
      extraClass: "shadow",
      borderRadius: "",
    },
    imageObject: [
      {
        url: "",
        position: "",
        size: "",
        alt: "",
        extraClass: "",
      },
    ],
    formJson: [
      {
        label: "Full Name",
        field_name: "full_name",
        type: "text",
        is_mandatory: "1",
        options: "",
        extraClass: "",
      },
    ],
  });

  const handleEditorChange = (data, editorType) => {
    setEditorData((prevData) => {
      const arrayTypes = ["formJson", "button", "imageObject"];

      const cleanedData = cleanData(data);

      if (arrayTypes.includes(editorType)) {
        return {
          ...prevData,
          [editorType]:
            Object.keys(cleanedData).length > 0
              ? [{ ...prevData[editorType][0], ...cleanedData }]
              : prevData[editorType],
        };
      } else if (editorType === "others") {
        return {
          ...prevData,
          ...cleanedData,
        };
      } else {
        return {
          ...prevData,
          [editorType]:
            Object.keys(cleanedData).length > 0
              ? { ...prevData[editorType], ...cleanedData }
              : prevData[editorType],
        };
      }
    });
  };

  const ActiveComponent = menuDetails[activeMenu]?.component || TitleEditor;

  // Handle template selection
  const handleTemplateSelect = (templateData) => {
    setEditorData(templateData);
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Navbar bg="white" expand="lg" className="border-bottom px-4 py-3">
        <Navbar.Brand className="text-gray-500 fw-bold fs-5">
          <Braces /> Dynamic CTA creator
        </Navbar.Brand>
      </Navbar>
      <div className="container-fluid flex-grow-1 overflow-hidden">
        <div className="row h-100">
          <div
            className="col-auto bg-light border-end d-flex flex-column align-items-center p-3"
            style={{ width: "70px", height: "80vh", position: "absolute" }}
          >
            <MenuIconBar
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              menuDetails={menuDetails}
            />
          </div>

          <div className="col-md-4 h-100 overflow-auto custom-scrollbar">
            <div style={{ paddingLeft: "70px" }}>
              <div className="p-3">
                <ActiveComponent
                  onChange={handleEditorChange}
                  changedData={editorData}
                />
              </div>
            </div>
          </div>

          <div className="col-md-4 border-start border-end bg-light h-100 overflow-auto">
            <CardPreview
              editorData={editorData}
              onSelectTemplate={handleTemplateSelect}
            />
          </div>

          <div className="col-md-4 h-100 overflow-auto">
            <JsonViewer editorData={editorData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
