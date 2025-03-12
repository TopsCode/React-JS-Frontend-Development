import React, { useState, useEffect, useCallback } from "react";

export default function FetchDataComponent() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  const fetchData = useCallback(() => {
    console.log("Fetching data...");
    setData("Fetched Data");
  }, []); //  Function is memoized

  useEffect(() => {
    fetchData();
  }, [fetchData]); //  useEffect will not re-run unless fetchData changes

  return (
    <div>
      <p>Data: {data}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
}


