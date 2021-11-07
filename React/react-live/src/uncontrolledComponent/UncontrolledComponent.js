import React, { createRef } from "react";


// Complete this function
// function UncontrolledComponent(props) {
    
// }

class UncontrolledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = createRef();
    this.passWordRef = createRef();
  }

  onSubmit = (event) => {
    event.preventDefault();
    alert(
      `Email: ${this.emailRef.current.value}. Password: ${this.passWordRef.current.value}`
    );
  };

  render() {
    return (
      <form
        onSubmit={(event) => this.onSubmit(event)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Email</label>
        <input
          type="email"
          style={{ width: "200px", marginBottom: "5px" }}
          ref={this.emailRef}
          required
        />
        <label>Password</label>
        <input
          type="password"
          style={{ width: "200px", marginBottom: "5px" }}
          ref={this.passWordRef}
          required
        />
        <button type="submit" style={{ width: "100px" }}>
          Submit
        </button>
      </form>
    );
  }
}

export default UncontrolledComponent;
