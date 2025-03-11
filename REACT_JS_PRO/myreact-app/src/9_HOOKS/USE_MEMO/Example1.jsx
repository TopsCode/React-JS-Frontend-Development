import React from 'react'

export default function Example1() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(10);
  
    const expensiveResult = useMemo(() => {
      console.log("Computing expensive result...");
      let result = 0;
      for (let i = 0; i < 1000000000; i++) {
        result += number;
      }
      return result;
    }, [number]); // Runs only when "number" changes
  
    return (
      <div>
        <h1>Expensive Result: {expensiveResult}</h1>
        <button onClick={() => setNumber(number + 1)}>Increase Number</button>
        <button onClick={() => setCount(count + 1)}>Increase Count ({count})</button>
      </div>
    );
}