import { useEffect, useRef, useState } from "react";
import cleanData from "../cleanData";
import DropdownBox from "../components/DropdownBox";
import FloatingInputBox from "../components/FloatingInputBox";
import InputBox from "../components/InputBox";

const FormEditor = ({ onChange, changedData }) => {
  const [state, setState] = useState({
    label: changedData?.formJson?.[0]?.label || "",
    field_name: changedData?.formJson?.[0]?.field_name || "",
    type: changedData?.formJson?.[0]?.type || "",
    is_mandatory: changedData?.formJson?.[0]?.is_mandatory || "",
    options: changedData?.formJson?.[0]?.options || "",
    extraClass: changedData?.formJson?.[0]?.extraClass || "",
  });

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    const selectedValues = {
      label: state.label,
      field_name: state.field_name,
      type: state.type,
      is_mandatory: state.is_mandatory,
      options: state.options,
      extraClass: state.extraClass,
    };

    const clean = cleanData(selectedValues);
    onChangeRef.current(clean, "formJson");
  }, [state]);

  const handleStateChange = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value.trim() === "" ? "" : value }));
  };

  return (
    <div>
      <InputBox
        label={"Label"}
        placeholder={"Enter Label"}
        value={state.label}
        setValue={(val) => handleStateChange("label", val)}
      />
      <hr />
      <InputBox
        label={"Field Name"}
        placeholder={"Enter Field Name"}
        value={state.field_name}
        setValue={(val) => handleStateChange("field_name", val)}
      />
      <hr />
      <DropdownBox
        label={"Field Type"}
        value={state.type}
        setValue={(val) => handleStateChange("type", val)}
        data={["text", "number", "textarea", "radio", "checkbox", "dropdown"]}
      />
      <hr />
      <DropdownBox
        label={"Options"}
        value={state.options}
        setValue={(val) => handleStateChange("options", val)}
        data={["male", "female"]}
      />
      <hr />

      <DropdownBox
        label={"Is Mandatory"}
        value={state.is_mandatory}
        setValue={(val) => handleStateChange("is_mandatory", val)}
        data={["0", "1"]}
      />
      <hr />

      <FloatingInputBox
        label={"Extra Class"}
        placeholder={"Enter Extra Class"}
        value={state.extraClass}
        setValue={(val) => handleStateChange("extraClass", val)}
      />
    </div>
  );
};

export default FormEditor;
