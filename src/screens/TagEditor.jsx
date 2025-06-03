import { useEffect, useRef, useState } from "react";
import InputBox from "../components/InputBox";
import { Selector } from "../components/Selector";
import ColorPickerBox from "../components/ColorPickerBox";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MdOpacity, MdOutlineCircle } from "react-icons/md";
import { TbBorderCorners, TbBorderTop } from "react-icons/tb";
import { RxBorderBottom, RxBorderLeft, RxBorderRight } from "react-icons/rx";
import {
  CgBorderBottom,
  CgBorderLeft,
  CgBorderRight,
  CgBorderTop,
} from "react-icons/cg";
import { RenderComponent } from "../components/RenderComponent";

const TagEditorSchema = [
  {
    label: "Tag",
    placeholder: "Set Tag",
    isTextarea: true,
    valueKey: "text",
    component: "InputBox",
  },
  {
    label: "Tag Color",
    data: {
      primary: "#0000FF",
      secondary: "#FF0000",
      dark: "#000000",
      light: "#FFFFFF",
    },
    valueKey: "textColor",
    component: "ColorPickerBox",
  },
  {
    label: "Tag position",
    data: [
      { key: "left", label: "Left", icon: ArrowLeft },
      { key: "right", label: "Right", icon: ArrowRight },
    ],
    valueKey: "position",
    component: "Selector",
  },
  {
    label: "Background Color",
    data: {
      primary: "#0000FF",
      secondary: "#FF0000",
      dark: "#000000",
      light: "#FFFFFF",
    },
    valueKey: "bgColor",
    component: "ColorPickerBox",
  },
  {
    label: "Border Redius",
    data: [
      { key: "rounded", label: "All", icon: TbBorderCorners },
      { key: "rounded-start", label: "Start", icon: CgBorderLeft },
      { key: "rounded-end", label: "End", icon: CgBorderRight },
      { key: "rounded-top", label: "Top", icon: CgBorderTop },
      { key: "rounded-bottom", label: "Bottom", icon: CgBorderBottom },
      { key: "rounded-circle", label: "circle", icon: MdOutlineCircle },
      { key: "rounded-pill", label: "pill", icon: MdOpacity },
    ],
    valueKey: "borderRadius",
    component: "Selector",
  },
  {
    label: "Background Opacity",
    data: [
      { key: "25", label: "25%", icon: MdOpacity },
      { key: "50", label: "50%", icon: MdOpacity },
      { key: "75", label: "75%", icon: MdOpacity },
      { key: "100", label: "100%", icon: MdOpacity },
    ],
    valueKey: "bgOpacity",
    component: "Selector",
  },
  {
    label: "Custom Css",
    placeholder: "Bootstrap Class",
    isTextarea: true,
    valueKey: "extraClass",
    component: "InputBox",
  },
];

const TagEditor = ({ onChange, changedData, modalComponent }) => {
  const [state, setState] = useState({
    position: changedData?.tag?.position || "",
    text: changedData?.tag?.text || "",
    bgColor: changedData?.tag?.bgColor || "",
    textColor: changedData?.tag?.textColor || "",
    borderRadius: changedData?.tag?.borderRadius || "",
    bgOpacity: changedData?.tag?.bgOpacity?.replace("bg-opacity-", "") || "",
    extraClass: changedData?.tag?.extraClass || "",
  });

  useEffect(() => {
    setState({
      position: changedData?.tag?.position || "",
      text: changedData?.tag?.text || "",
      bgColor: changedData?.tag?.bgColor || "",
      textColor: changedData?.tag?.textColor || "",
      borderRadius: changedData?.tag?.borderRadius || "",
      bgOpacity: changedData?.tag?.bgOpacity?.replace("bg-opacity-", "") || "",
      extraClass: changedData?.tag?.extraClass || "",
    });
  }, [changedData]);

  const handleStateChange = (key, value) => {
    const newState = { ...state, [key]: value };
    setState(newState);

    if (onChange) {
      const formattedBgOpacity =
        key === "bgOpacity" ? `bg-opacity-${value}` : "";

      const updatedTitleData = {
        text: newState.text,
        position: newState.position,
        bgColor: newState.bgColor,
        textColor: newState.textColor,
        borderRadius: newState.borderRadius,
        bgOpacity: formattedBgOpacity,
        extraClass: newState.extraClass,
      };
      onChange(updatedTitleData);
    }
  };

  const isDisabled = !state.text?.trim();

  return (
    <div className="p-3 bg-white rounded shadow-sm ">
      {TagEditorSchema?.map((item, idx) => (
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

export default TagEditor;
