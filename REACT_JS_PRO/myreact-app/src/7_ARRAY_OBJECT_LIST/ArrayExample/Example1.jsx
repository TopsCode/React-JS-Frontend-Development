import React from 'react'

export default function Example1() {
    const items = ['Apple', 'Banana', 'Orange'];

    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
}
