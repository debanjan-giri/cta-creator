import React from "react";

const InputBox = ({ label, value, setValue, placeholder }) => {
  return (

      <div className="mb-3">
        <p>{label}</p>
        <input
          type="text"
          placeholder={placeholder}
          className="form-control"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
  
  );
};

export default InputBox;
