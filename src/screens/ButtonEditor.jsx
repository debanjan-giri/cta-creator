import React, { useEffect, useRef, useState } from "react";
import { Accordion, Button, Tab, Tabs } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { MdOutlineDelete } from "react-icons/md";
import { AlignCenter, ArrowLeft, ArrowRight } from "lucide-react";
import { RenderComponent } from "../components/RenderComponent";

const buttonEditorSchema = [
  {
    label: "Text",
    valueKey: "content",  // text
    placeholder: "Set text",
    component: "InputBox",
  },
  {
    label: "Variation",
    valueKey: "variation",
    component: "ColorPickerBox",
    data: {
      "btn-primary": "#0d6efd",
      "btn-secondary": "#6c757d",
      "btn-success": "#198754",
      "btn-danger": "#dc3545",
      "btn-warning": "#ffc107",
      "btn-info": "#0dcaf0",
      "btn-light": "#f8f9fa",
      "btn-dark": "#212529",
      "btn-link": "#0d6efd",
    },
  },
  {
    label: "Button Text Color",
    valueKey: "btnTextColor",
    component: "ColorPickerBox",
    data: {
      primary: "#0000FF",
      secondary: "#FF0000",
      dark: "#000000",
      light: "#FFFFFF",
    },
  },
  {
    label: "Button consent statement",
    valueKey: "consent_statement", // ?
    placeholder: "Set consent statement",
    component: "InputBox",
  },
  {
    label: "Size",
    valueKey: "size",
    component: "DropdownBox",
    data: ["sm", "md", "lg", "w-100", "value in px"],
  },
  {
    label: "Button Position",
    valueKey: "position",
    component: "Selector",
    data: [
      { key: "right", label: "Right", icon: ArrowRight },
      { key: "left", label: "Left", icon: ArrowLeft},
      { key: "center", label: "Center", icon: AlignCenter},
    ],
  },
  {
    label: "URL",
    valueKey: "url",
    placeholder: "Set URL",
    component: "InputBox",
  },
  {
    label: "Action",
    valueKey: "action",
    component: "DropdownBox",
    data: ["internal_redirect", "external_redirect"],
  },
  {
    label: "Start Endorment",
    valueKey: "startEndorment",
    placeholder: "Set svg or icon",
    component: "InputBox",
  },
  {
    label: "End Endorment",
    valueKey: "endEndorment",
    placeholder: "Set svg or icon",
    component: "InputBox",
  },
  {
    label: "Extra Class",
    valueKey: "extraClass",
    placeholder: "Set extra class",
    component: "InputBox",
    isTextarea: true,
  },
];

const ButtonEditor = ({ onChange, changedData, modalComponent }) => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    if (Array.isArray(changedData?.button)) {
      setButtons(changedData.button);
    } else {
      setButtons([]);
    }
  }, [changedData]);

  const handleUpdateButton = (index, key, value) => {
    const updated = [...buttons];
    updated[index] = { ...updated[index], [key]: value };

    setButtons(updated);
    onChange && onChange(updated);
  };

  const handleAddButton = () => {
    if (buttons.length >= 3) {
      toast.error("You can only add up to 3 buttons.");
      return;
    }

    const defaultButton = {
      url: "",
      content: "Click here",
      variation: "btn-primary",
      size: "md",
      position: "left",
      startEndorment: "",
      endEndorment: "",
      extraClass: "py-3 fw-semibold fs-5",
      btnTextColor: "",
      action: "",
      consent_statement: "",
    };

    const updated = [...buttons, defaultButton];
    setButtons(updated);
    onChange && onChange(updated);
  };

  const handleDeleteButton = (index) => {
    const updated = buttons.filter((_, i) => i !== index);
    setButtons(updated);
    onChange && onChange(updated);
  };

  const renderButtonEditor = (btn, index) => (
    <div key={index}>
      {buttonEditorSchema.map((item, idx) => (
        <div key={idx} className="mb-3">
          <RenderComponent
            item={item}
            state={btn}
            onChange={(key, value) => handleUpdateButton(index, key, value)}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className=" p-3 bg-white rounded shadow-sm ">
      <div className="position-relative">
        <p
          className="position-absolute top-0 end-0"
          onClick={handleAddButton}
          size={30}
          style={{
            cursor: "pointer",
            color: "#0d6efd",
            zIndex: 1,
          }}
        >
          Add +
        </p>
        <Tabs defaultActiveKey="0" id="button-tabs" className="mb-3">
          {buttons &&
            buttons.map((btn, idx) => (
              <Tab
                eventKey={idx.toString()}
                key={idx}
                title={
                  <span className="d-inline-flex align-items-center gap-1">
                    <span>Button {idx + 1}</span>
                    <span
                      onClick={(e) => {
                        e.stopPropagation(); // prevent tab switch
                        handleDeleteButton(idx);
                      }}
                      style={{
                        cursor: "pointer",
                        color: "#dc3545",
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                      title="Delete Button"
                    >
                      <MdOutlineDelete size={16} />
                    </span>
                  </span>
                }
              >
                {renderButtonEditor(btn, idx)}
              </Tab>
            ))}
        </Tabs>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default ButtonEditor;
