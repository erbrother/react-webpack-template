import React, { useState } from "react";
import "./Home.css";
import "./Home.less";

import testImg from "../../assets/test.png";
let i = 0
const Home = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <div className="Home">I am Home page</div>
      <div>
        <img src={testImg} alt="" /> {number}
      </div>
    </>
  );
};

export default Home;
