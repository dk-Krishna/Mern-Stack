import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const formHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <p className="flex flex-row gap-x-4">
          <label htmlFor="firstName" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              required
              name="firstName"
              id="firstName"
              onChange={formHandler}
              placeholder="Krushna"
              value={formData.firstName}
              className="focus:border-transparent focus:outline-none text-richblack-5 w-full p-[12px] bg-richblack-800 rounded-[0.5rem] border-b-2 border-richblack-100"
            />
          </label>

          <label htmlFor="lastName" className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup>*</sup>
            </p>
            <input
              type="text"
              required
              name="lastName"
              id="lastName"
              onChange={formHandler}
              placeholder="Dike"
              value={formData.lastName}
              className="focus:border-transparent focus:outline-none text-richblack-5 w-full p-[12px] bg-richblack-800 rounded-[0.5rem] border-b-2 border-richblack-100"
            />
          </label>
        </p>

        <label htmlFor="email" className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={formHandler}
            placeholder="krushna@gmail.com"
            className="focus:border-transparent focus:outline-none text-richblack-5 w-full p-[12px] bg-richblack-800 rounded-[0.5rem] border-b-2 border-richblack-100"
          />
        </label>

        <p className="flex flex-row gap-x-4">
          <label htmlFor="password" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={formHandler}
              placeholder="*********"
              className="focus:border-transparent focus:outline-none text-richblack-5 w-full p-[12px] bg-richblack-800 rounded-[0.5rem] border-b-2 border-richblack-100"
            />

            <span
              className="cursor-pointer absolute right-3 top-[38px]"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {!showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label htmlFor="confirmPassword" className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={formHandler}
              placeholder="*********"
              className="focus:border-transparent focus:outline-none text-richblack-5 w-full p-[12px] bg-richblack-800 rounded-[0.5rem] border-b-2 border-richblack-100"
            />

            <span
              className="cursor-pointer absolute right-3 top-[38px]"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {!showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </p>

        <button
          type="submit"
          className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] mt-6 py-[8px]"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
