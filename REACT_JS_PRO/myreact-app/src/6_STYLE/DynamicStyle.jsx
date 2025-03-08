import React, { useState } from "react";

function DynamicStyle() {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      style={{
        backgroundColor: isActive ? "green" : "red",
        color: "white",
        padding: "10px 20px",
        border: "none",
      }}
      onClick={() => setIsActive(!isActive)}
    >
      {isActive ? "Active" : "Inactive"}
    </button>
  );
}

export default DynamicStyle;
