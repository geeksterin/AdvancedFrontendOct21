import React, { useState } from "react";
import FormContext from "./Context";
import SignUpPage from "./SignUpPage";

function Main(props) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <FormContext.Provider
        value={{
          email,
          setEmail,
          userName,
          setUserName,
          isLoggedIn,
          setIsLoggedIn,
        }}
      >
        <SignUpPage />
      </FormContext.Provider>
    </div>
  );
}

export default Main;
