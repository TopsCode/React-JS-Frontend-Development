import React, { useState, useEffect } from "react";

export default function FetchDataComponent() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  const fetchData = () => {
    console.log("Fetching data...");
    setData("Fetched Data");
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Problem: fetchData is a new function on every render

  return (
    <div>
      <p>Data: {data}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
}


