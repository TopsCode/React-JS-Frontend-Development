import React from 'react'

export default function Example2() {
    const [items, setItems] = useState(['Apple', 'Banana']);

    const addItem = () => {
      setItems([...items, 'Orange']);
    };
  
    return (
      <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
}