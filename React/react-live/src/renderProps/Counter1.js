import React from "react";

function Counter1(props) {
  const { count, incrementCount } = props;
  return <button style={{ color: "green" }} onClick={incrementCount}>{count}</button>;
}

export default Counter1;
