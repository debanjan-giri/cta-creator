import { useEffect, useRef, useState } from "react";
import DropdownBox from "../components/DropdownBox";

import InputBox from "../components/InputBox";
import { Tabs, Tab } from "react-bootstrap";
import { MdOutlineDelete } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { RenderComponent } from "../components/RenderComponent";

const formEditorSchema = [
  {
    label: "Label",
    placeholder: "Enter Label",
    valueKey: "label",
    component: "InputBox",
  },
  {
    label: "Field Name",
    placeholder: "Enter Field Name",
    valueKey: "field_name",
    component: "InputBox",
  },
  {
    label: "Field Type",
    valueKey: "type",
    component: "DropdownBox",
    data: ["text", "number", "textarea", "radio", "checkbox", "dropdown"],
  },
  {
    label: "Options",
    valueKey: "options",
    component: "DropdownBox",
    data: ["male", "female","other"],
  },
  {
    label: "Is Mandatory",
    valueKey: "is_mandatory",
    component: "DropdownBox",
    data: ["0", "1"],
  },
  {
    label: "Extra Class",
    placeholder: "Enter Extra Class",
    valueKey: "extraClass",
    component: "InputBox",
    isTextarea: true,
  },
];

const FormEditor = ({ onChange, changedData }) => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    if (Array.isArray(changedData?.formJson)) {
      setForms(changedData.formJson);
    } else {
      setForms([]);
    }
  }, [changedData]);

  const handleUpdateForm = (index, key, value) => {
    const updated = [...forms];
    updated[index] = { ...updated[index], [key]: value };
    setForms(updated);
    onChange && onChange(updated);
  };

  const handleAddForm = () => {
    const defaultForm = {
      label: "",
      field_name: "",
      type: "text",
      is_mandatory: "0",
      options: "",
      extraClass: "",
    };

    const updated = [...forms, defaultForm];
    setForms(updated);
    onChange && onChange(updated);
  };

  const handleDeleteForm = (index) => {
    const updated = forms.filter((_, i) => i !== index);
    setForms(updated);
    onChange && onChange(updated);
  };

  const renderFormEditor = (form, index) => (
    <div key={index} className="p-3 bg-white rounded shadow-sm ">
      {formEditorSchema.map((item, idx) => (
        <div key={idx} className="mb-3">
          <RenderComponent
            item={item}
            state={form}
            onChange={(key, value) => handleUpdateForm(index, key, value)}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="mt-3 p-3 bg-white rounded shadow-sm">
      <div className="position-relative">
        <p
          className="position-absolute top-0 end-0"
          onClick={handleAddForm}
          style={{ cursor: "pointer", color: "#0d6efd", zIndex: 1 }}
        >
          Add +
        </p>
        <Tabs defaultActiveKey="0" id="form-tabs" className="mb-3">
          {forms.map((form, idx) => (
            <Tab
              eventKey={idx.toString()}
              key={idx}
              title={
                <span className="d-inline-flex align-items-center gap-1">
                  <span>Field {idx + 1}</span>
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteForm(idx);
                    }}
                    style={{ cursor: "pointer", color: "#dc3545" }}
                    title="Delete Form"
                  >
                    <MdOutlineDelete size={16} />
                  </span>
                </span>
              }
            >
              {renderFormEditor(form, idx)}
            </Tab>
          ))}
        </Tabs>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default FormEditor;
