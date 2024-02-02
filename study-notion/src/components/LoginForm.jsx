import React, { Fragment, useState } from "react";

// importing icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const formHandler = (e) => {
    setFormData((prevData) => (
      {
        ...prevData,
        [e.target.name]: e.target.value,
      }
    ));
  };

  return (
    <Fragment>
      <form>
        <label htmlFor="email">
          <p>
            Email Address <sup>*</sup>
          </p>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={formHandler}
          placeholder="abc@gmail.com"
        />

        <label htmlFor="password">
          <p>
            Password <sup>*</sup>
          </p>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={formHandler}
          placeholder="*********"
        />
        <span className="cursor-pointer"  onClick={()=> setShowPassword((prev) => !prev)}>
          {!showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      </form>
    </Fragment>
  );
};

export default LoginForm;
