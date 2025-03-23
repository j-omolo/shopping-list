import React, { useState } from "react";


export default function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { name: input, bought: false }]);
      setInput("");
    }
  };

  const toggleBought = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2 className="title">Shopping List</h2>
      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add an item..."
          className="input"
        />
        <button onClick={addItem} className="add-button">Add</button>
      </div>
      <ul className="list">
        {items.map((item, index) => (
          <li key={index} className={`list-item ${item.bought ? "bought" : ""}`}>
            <span>{item.name}</span>
            <div className="button-group">
              <button onClick={() => toggleBought(index)} className="check-button">✓</button>
              <button onClick={() => removeItem(index)} className="delete-button">✗</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


