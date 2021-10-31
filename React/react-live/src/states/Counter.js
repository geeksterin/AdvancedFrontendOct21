import React, { Component, useState } from "react";

function Counter(props) {

    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1)
    };
  
    const decrementCount = () => {
        setCount((prevCount) => prevCount - 1)
    };

    return (
        <div>
        <button onClick={incrementCount}>Increment</button>
        <span>{count}</span>
        <button onClick={decrementCount}>Decrement</button>
      </div>
    );
}

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   incrementCount = () => {
//       this.setState((state) => ({
//           count: state.count + 1
//       }));
//   };

//   decrementCount = () => {
//     this.setState((state) => ({
//         count: state.count - 1
//     }));
//   };

//   render() {
//     const { count } = this.state;

//     return (
//       <div>
//         <button onClick={this.incrementCount.bind(this)}>Increment</button>
//         <span>{count}</span>
//         <button onClick={this.decrementCount.bind(this)}>Decrement</button>
//       </div>
//     );
//   }
// }

export default Counter;
