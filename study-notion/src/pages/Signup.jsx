import React from 'react';

// importing components
import Template from '../components/Template';

// importing images
import signupImg from "../assets/signup.png";

const Signup = ({ setIsAuthenticated }) => {
  return (
    <>
    <Template
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
      setIsLoggedIn={setIsAuthenticated}
    />
    </>
  );
}

export default Signup;