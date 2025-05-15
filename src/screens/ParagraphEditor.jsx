import { useEffect, useRef, useState } from "react";
import InputBox from "../components/InputBox";
import DropdownBox from "../components/DropdownBox";
import IconPickerBox from "../components/IconPickerBox";
import ColorPickerBox from "../components/ColorPickerBox";
import FloatingInputBox from "../components/FloatingInputBox";
import cleanData from "../cleanData";

const ParagraphEditor = ({ onChange, changedData }) => {
  const [state, setState] = useState({
    content: changedData?.paragraph?.content || "",
    color: changedData?.paragraph?.color || "",
    opacity:
      changedData?.paragraph?.opacity?.replace("text-opacity-", "") || "",
    extraClass: changedData?.paragraph?.extraClass || "",
  });

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    const selectedValues = { 
      content: state.content,
      opacity: state.opacity ? `text-opacity-${state.opacity}` : "",
      color: state.color,
      extraClass: state.extraClass,
    };

    const clean = cleanData(selectedValues);
    onChangeRef.current(clean, "paragraph");
  }, [state]);

  const handleStateChange = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value.trim() === "" ? "" : value }));
  };

  return (
    <div>
      <InputBox
        label={"Content"}
        value={state.content}
        setValue={(val) => handleStateChange("content", val)}
        placeholder={"Set Title"}
      />
      <hr />
      <ColorPickerBox
        label={"Color"}
        data={{
          primary: "#0000FF",
          secondary: "#FF0000",
          dark: "#000000",
          light: "#FFFFFF",
        }}
        value={state.color}
        setValue={(val) => handleStateChange("color", val)}
      />
      <hr />
      <IconPickerBox
        data={["10", "25", "50", "75", "100"]}
        label={"Opacity"}
        value={state.opacity}
        setValue={(val) => handleStateChange("opacity", val)}
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

export default ParagraphEditor;
