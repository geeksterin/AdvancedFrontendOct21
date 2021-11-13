import React from "react";

function Counter2(props) {
  const { count, incrementCount } = props;
  return (
    <button style={{ color: "red" }} onClick={incrementCount}>
      {count}
    </button>
  );
}

export default Counter2;
