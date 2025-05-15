import React, { useEffect, useRef, useState } from "react";
import cleanData from "../cleanData";
import FloatingInputBox from "../components/FloatingInputBox";
import DropdownBox from "../components/DropdownBox";
import InputBox from "../components/InputBox";
import { PositionSelector } from "../components/PositionBox";
import ColorPickerBox from "../components/ColorPickerBox";
const ButtonEditor = ({ onChange , changedData }) => {
  const [state, setState] = useState({
    text: changedData?.button?.text || "",
    variation: changedData?.button?.variation || "",
    btnTextColor: changedData?.button?.btnTextColor || "",
    size: changedData?.button?.size || "",
    position: changedData?.button?.position || "",
    url: changedData?.button?.url || "",
    action: changedData?.button?.action || "",
    startEndorment: changedData?.button?.startEndorment || "",
    endEndorment: changedData?.button?.endEndorment || "",
    extraClass: changedData?.button?.extraClass || "",
  });

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    const selectedValues = {
      text: state.text,
      variation: state.variation,
      btnTextColor: state.btnTextColor,
      size: state.size,
      position: state.position,
      url: state.url,
      action: state.action,
      startEndorment: state.startEndorment,
      endEndorment: state.endEndorment,
      extraClass: state.extraClass,
    };

    const clean = cleanData(selectedValues);
    onChangeRef.current(clean, "button");
  }, [state]);

  const handleStateChange = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value.trim() === "" ? "" : value }));
  };

  return (
    <div>
      <InputBox
        label={"Text"}
        value={state.text}
        setValue={(val) => handleStateChange("text", val)}
        placeholder={"Set text"}
      />
      <hr />

      <ColorPickerBox
        label={"Variation"}
        data={{
          "btn-primary": "#0d6efd",
          "btn-secondary": "#6c757d",
          "btn-success": "#198754",
          "btn-danger": "#dc3545",
          "btn-warning": "#ffc107",
          "btn-info": "#0dcaf0",
          "btn-light": "#f8f9fa",
          "btn-dark": "#212529",
          "btn-link": "#0d6efd",
        }}
        value={state.variation}
        setValue={(val) => handleStateChange("variation", val)}
      />
      <hr />

      <InputBox
        label={"Button Text Color"}
        value={state.btnTextColor}
        setValue={(val) => handleStateChange("btnTextColor", val)}
        placeholder={"Set text color"}
      />
      <hr />

      <DropdownBox
        label={"Size"}
        value={state.size}
        setValue={(val) => handleStateChange("size", val)}
        data={["sm", "md", "lg", "w-100", "value in px"]}
      />
      <hr />
      <PositionSelector
        label={"Button Position"}
        data={[
          { key: "right", label: "Right" },
          { key: "left", label: "Left" },
          { key: "center", label: "Center" },
        ]}
        onSelect={(position) => handleStateChange("position", position)}
      />
      <hr />

      <InputBox
        label={"URL"}
        value={state.url}
        setValue={(val) => handleStateChange("url", val)}
        placeholder={"Set url"}
      />
      <hr />

      <DropdownBox
        label={"Action"}
        value={state.action}
        setValue={(val) => handleStateChange("action", val)}
        data={["internal_redirect", "external_redirect"]}
      />
      <hr />
      <FloatingInputBox
        label={"Start Endorment"}
        placeholder={"Submit Svg"}
        value={state.startEndorment}
        setValue={(val) => handleStateChange("startEndorment", val)}
      />
      <hr />
      <FloatingInputBox
        label={"End Endorment"}
        placeholder={"Submit Svg"}
        value={state.endEndorment}
        setValue={(val) => handleStateChange("endEndorment", val)}
      />
      <hr />
      <FloatingInputBox
        label={"Extra Class"}
        placeholder={"Bootstrap Class"}
        value={state.extraClass}
        setValue={(val) => handleStateChange("extraClass", val)}
      />
    </div>
  );
};

export default ButtonEditor;
