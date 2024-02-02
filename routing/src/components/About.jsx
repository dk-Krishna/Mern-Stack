import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const clickHanlder = () => {
    navigate(-1); // back to previous page
  };

  return (
    <>
      <div>About</div>
      <button onClick={clickHanlder}>Go Back</button>
    </>
  );
};

export default About;
