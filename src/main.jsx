import React from "react";
import ReactDOM from "react-dom/client";
import App1 from "./App1.jsx";
import "./index.css";
import ParentComponent from "./ParentComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App1 /> */}
    <ParentComponent />
  </React.StrictMode>
);