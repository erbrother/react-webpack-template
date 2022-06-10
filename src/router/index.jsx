import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Layout from "../pages/Layout/Layout.jsx";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const About = lazy(() => import("../pages/About/About.jsx"));

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
    </Router>
  );
};

export default App;
