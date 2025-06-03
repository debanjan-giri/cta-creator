import ColorPickerBox from "./ColorPickerBox";
import DropdownBox from "./DropdownBox";
import InputBox from "./InputBox";
import { Selector } from "./Selector";

export const RenderComponent = ({ item, state, onChange, isDisabled }) => {
  const commonProps = {
    label: item?.label,
    placeholder: item?.placeholder,
    value: state[item?.valueKey],
    data: item?.data,
    isTextarea: item?.isTextarea,
    setValue: (val) => onChange(item?.valueKey, val),
  };

  switch (item.component) {
    case "InputBox":
      return <InputBox {...commonProps} isDisabled={isDisabled} />;
    case "DropdownBox":
      return <DropdownBox {...commonProps} isDisabled={isDisabled} />;
    case "ColorPickerBox":
      return <ColorPickerBox {...commonProps} isDisabled={isDisabled} />;
    case "Selector":
      return <Selector {...commonProps} isDisabled={isDisabled} />;
    default:
      return null;
  }
};
