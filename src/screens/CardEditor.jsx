import { useEffect, useRef, useState } from "react";
import cleanData from "../cleanData";
import { Eye } from "lucide-react";
import FloatingInputBox from "../components/FloatingInputBox";
import DropdownBox from "../components/DropdownBox";
import IconPickerBox from "../components/IconPickerBox";
import ColorPickerBox from "../components/ColorPickerBox";
import InputBox from "../components/InputBox";
import BorderPickerBox from "../components/BorderPickerBox";

const CardEditor = ({ onChange, changedData }) => {
  const [state, setState] = useState({
    cardbgImage: changedData?.cardStyle?.cardbgImage || "",
    cardbgcolor: changedData?.cardStyle?.cardbgcolor || "",
    color: changedData?.cardStyle?.color || "",
    cardbgopacity: changedData?.cardStyle?.cardStyle || "",
    border: changedData?.cardStyle?.border || "",
    borderColor: changedData?.cardStyle?.borderColor || "",
    border_radius: changedData?.cardStyle?.border_radius || "",
    borderOpacity:
      changedData?.cardStyle?.borderOpacity?.replace("opacity-", "") || "",
    borderWidth: changedData?.cardStyle?.borderWidth || "",
    extraClass: changedData?.cardStyle?.extraClass || "",
  });

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    const selectedValues = {
      cardbgImage: state.cardbgImage,
      cardbgcolor: state.cardbgcolor,
      color: state.color,
      cardbgopacity: state.cardbgopacity,
      border: state.border,
      borderColor: state.borderColor,
      border_radius: state.border_radius,
      borderOpacity: state.borderOpacity
        ? `opacity-${state.borderOpacity}`
        : "",
      borderWidth: state.borderWidth,
      extraClass: state.extraClass,
    };

    const clean = cleanData(selectedValues);
    onChangeRef.current(clean, "cardStyle");
  }, [state]);

  const handleStateChange = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value.trim() === "" ? "" : value }));
  };

  return (
    <div>
      <InputBox
        label={"Background Image"}
        placeholder={"Image Url"}
        value={state.cardbgImage}
        setValue={(val) => handleStateChange("cardbgImage", val)}
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
        value={state.cardbgcolor}
        setValue={(val) => handleStateChange("cardbgcolor", val)}
      />

      <hr />
      <ColorPickerBox
        label={"Text Color"}
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
        data={["0.00", "1"]}
        label={"card opacity"}
        value={state.cardbgopacity}
        setValue={(val) => handleStateChange("cardbgopacity", val)}
      />
      <hr />
      <BorderPickerBox
        label={"Border"}
        data={[
          { key: "border-top", label: " Top" },
          { key: "border-end", label: "End" },
          { key: "border-bottom", label: "Bottom" },
          { key: "border-start", label: "Start" },
          { key: "border", label: "All" },
        ]}
        onSelect={(position) => handleStateChange("border", position)}
      />
      <hr />

      <ColorPickerBox
        label={"Variation"}
        data={{
          "border-white": "#FFFFFF",
          "border-dark": "#000000",
          "border-light": "#FFFFFF",
          "border-info": "#0000FF",
          "border-warning": "#FF0000",
          "border-danger": "#FF0000",
          "border-success": "#00FF00",
          "border-secondary": "#FF0000",
          "border-primary": "#0000FF",
        }}
        value={state.variation}
        setValue={(val) => handleStateChange("variation", val)}
      />
      <hr />
      <BorderPickerBox
        label={"Border Radius"}
        data={[
          { key: "rounded", label: "All" },
          { key: "rounded-start", label: "Start" },
          { key: "rounded-end", label: "End" },
          { key: "rounded-top", label: "Top" },
          { key: "rounded-bottom", label: "Bottom" },
        ]}
        onSelect={(position) => handleStateChange("border_radius", position)}
      />

      <IconPickerBox
        data={["10", "25", "50", "75", "100"]}
        label={"border opacity"}
        value={state.borderOpacity}
        setValue={(val) => handleStateChange("borderOpacity", val)}
      />

      {/* slider bar or increment bar */}
      <DropdownBox
        label={"border width"}
        value={state.borderWidth}
        setValue={(val) => handleStateChange("borderWidth", val)}
        data={["border-0", "border-1", "border-2", "border-3"]}
      />
      <FloatingInputBox
        label={"Extra Class"}
        placeholder={"Bootstrap Class"}
        value={state.extraClass}
        setValue={(val) => handleStateChange("extraClass", val)}
      />
    </div>
  );
};

export default CardEditor;
