import React from 'react'

export default function ArrayObjectExample() {
    const items = [
        { id: 1, name: 'Apple', price: 1.2 },
        { id: 2, name: 'Banana', price: 0.5 },
        { id: 3, name: 'Orange', price: 0.8 },
    ];
    
    return (
    <ul>
        {items.map((item) => (
        <li key={item.id}>
            {item.name} - ${item.price}
        </li>
        ))}
    </ul>
    );
}


