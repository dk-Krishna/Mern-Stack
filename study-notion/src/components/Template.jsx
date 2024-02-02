import React, { Fragment } from "react";

// importing components
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

// importing image
import frameImg from "../assets/frame.png";

const Template = ({
  title,
  desc1,
  desc2,
  image,
  formType,
  setIsAuthenticated,
}) => {
  return (
    <Fragment>
      <div>
        <div>
          <h1>{title}</h1>

          <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
          </p>

          {formType === "signup" ? <SignupForm /> : <LoginForm />}

          <div>
            <div></div>
            <p>OR</p>
            <div></div>
          </div>

          <button>
            {
                formType === "signup" ? (
                    <p>Sign Up with Google</p>
                ) : (
                    <p>Sign In with Google</p>
                )
            }
          </button>
        </div>

        <div>
          <img src={frameImg} alt="Pattern" width={558} height={504} />
          <img src={image} alt="Student" width={558} height={504} />
        </div>
      </div>
    </Fragment>
  );
};

export default Template;
