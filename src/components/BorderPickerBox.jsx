import { useState } from "react";

const BorderPickerBox = ({ onSelect, label, data }) => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handlePositionClick = (position) => {
    setSelectedPosition(position);
    onSelect(position);
  };
  const Color = (type) => {
    switch (type) {
      case "rounded-top":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              borderTop: `5px solid ${
                selectedPosition === type ? "#0000FF" : ""
              }`,
              opacity: selectedPosition === type ? "0.7" : "0.13",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          ></div>
        );
      case "rounded-end":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRight: `5px solid ${
                selectedPosition === type ? "#0000FF" : ""
              }`,
              opacity: selectedPosition === type ? "0.7" : "0.13",
              borderBottomRightRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          ></div>
        );
      case "rounded-bottom":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              borderBottom: `5px solid ${
                selectedPosition === type ? "#0000FF" : ""
              }`,
              opacity: selectedPosition === type ? "0.7" : "0.13",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          ></div>
        );
      case "rounded-start":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              borderLeft: `5px solid ${
                selectedPosition === type ? "#0000FF" : ""
              }`,
              opacity: selectedPosition === type ? "0.7" : "0.13",
              borderTopLeftRadius: "10px", // Rounded only on the right
              borderBottomLeftRadius: "10px",
            }}
          ></div>
        );
      case "rounded":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              border: `5px solid ${selectedPosition === type ? "#0000FF" : ""}`,
              opacity: selectedPosition === type ? "0.7" : "0.13",
              borderRadius: "10px",
            }}
          ></div>
        );
      case "rounded-circle":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              border: `5px solid ${selectedPosition === type ? "#0000FF" : ""}`,
              opacity: selectedPosition === type ? "0.7" : "0.13",
              borderRadius: "20px",
            }}
          ></div>
        );
      case "rounded-pill":
        return (
          <div
            style={{
              width: "100%",
              height: "60%",
              border: `5px solid ${selectedPosition === type ? "#0000FF" : ""}`,
              opacity: selectedPosition === type ? "0.7" : "0.13",
              borderRadius: "10px",
            }}
          ></div>
        );
      case "border-top":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              borderTop: `5px solid ${
                selectedPosition === type ? "#0000FF" : ""
              }`,
              opacity: `${selectedPosition === type ? "0.7" : "0.13"}`,
            }}
          ></div>
        );
      case "border-end":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRight: `5px solid ${
                selectedPosition === type ? "#0000FF" : ""
              }`,
              opacity: `${selectedPosition === type ? "0.7" : "0.13"}`,
            }}
          ></div>
        );
      case "border-bottom":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              borderBottom: `5px solid ${
                selectedPosition === type ? "#0000FF" : ""
              }`,
              opacity: `${selectedPosition === type ? "0.7" : "0.13"}`,
            }}
          ></div>
        );
      case "border-start":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              borderLeft: `5px solid ${
                selectedPosition === type ? "#0000FF" : ""
              }`,
              opacity: `${selectedPosition === type ? "0.7" : "0.13"}`,
            }}
          ></div>
        );
      case "border":
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              border: `5px solid ${selectedPosition === type ? "#0000FF" : ""}`,
              opacity: `${selectedPosition === type ? "0.7" : "0.13"}`,
            }}
          ></div>
        );
    }
  };

  return (
    <div className="mb-3">
      <p>{label}</p>
      <div className="d-flex flex-wrap gap-2 p-3 bg-light rounded">
        {data.map((position) => {
          return (
            <button
              key={position.key}
              onClick={() => handlePositionClick(position.key)}
              className={`border ${
                selectedPosition === position.key ? "border-primary" : ""
              } border-2 rounded-3 bg-white p-2`}
              style={{ width: "60px", height: "60px" }}
            >
              <div
                className=" rounded bg-secondary bg-light"
                style={{ width: "40px", height: "40px" }}
              >
                {Color(position.key)}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BorderPickerBox;
