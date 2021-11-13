import React from "react";
import Wrapper from "./Wrapper";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

function RenderPropDemo(props) {
  return (
    <div>
      <Wrapper
        render={(count, incrementCount) => (
          <Counter1 count={count} incrementCount={incrementCount} />
        )}
      />
      <Wrapper
        render={(count, incrementCount) => (
          <Counter2 count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default RenderPropDemo;
