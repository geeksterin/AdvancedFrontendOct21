import React, { useState } from "react";

function ControlledComponent(props) {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  let onSubmit = (event) => {
    event.preventDefault();
    if (formInput.password === formInput.confirmPassword) {
      alert("Success!");
      return;
    }
    alert("Incorrect Password");
  };

  let formUpdater = (event, action) => {
    const text = event.target.value;
    switch (action) {
      case "email":
        setFormInput((prev) => {
          return {
            ...prev,
            email: text,
          };
        });
        break;
      case "password":
        setFormInput((prev) => {
          return {
            ...prev,
            password: text,
          };
        });
        break;
      case "confirmPassword":
        setFormInput((prev) => {
          return {
            ...prev,
            confirmPassword: text,
          };
        });
        break;
      default:
        return null;
    }
  };

  return (
    <form
      onSubmit={(event) => onSubmit(event)}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>Email</label>
      <input
        type="email"
        style={{ width: "200px", marginBottom: "5px" }}
        value={formInput.email}
        onChange={(event) => formUpdater(event, "email")}
        required
      />
      <label>Password</label>
      <input
        type="password"
        style={{ width: "200px", marginBottom: "5px" }}
        value={formInput.password}
        onChange={(event) => formUpdater(event, "password")}
        required
      />
      <label>Confirm Password</label>
      <input
        type="password"
        style={{ width: "200px", marginBottom: "5px" }}
        value={formInput.confirmPassword}
        onChange={(event) => formUpdater(event, "confirmPassword")}
        required
      />
      <button type="submit" style={{ width: "100px" }}>
        Submit
      </button>
    </form>
  );
}

// Complete this class
// class ControlledComponent extends React.Component {}

export default ControlledComponent;
