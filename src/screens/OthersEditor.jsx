import { useState } from "react";
import { RenderComponent } from "../components/RenderComponent";

const OthersEditorSchema = [
  {
    label: "Type",
    placeholder: "Enter Type",
    valueKey: "type",
    component: "InputBox",
  },
  {
    label: "Type ID",
    placeholder: "Enter Type ID",
    valueKey: "type_id",
    component: "InputBox",
  },
  {
    label: "Consent Statement",
    placeholder: "Enter consent statement",
    valueKey: "consent_statement",
    component: "InputBox",
  },
  {
    label: "Position",
    data: [
      "after_content",
      "before_content",
      "before_related",
      "after_related",
      "left_panel_before",
      "left_panel_after",
      "top",
    ],
    valueKey: "position",
    component: "DropdownBox",
  },
];

const OthersEditor = () => {
  const [state, setState] = useState({
    consent_statement: "",
    type: "",
    type_id: "",
    position: "",
  });

  const handleStateChange = (key, value) => {
    const newState = { ...state, [key]: value };
    setState(newState);
  };
  const isDisabled = !state.type?.trim() || !state.type_id?.trim();
  return (
    <div className="p-3 bg-white rounded shadow-sm ">
      {OthersEditorSchema?.map((item, idx) => {
        return (
          <div key={idx} className="mb-3">
            <RenderComponent
              isDisabled={isDisabled}
              item={item}
              state={state}
              onChange={handleStateChange}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OthersEditor;
