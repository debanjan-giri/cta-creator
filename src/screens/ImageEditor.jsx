import { useRef, useEffect, useState } from "react";
import cleanData from "../cleanData";
import FloatingInputBox from "../components/FloatingInputBox";
import DropdownBox from "../components/DropdownBox";
import InputBox from "../components/InputBox";
import { PositionSelector } from "../components/PositionBox";

const ImageEditor = ({ onChange , changedData }) => {
  const [state, setState] = useState({
    url: changedData?.imageObject?.url || "",
    size: changedData?.imageObject?.size || "",
    position: changedData?.imageObject?.position || "",
    alt: changedData?.imageObject?.alt || "",
    extraClass: changedData?.imageObject?.extraClass || "",
  });

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    const selectedValues = {
      url: state.url,
      size: state.size,
      position: state.position,
      alt: state.alt,
      extraClass: state.extraClass,
    };

    const clean = cleanData(selectedValues);
    onChangeRef.current(clean, "imageObject");
  }, [state]);

  const handleStateChange = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value.trim() === "" ? "" : value }));
  };

  return (
    <div>
      <InputBox
        label={"Url"}
        placeholder={"Image Url"}
        value={state.url}
        setValue={(val) => handleStateChange("url", val)}
      />
      <hr />

      <div className="d-flex gap-3">
        <DropdownBox
          label={"Height"}
          value={state.size}
          setValue={(val) => handleStateChange("size", val)}
          data={["H-25", "H-50", "H-75", "H-100"]}
        />
        <DropdownBox
          label={"Width"}
          value={state.size}
          setValue={(val) => handleStateChange("size", val)}
          data={["W-25", "W-50", "W-75", "W-100"]}
        />
      </div>
      <hr />
      <PositionSelector
        label="Select Position"
        data={[
          { key: "right", label: "Right" },
          { key: "left", label: "Left" },
          { key: "top", label: "Top" },
          { key: "bottom", label: "Bottom" },
          { key: "top-right", label: "Top Right" },
          { key: "top-left", label: "Top Left" },
          { key: "bottom-left", label: "Bottom Left" },
          { key: "bottom-right", label: "Bottom Right" },
          { key: "top-center", label: "Top Center" },
        ]}
        onSelect={(position) => handleStateChange("position", position)}
      />
      <hr />

      <InputBox
        label={"Alt Text"}
        value={state.alt}
        setValue={(val) => handleStateChange("alt", val)}
        placeholder={"Enter Alt Text"}
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

export default ImageEditor;
