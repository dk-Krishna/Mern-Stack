import React, { useState } from "react";

const App = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    agree: false,
    mode: "",
    city: "",
  });

  const formHandler = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="firstName"
          name="firstName"
          value={formdata.firstName}
          onChange={formHandler}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Name"
          name="lastName"
          value={formdata.lastName}
          onChange={formHandler}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formdata.email}
          onChange={formHandler}
        />

        <br />
        <br />

        <textarea
          name="comments"
          placeholder="Write comments here..."
          onChange={formHandler}
          value={formdata.comments}
          cols="30"
          rows="10"
        />

        <br />
        <br />

        <input
          type="checkbox"
          name="agree"
          onChange={formHandler}
          checked={formdata.agree}
          id="agree"
        />
        <label htmlFor="agree"> Check Agreement </label>

        <br />
        <br />

        <input
          type="radio"
          onChange={formHandler}
          name="mode"
          id="Online-Mode"
          value={"Online-Mode"}
          checked={formdata.mode === "Online-Mode"}
        />
        <label htmlFor="Online-Mode">Online-Mode</label>

        <input
          type="radio"
          onChange={formHandler}
          name="mode"
          id="Offline-Mode"
          value={"Offline-Mode"}
          checked={formdata.mode === "Offline-Mode"}
        />
        <label htmlFor="Offline-Mode">Offline-Mode</label>

        <br />
        <br />

        <label htmlFor="city">Choose your country: </label>
        <select
          name="city"
          id="city"
          onChange={formHandler}
          value={formdata.city}
        >
          <option value="india">India</option>
          <option value="america">America</option>
          <option value="chaina">Chaina</option>
          <option value="pakistan">Pakistan</option>
        </select>

        <br />
        <br />

        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default App;
