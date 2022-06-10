import React from "react";
import { createRoot } from 'react-dom/client';
import Home from "./pages/Home/Home.jsx";

export default function App() {
  return (
    <div>
      <h2>我是react</h2>

      <Home />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<App />);
