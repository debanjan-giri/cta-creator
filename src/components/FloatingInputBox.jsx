import React from "react";

const FloatingInputBox = ({ value, setValue, label, placeholder }) => {
  return (
    <div className="mb-3">
      <p>{label}</p>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label>{placeholder}</label>
      </div>
    </div>
  );
};

export default FloatingInputBox;
