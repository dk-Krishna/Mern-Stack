import React, { Fragment } from "react";

// importing components
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

// importing icons
import { FcGoogle } from "react-icons/fc";

// importing image
import frameImg from "../assets/frame.png";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <Fragment>
      <div className="w-11/12 flex justify-between max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
        <div className="w-11/12 max-w-[450px]">
          <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
            {title}
          </h1>

          <p className="text-[1.125rem] leading[1.625rem] mt-4">
            <span className="text-richblack-100">{desc1}</span>
            <br />
            <span className="text-blue-100 italic">{desc2}</span>
          </p>

          {formType === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}

          <div className="flex w-full items-center my-4 gap-x-2">
            <div className="w-full h-[1px] bg-richblack-700"></div>
            <p className="text-richblack-700">OR</p>
            <div className="w-full h-[1px] bg-richblack-700"></div>
          </div>

          <button className="w-full rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] mt-6">
            {formType === "signup" ? (
              <p className="flex justify-center items-center gap-x-2">
                <FcGoogle /> Sign Up with Google
              </p>
            ) : (
              <p className="flex justify-center items-center gap-x-2">
                <FcGoogle /> Sign In with Google
              </p>
            )}
          </button>
        </div>

        <div className="relative w-11/12 max-w-[450px]">
          <img src={frameImg} alt="Pattern" width={558} height={504} />
          <img
            src={image}
            alt="Student"
            width={558}
            height={504}
            className="absolute -top-4 right-4"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Template;
