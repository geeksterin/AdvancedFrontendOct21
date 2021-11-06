import React, { Component, useState, useEffect } from "react";

// class LifeCycles extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   // Called when the component is mounted
//   componentDidMount() {
//     this.countInterval = setInterval(() => this.incrementCount(), 1000);
//   }

//   // Called when the component is unmounted
//   componentWillUnmount() {
//     clearInterval(this.countInterval);
//   }

//   // Called when the component get's update
//   componentDidUpdate() {
//       console.log("Called when state get's changed!")
//   }

//   incrementCount() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }

//   render() {
//     const { count } = this.state;
//     return <div>{count}</div>;
//   }
// }

function LifeCycles() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  /**
   * Acts as componentDidMount
   * Every useEffect gets called once component is mounted
   * */
  useEffect(() => {
    let counterInterval = setInterval(() => incrementCount(), 1000);
    // Acts as componentWillUnmount
    return () => clearInterval(counterInterval);
  }, []);

  /**
   * Acts as combination componentDidMount / componentDidUpdate
   * It's gets called once component is mounted
   * It will also get called when input state changes
   * */
  useEffect(() => {
    alert("Triggered!");
  }, [input]);

  // Called evertime when any of the state chanages or component get's rerendered
  // Potential cause of memory leak in application
  // useEffect(() => {
  //     console.log("Called on any state change or renrender")
  // })

  let incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      {count}
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
          console.log("Input changed");
        }}
      />
    </div>
  );
}

export default LifeCycles;
