// ParentComponent.js
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [message, setMessage] = useState("");

  // Define a callback function to handle data from the child component
  const handleDataFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {message}</p>
      <ChildComponent onDataReceived={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;
