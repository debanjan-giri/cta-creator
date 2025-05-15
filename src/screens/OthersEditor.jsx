import { useEffect, useRef, useState } from "react";
import cleanData from "../cleanData";
import { PositionSelector } from "../components/PositionBox";
import InputBox from "../components/InputBox";

const OthersEditor = ({ onChange , changedData }) => {
  const [state, setState] = useState({
    consent_statement: changedData?.consent_statement || "",
    type: changedData?.type || "",
    type_id: changedData?.type_id || "",
    position: changedData?.position || "",
  });

  const onChangeRef = useRef(onChange);

useEffect(() => {
  const selectedValues = {
    consent_statement: state.consent_statement,
    type: state.type,
    type_id: state.type_id,
    position: state.position,
  };

  const clean = cleanData(selectedValues);
  onChangeRef.current(clean, "others"); // ✅ Fields will be merged directly
}, [state]);

  const handleStateChange = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value.trim() === "" ? "" : value }));
  };
  return (
    <div>
      <InputBox
        label={"Type"}
        placeholder={"Enter Type"}
        value={state.type}
        setValue={(val) => handleStateChange("type", val)}
      />
      <hr />
      <InputBox
        label={"Type ID"}
        placeholder={"Enter Type ID"}
        value={state.type_id}
        setValue={(val) => handleStateChange("type_id", val)}
      />
      <hr />
      <InputBox
        label={"consent statement"}
        placeholder={"Enter consent statement"}
        value={state.consent_statement}
        setValue={(val) => handleStateChange("consent_statement", val)}
      />
      <hr />
      <PositionSelector
        data={[
          { key: "after_content", label: "Right" },
          { key: "before_content", label: "Left" },
          { key: "before_related", label: "Top" },
          { key: "after_related", label: "Bottom" },
          { key: "left_panel_before", label: "Top Right" },
          { key: "left_panel_after", label: "Top Left" },
          { key: "top", label: "Bottom Left" },
        ]}
        label={"Position"}
        onSelect={(position) => handleStateChange("position", position)}
      />
    </div>
  );
};

export default OthersEditor;
