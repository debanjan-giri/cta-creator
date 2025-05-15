import { Eye } from "lucide-react";
import React from "react";

const IconPickerBox = ({ value, setValue, data, label }) => {
  return (
    <div className="mb-3">
      <p>{label}</p>
      <div className="d-flex gap-2">
        {data.map((item) => (
          <div
            key={item}
            onClick={() => setValue(item)}
            className="p-2"
            style={{ cursor: "pointer" }}
          >
            <div
              className={` border border-2  p-2 rounded rounded-1 ${
                value === item
                  ? "bg-primary border-primary"
                  : "border-black opacity-50"
              }`}
            >
              <Eye color={value === item ? "white" : "black"} />
            </div>
            <span className={`${value === item ? "text-primary" : ""}`}>
              {item}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconPickerBox;
