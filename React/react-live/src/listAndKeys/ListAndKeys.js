import React, { Component } from "react";
import students from "./User";

class ListAndKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: JSON.parse(JSON.stringify(students)),
    };
  }

  deleteUser = (index) => {
    let temp = JSON.parse(JSON.stringify(this.state.users));
    temp.splice(index, 1);
    this.setState({
      users: temp,
    });
  };

  render() {
    const { users } = this.state;
    const listUsers = users.map((user, index) => (
      <div key={index} style={{ display: "flex", flexDirection: "row" }}>
        <b>Name: {user.name}</b>
        <b>Passed: {user.passed.toString().toUpperCase()}</b>
        <button onClick={() => this.deleteUser(index)}>Delete</button>
      </div>
    ));
    return <div>{listUsers}</div>;
  }
}

export default ListAndKeys;
