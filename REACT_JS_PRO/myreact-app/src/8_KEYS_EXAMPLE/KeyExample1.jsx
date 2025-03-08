import React from 'react'

export default function KeyExample1() {
    const fruits = ['Apple', 'Banana', 'Orange'];

    return (
      <ul>
        {
        fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    );
}

