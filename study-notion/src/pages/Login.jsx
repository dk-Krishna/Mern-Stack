import React from 'react';

// importing components
import Template from '../components/Template';

// importing images
import loginImg from "../assets/login.png"

const Login = ({ setIsAuthenticated }) => {  
  return ( 
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsAuthenticated}
    />
  );
}

export default Login;