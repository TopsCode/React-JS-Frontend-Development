import React from 'react'

export default function ObjectExample1() {
    const user = {
        name: 'Anjali Patel',
        occupation: 'Trainer / Developer',
      };
    
    return (
        <div>
          <h1>{user.name}</h1>
          <p>Occupation: {user.occupation}</p>
        </div>
    );
}