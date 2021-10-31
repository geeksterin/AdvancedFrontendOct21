import React, { Component, useState } from "react";
import LoggedInPage from "./LoggedInPage";
import SignInPage from "./SignInPage";

function ConditionalRenderer(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toogleUserLogin = (value) => {
    setIsLoggedIn(value);
  };
  return (
    <div>
      {isLoggedIn ? (
        <LoggedInPage toogleUserLogin={toogleUserLogin} />
      ) : (
        <SignInPage toogleUserLogin={toogleUserLogin} />
      )}
    </div>
  );
}

// class ConditionalRenderer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false,
//     };
//   }

//   toogleUserLogin = (value) => {
//     this.setState({
//         isLoggedIn: value
//     })
//   }

//   render() {
//     const { isLoggedIn } = this.state;

//     return (
//       <div>
//         {
//             isLoggedIn ? <LoggedInPage toogleUserLogin={this.toogleUserLogin}/> : <SignInPage toogleUserLogin={this.toogleUserLogin}/>
//         }
//       </div>
//     );
//   }
// }

export default ConditionalRenderer;
