import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // Function is recreated on every render
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
