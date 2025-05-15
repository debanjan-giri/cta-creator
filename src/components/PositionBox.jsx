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
import { useState } from "react";

const positionIcons = {
  right: ArrowRight,
  left: ArrowLeft,
  top: ArrowUp,
  bottom: ArrowDown,
  "top-right": ArrowUpRight,
  "top-left": ArrowUpLeft,
  "bottom-left": ArrowDownLeft,
  "bottom-right": ArrowDownRight,
  "top-center": AlignCenter,
};

export const PositionSelector = ({ onSelect, label, data }) => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handlePositionClick = (position) => {
    setSelectedPosition(position);
    onSelect(position);
  };

  return (
    <div className="mb-3">
      <p>{label}</p>
      <div className="d-flex flex-wrap gap-2 p-3 bg-light rounded">
        {data &&
          Array.isArray(data) &&
          data?.length > 0 &&
          data.map((position) => {
            const IconComponent = positionIcons[position.key] || AlignCenter;
            return (
              <button
                key={position.key}
                onClick={() => handlePositionClick(position.key)}
                className={`d-flex flex-column align-items-center justify-content-center p-2 rounded border transition-all text-center 
              ${
                selectedPosition === position.key
                  ? "bg-primary text-white"
                  : "bg-white"
              }`}
                style={{
                  width: "62px",
                  height: "68px",
                  minWidth: "62px",
                  overflow: "hidden",
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                }}
              >
                <IconComponent
                  className={`mb-1 ${
                    selectedPosition === position.key
                      ? "text-white"
                      : "text-dark"
                  }`}
                  style={{ fontSize: "20px" }}
                />
                <span
                  className={`small text-wrap ${
                    selectedPosition === position.key
                      ? "text-white"
                      : "text-dark"
                  }`}
                  style={{
                    fontSize: "12px",
                    lineHeight: "12px",
                    maxWidth: "100%",
                  }}
                >
                  {position.label}
                </span>
              </button>
            );
          })}
      </div>
    </div>
  );
};
