import { useEffect, useRef, useState } from "react";
import InputBox from "../components/InputBox";
import DropdownBox from "../components/DropdownBox";
import IconPickerBox from "../components/IconPickerBox";
import ColorPickerBox from "../components/ColorPickerBox";
import FloatingInputBox from "../components/FloatingInputBox";
import cleanData from "../cleanData";

const TitleEditor = ({ onChange, changedData }) => {
  const [state, setState] = useState({
    content: changedData?.title?.content || "",
    variation: changedData?.title?.variation || "",
    opacity: changedData?.title?.opacity?.replace("opacity-", "") || "",
    startEndorment: changedData?.title?.startEndorment || "",
    endEndorment: changedData?.title?.endEndorment || "",
    extraClass: changedData?.title?.extraClass || "",
    color: changedData?.title?.color || "",
  });

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    const selectedValues = {
      content: state.content,
      variation: state.variation,
      opacity: state.opacity ? `opacity-${state.opacity}` : "",
      color: state.color,
      startEndorment: state.startEndorment,
      endEndorment: state.endEndorment,
      extraClass: state.extraClass,
    };

    const clean = cleanData(selectedValues);
    onChangeRef.current(clean, "title");
  }, [state]);

  const handleStateChange = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value.trim() === "" ? "" : value }));
  };

  return (
    <div>
      <InputBox
        label={"Title"}
        value={state.content}
        setValue={(val) => handleStateChange("content", val)}
        placeholder={"Set Title"}
      />
      <hr />
      <DropdownBox
        label={"Variation"}
        value={state.variation}
        setValue={(val) => handleStateChange("variation", val)}
        data={["H1", "H2", "H3", "H4", "H5", "H6", "sub_header"]}
      />
      <hr />
      <IconPickerBox
        data={["10", "25", "50", "75", "100"]}
        label={"Opacity"}
        value={state.opacity}
        setValue={(val) => handleStateChange("opacity", val)}
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

export default TitleEditor;
