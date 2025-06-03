import { useEffect, useRef, useState } from "react";
import { MdOpacity } from "react-icons/md";
import { RenderComponent } from "../components/RenderComponent";

const TitleEditorSchema = [
  {
    label: "Title",
    placeholder: "Set Title",
    isTextarea: true,
    valueKey: "content",
    component: "InputBox",
  },
  {
    label: "Heading Variation",
    data: ["h1", "h2", "h3", "h4", "h5", "h6", "sub_header"],
    valueKey: "variation",
    component: "DropdownBox",
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
    label: "Start Endorment",
    placeholder: "Submit Svg",
    valueKey: "startEndorment",
    component: "InputBox",
  },
  {
    label: "End Endorment",
    placeholder: "Submit Svg",
    valueKey: "endEndorment",
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

const TitleEditor = ({ onChange, changedData, modalComponent }) => {
  const [state, setState] = useState({
    content: changedData?.title?.content || "",
    variation: changedData?.title?.variation || "",
    opacity: changedData?.title?.opacity?.replace("text-opacity-", "") || "",
    startEndorment: changedData?.title?.startEndorment || "",
    endEndorment: changedData?.title?.endEndorment || "",
    extraClass: changedData?.title?.extraClass || "",
    color: changedData?.title?.color || "",
  });

  useEffect(() => {
    setState({
      content: changedData?.title?.content || "",
      variation: changedData?.title?.variation || "",
      opacity: changedData?.title?.opacity?.replace("text-opacity-", "") || "",
      startEndorment: changedData?.title?.startEndorment || "",
      endEndorment: changedData?.title?.endEndorment || "",
      extraClass: changedData?.title?.extraClass || "",
      color: changedData?.title?.color || "",
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

      const updatedTitleData = {
        content: newState.content,
        variation: newState.variation,
        opacity: formattedOpacity,
        color: newState.color,
        startEndorment: newState.startEndorment,
        endEndorment: newState.endEndorment,
        extraClass: newState.extraClass,
      };

      onChange(updatedTitleData);
    }
  };

  const isDisabled = !state.content?.trim();

  return (
    <div className="p-3 bg-white rounded shadow-sm ">
      {TitleEditorSchema?.map((item, idx) => {
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
        className="transition-opacity"
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

export default TitleEditor;
