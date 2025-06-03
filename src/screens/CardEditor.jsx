import { useEffect, useRef, useState } from "react";
import cleanData from "../cleanData";
import { Eye } from "lucide-react";
import InputBox from "../components/InputBox";
import DropdownBox from "../components/DropdownBox";
import ColorPickerBox from "../components/ColorPickerBox";
import { Selector } from "../components/Selector";
import {
  CgBorderBottom,
  CgBorderLeft,
  CgBorderRight,
  CgBorderTop,
} from "react-icons/cg";
import { TbBorderCorners } from "react-icons/tb";
import { MdOpacity } from "react-icons/md";
import { RenderComponent } from "../components/RenderComponent";

const cardEditorSchema = [
  {
    label: "Background Image",
    valueKey: "cardbgImage",
    component: "InputBox",
    placeholder: "Image Url",
  },
  {
    label: "Background Color",
    valueKey: "cardbgcolor",
    component: "ColorPickerBox",
    data: {
      primary: "#0000FF",
      secondary: "#FF0000",
      dark: "#000000",
      light: "#FFFFFF",
    },
  },
  {
    label: "Text Color",
    valueKey: "color",
    component: "ColorPickerBox",
    data: {
      primary: "#0000FF",
      secondary: "#FF0000",
      dark: "#000000",
      light: "#FFFFFF",
    },
  },
  {
    label: "Card Opacity",
    valueKey: "cardbgopacity",
    component: "Selector",
    data: [
      { key: "25", label: "25%", icon: MdOpacity },
      { key: "50", label: "50%", icon: MdOpacity },
      { key: "75", label: "75%", icon: MdOpacity },
      { key: "100", label: "100%", icon: MdOpacity },
    ],
  },
  {
    label: "Border",
    valueKey: "border",
    component: "Selector",
    data: [
      { key: "border-top", label: "Top", icon: CgBorderTop },
      { key: "border-end", label: "End", icon: CgBorderRight },
      { key: "border-bottom", label: "Bottom", icon: CgBorderBottom },
      { key: "border-start", label: "Start", icon: CgBorderLeft },
      { key: "border", label: "All", icon: TbBorderCorners },
    ],
  },
  {
    label: "Border Color",
    valueKey: "borderColor",
    component: "ColorPickerBox",
    data: {
      "border-white": "#FFFFFF",
      "border-dark": "#000000",
      "border-light": "#FFFFFF",
      "border-info": "#0000FF",
      "border-warning": "#FF0000",
      "border-danger": "#FF0000",
      "border-success": "#00FF00",
      "border-secondary": "#FF0000",
      "border-primary": "#0000FF",
    },
  },
  {
    label: "Border Redius",
    valueKey: "borderRadius",
    component: "Selector",
    data: [
      { key: "rounded", label: "All", icon: TbBorderCorners },
      { key: "rounded-start", label: "Start", icon: CgBorderLeft },
      { key: "rounded-end", label: "End", icon: CgBorderRight },
      { key: "rounded-top", label: "Top", icon: CgBorderTop },
      { key: "rounded-bottom", label: "Bottom", icon: CgBorderBottom },
    ],
  },
  {
    label: "Border Opacity",
    valueKey: "borderOpacity",
    component: "Selector",
    data: [
      { key: "25", label: "25%", icon: MdOpacity },
      { key: "50", label: "50%", icon: MdOpacity },
      { key: "75", label: "75%", icon: MdOpacity },
      { key: "100", label: "100%", icon: MdOpacity },
    ],
  },
  {
    label: "Border Width",
    valueKey: "borderWidth",
    component: "DropdownBox",
    data: ["border-0", "border-1", "border-2", "border-3"],
  },
  {
    label: "Extra Class",
    valueKey: "extraClass",
    component: "InputBox",
    isTextarea: true,
    placeholder: "Bootstrap Class",
  },
];

const CardEditor = ({ onChange, changedData, modalComponent }) => {
  const [state, setState] = useState({
    cardbgImage: changedData?.cardStyle?.cardbgImage || "",
    cardbgcolor: changedData?.cardStyle?.cardbgcolor || "",
    color: changedData?.cardStyle?.color || "",
    cardbgopacity:
      changedData?.cardStyle?.cardbgopacity?.replace("bg-opacity-", "") || "",
    border: changedData?.cardStyle?.border || "",
    borderColor: changedData?.cardStyle?.borderColor || "",
    borderRadius: changedData?.cardStyle?.borderRadius || "",
    borderOpacity:
      changedData?.cardStyle?.borderOpacity?.replace("border-opacity-", "") ||
      "",
    borderWidth: changedData?.cardStyle?.borderWidth || "",
    extraClass: changedData?.cardStyle?.extraClass || "",
  });

  // update when template changes
  useEffect(() => {
    setState({
      cardbgImage: changedData?.cardStyle?.cardbgImage || "",
      cardbgcolor: changedData?.cardStyle?.cardbgcolor || "",
      color: changedData?.cardStyle?.color || "",
      cardbgopacity:
        changedData?.cardStyle?.cardbgopacity?.replace("bg-opacity-", "") || "",
      border: changedData?.cardStyle?.border || "",
      borderColor: changedData?.cardStyle?.borderColor || "",
      borderRadius: changedData?.cardStyle?.borderRadius || "",
      borderOpacity:
        changedData?.cardStyle?.borderOpacity?.replace("border-opacity-", "") ||
        "",
      borderWidth: changedData?.cardStyle?.borderWidth || "",
      extraClass: changedData?.cardStyle?.extraClass || "",
    });
  }, [changedData]);

  const handleStateChange = (key, value) => {
    const newState = { ...state, [key]: value };
    setState(newState);

    if (onChange) {
      const borderOpacity =
        key === "borderOpacity"
          ? `border-opacity-${value}`
          : newState.borderOpacity
          ? `border-opacity-${newState.borderOpacity}`
          : "";
      const cardbgopacity =
        key === "cardbgopacity"
          ? `bg-opacity-${value}`
          : newState.cardbgopacity
          ? `bg-opacity-${newState.cardbgopacity}`
          : "";

      const updatedTitleData = {
        cardbgImage: newState.cardbgImage,
        cardbgcolor: newState.cardbgcolor,
        color: newState.color,
        cardbgopacity: cardbgopacity,
        border: newState.border,
        borderColor: newState.borderColor,
        borderOpacity: borderOpacity,
        borderWidth: newState.borderWidth,
        extraClass: newState.extraClass,
        borderRadius: newState.borderRadius,
      };

      onChange(updatedTitleData);
    }
  };

  return (
    <div className="p-3 bg-white rounded shadow-sm ">
      {cardEditorSchema.map((item, idx) => (
        <div key={idx} className="mb-3">
          <RenderComponent
            item={item}
            state={state}
            onChange={handleStateChange}
          />
        </div>
      ))}
      <div>{modalComponent}</div>
    </div>
  );
};

export default CardEditor;
