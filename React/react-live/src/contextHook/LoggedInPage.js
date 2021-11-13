import React, { useContext } from "react";
import FormContext from "./Context";

function LoggedInPage(props) {
  const { email, userName, setIsLoggedIn } = useContext(FormContext);
  return (
    <div>
      Email: {email}
      Username: {userName}
      <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
    </div>
  );
}

export default LoggedInPage;
