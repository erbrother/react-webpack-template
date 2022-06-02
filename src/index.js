import React from "react";
import ReactDom from "react-dom";

export default function App() {
  return (
    <div>
      <h2>我是react</h2>
    </div>
  );
}

const root = document.getElementById("root");

ReactDom.render(<App />, root);
