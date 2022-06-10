import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./router/index.jsx";

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<App />);
