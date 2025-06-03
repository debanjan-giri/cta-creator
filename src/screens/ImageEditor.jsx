import { useRef, useEffect, useState } from "react";
import cleanData from "../cleanData";
import InputBox from "../components/InputBox";
import DropdownBox from "../components/DropdownBox";

import { Selector } from "../components/Selector";
import BootstrapVisualController from "../components/BootstrapModal";
import {
  ArrowUpRight,
  ArrowUpLeft,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  AlignCenter,
  ArrowDown,
} from "lucide-react";
import { RenderComponent } from "../components/RenderComponent";

const ImageEditorSchema = [
  {
    label: "Image Url",
    placeholder: "Image Url",
    valueKey: "url",
    component: "InputBox",
  },
  {
    label: "Size in pixels",
    placeholder: "Size in pixels",
    valueKey: "size",
    component: "InputBox",
  },
  {
    label: "Select Position",
    data: [
      { key: "right", label: "Right", icon: ArrowRight },
      { key: "left", label: "Left", icon: ArrowLeft },
      { key: "top", label: "Top", icon: ArrowUp },
      { key: "bottom", label: "Bottom", icon: ArrowDown },
      { key: "top-right", label: "Top Right", icon: ArrowUpRight },
      { key: "top-left", label: "Top Left", icon: ArrowUpLeft },
      { key: "bottom-left", label: "Bottom Left", icon: ArrowDownLeft },
      {
        key: "bottom-right",
        label: "Bottom Right",
        icon: ArrowDownRight,
      },
      { key: "top-center", label: "Top Center", icon: AlignCenter },
    ],
    valueKey: "position",
    component: "Selector",
  },
  {
    label: "Alt Text",
    placeholder: "Alt Text",
    valueKey: "alt",
    component: "InputBox",
  },
  {
    label: "Custom Css",
    placeholder: "Bootstrap Class",
    isTextarea: true,
    valueKey: "extraClass",
    component: "InputBox",
  },
];

const ImageEditor = ({ onChange, changedData, modalComponent }) => {
  const [state, setState] = useState({
    url: changedData?.imageObject?.[0]?.url || "",
    size: changedData?.imageObject?.[0]?.size.replace("px", "") || "",
    position: changedData?.imageObject?.[0]?.position || "",
    alt: changedData?.imageObject?.[0]?.alt || "",
    extraClass: changedData?.imageObject?.[0]?.extraClass || "",
  });

  useEffect(() => {
    setState({
      url: changedData?.imageObject?.[0]?.url || "",
      size: changedData?.imageObject?.[0]?.size.replace("px", "") || "",
      position: changedData?.imageObject?.[0]?.position || "",
      alt: changedData?.imageObject?.[0]?.alt || "",
      extraClass: changedData?.imageObject?.[0]?.extraClass || "",
    });
  }, [changedData]);

  const handleStateChange = (key, value) => {
    const newState = { ...state, [key]: value };
    setState(newState);

    if (onChange) {
      const updatedImageData = [
        {
          url: newState.url,
          size: `${newState.size}px`, // Always add px to the current size
          position: newState.position,
          alt: newState.alt,
          extraClass: newState.extraClass,
        },
      ];

      onChange(updatedImageData);
    }
  };

  const isDisabled = !state.url?.trim();
  console.log("ImageEditor", isDisabled);

  return (
    <div className="p-3 bg-white rounded shadow-sm ">
      {ImageEditorSchema?.map((item, idx) => (
         <div key={idx} className="mb-3">
        <RenderComponent
          key={idx}
          isDisabled={isDisabled}
          item={item}
          state={state}
          onChange={handleStateChange}
        />
      </div>
      ))}
      <div
        style={{
          opacity: isDisabled ? 0.5 : 1,
          pointerEvents: isDisabled ? "none" : "auto",
        }}
      >
        {modalComponent}
      </div>
    </div>
  );
};

export default ImageEditor;
