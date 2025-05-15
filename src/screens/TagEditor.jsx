import { useEffect, useRef, useState } from "react";
import cleanData from "../cleanData";
import FloatingInputBox from "../components/FloatingInputBox";
import IconPickerBox from "../components/IconPickerBox";
import { PositionSelector } from "../components/PositionBox";
import ColorPickerBox from "../components/ColorPickerBox";
import InputBox from "../components/InputBox";
import BorderPickerBox from "../components/BorderPickerBox";

const TagEditor = ({ onChange, changedData }) => {
  const [state, setState] = useState({
    position: changedData?.tag?.position || "",
    text: changedData?.tag?.text || "",
    bgColor: changedData?.tag?.bgColor || "",
    textColor: changedData?.tag?.textColor || "",
    borderRadius: changedData?.tag?.borderRadius || "",
    bgOpacity: changedData?.tag?.bgOpacity?.replace("bg-opacity-", "") || "",
    extraClass: changedData?.tag?.extraClass || "",
  });

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    const selectedValues = {
      position: state.position,
      text: state.text,
      bgColor: state.bgColor,
      textColor: state.textColor,
      borderRadius: state.borderRadius,
      bgOpacity: state.bgOpacity ? `bg-opacity-${state.bgOpacity}` : "",
      extraClass: state.extraClass,
    };

    const clean = cleanData(selectedValues);
    onChangeRef.current(clean, "tag");
  }, [state]);

  const handleStateChange = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value.trim() === "" ? "" : value }));
  };
  return (
    <div>
      <InputBox
        label={"text"}
        placeholder={"text"}
        value={state.text}
        setValue={(val) => handleStateChange("text", val)}
      />
      <hr />
      {/* required only left right */}
      <PositionSelector
        label={"tag position"}
        data={[
          { key: "left", label: "Left" },
          { key: "right", label: "Right" },
        ]}
        onSelect={(position) => handleStateChange("position", position)}
      />
      <hr />
      <ColorPickerBox
        label={"Background Color"}
        data={{
          primary: "#0000FF",
          secondary: "#FF0000",
          dark: "#000000",
          light: "#FFFFFF",
        }}
        value={state.bgColor}
        setValue={(val) => handleStateChange("bgColor", val)}
      />
      <hr />
      <ColorPickerBox
        label={"text Color"}
        data={{
          primary: "#0000FF",
          secondary: "#FF0000",
          dark: "#000000",
          light: "#FFFFFF",
        }}
        value={state.textColor}
        setValue={(val) => handleStateChange("textColor", val)}
      />
      <hr />
      <BorderPickerBox
        label={"border radius"}
        data={[
          { key: "rounded", label: "All" },
          { key: "rounded-start", label: "Start" },
          { key: "rounded-end", label: "End" },
          { key: "rounded-top", label: "Top" },
          { key: "rounded-bottom", label: "Bottom" },
          { key: "rounded-circle", label: "circle" },
          { key: "rounded-pill", label: "pill" },
        ]}
        onSelect={(position) => handleStateChange("borderRadius", position)}
      />
      <hr />

      <IconPickerBox
        data={["10", "25", "50", "75", "100"]}
        label={"background opacity"}
        value={state.bgOpacity}
        setValue={(val) => handleStateChange("bgOpacity", val)}
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

export default TagEditor;
