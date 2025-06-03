import { useEffect, useRef, useState } from "react";
import { MdOpacity } from "react-icons/md";
import { RenderComponent } from "../components/RenderComponent";

const ParagraphEditorSchema = [
  {
    label: "Content",
    placeholder: "Set Title",
    isTextarea: true,
    valueKey: "content",
    component: "InputBox",
  },
  {
    label: "Color",
    data: {
      primary: "#0000FF",
      secondary: "#FF0000",
      dark: "#000000",
      light: "#FFFFFF",
    },
    valueKey: "color",
    component: "ColorPickerBox",
  },
  {
    label: "Text Opacity",
    data: [
      { key: "25", label: "25%", icon: MdOpacity },
      { key: "50", label: "50%", icon: MdOpacity },
      { key: "75", label: "75%", icon: MdOpacity },
      { key: "100", label: "100%", icon: MdOpacity },
    ],
    valueKey: "opacity",
    component: "Selector",
  },
  {
    label: "Bootstrap Class",
    placeholder: "Bootstrap Class",
    isTextarea: true,
    valueKey: "extraClass",
    component: "InputBox",
  },
];

const ParagraphEditor = ({ onChange, changedData, modalComponent }) => {
  const [state, setState] = useState({
    content: changedData?.paragraph?.content || "",
    color: changedData?.paragraph?.color || "",
    opacity:
      changedData?.paragraph?.opacity?.replace("text-opacity-", "") || "",
    extraClass: changedData?.paragraph?.extraClass || "",
  });

  useEffect(() => {
    setState({
      content: changedData?.paragraph?.content || "",
      color: changedData?.paragraph?.color || "",
      opacity:
        changedData?.paragraph?.opacity?.replace("text-opacity-", "") || "",
      extraClass: changedData?.paragraph?.extraClass || "",
    });
  }, [changedData]);

  const handleStateChange = (key, value) => {
    const newState = { ...state, [key]: value };
    setState(newState);
    if (onChange) {
      const formattedOpacity =
        key === "opacity"
          ? `text-opacity-${value}`
          : newState.opacity
          ? `text-opacity-${newState.opacity}`
          : "";

      const updatedParagraphData = {
        content: newState.content,
        color: newState.color,
        opacity: formattedOpacity,
        extraClass: newState.extraClass,
      };
      onChange(updatedParagraphData);
    }
  };

  const isDisabled = !state.content?.trim();
  return (
    <div className="p-3 bg-white rounded shadow-sm ">
      {ParagraphEditorSchema?.map((item, idx) => {
        return (
          <div key={idx} className="mb-3">
            <RenderComponent
              isDisabled={isDisabled}
              item={item}
              state={state}
              onChange={handleStateChange}
            />
          </div>
        );
      })}
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

export default ParagraphEditor;
