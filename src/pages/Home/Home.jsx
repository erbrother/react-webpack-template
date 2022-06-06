import React from "react";
import "./Home.css";
import "./Home.less";

import testImg from "../../assets/test.jpg";
const Home = () => {
  return (
    <>
      <div className="Home">I am Home page</div>
      <div>
        <img src={testImg} alt="" />
      </div>
    </>
  );
};

export default Home;
