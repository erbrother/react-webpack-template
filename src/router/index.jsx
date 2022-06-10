import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout/Layout.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/abc" element={<Layout />}>
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
