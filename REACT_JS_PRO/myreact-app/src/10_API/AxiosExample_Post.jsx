import axios from 'axios';
import React, { useState } from 'react'

export default function AxiosExample_Post() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    const postData = async () => {
      try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
          title: "React with Axios",
          body: "This is a sample post request using Axios!",
          userId: 1
        });
  
        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
  
    return (
      <div>
        <h2>Axios POST Request Example</h2>
        <button onClick={postData}>Send POST Request</button>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
      </div>
    );
}