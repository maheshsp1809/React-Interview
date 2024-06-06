// ChildComponent.js
import React, { useState } from "react";
//I want u to show me inverse data flow
const ChildComponent = ({ onDataReceived }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onDataReceived(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChildComponent;
