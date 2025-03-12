import React from "react";

function ChildComponent({ handleClick }) {
  console.log("ChildComponent rendered!");
  return <button onClick={handleClick}>Click Me</button>;
}

export default React.memo(ChildComponent);
