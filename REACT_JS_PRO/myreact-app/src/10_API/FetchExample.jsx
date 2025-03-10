import React, { useEffect, useState } from 'react'

export default function FetchExample() {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    return (
      <div>
        <h1>API Data</h1>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </div>
    );
}