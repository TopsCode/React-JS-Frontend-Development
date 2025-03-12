import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

function SolutionParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useCallback memoizes the function, preventing re-creation
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

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

export default SolutionParentComponent;
