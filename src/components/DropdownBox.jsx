import React from "react";

const DropdownBox = ({ value, setValue, label, data }) => {
  return (

      <div className="mb-3">
        <p>{label}</p>
        <select
          className="form-select"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="">Select an option</option>
          {data.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>    
      </div>

  );
};

export default DropdownBox;
