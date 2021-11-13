import React, { useEffect, useReducer, useRef, useState } from "react";

const initialSate = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      //   console.log(action.payload);
      return {
        count: state.count - 1,
      };
    case "increment":
      //   console.log(action.payload);
      return {
        count: state.count + 1,
      };
    case "checkbox":
    //   console.log(action.payload);
      return state;
    default:
      return state;
  }
};

function CounterReducer(props) {
  const [state, dispatch] = useReducer(reducer, initialSate);
  const checkboxRef = useRef();
  //   const [state, setState] = useState(0)
  
  return (
    <>
      <button 
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: "Decrement option fired!",
          })
        }
      >
        -
      </button>
      Count: {state.count}
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            payload: "Increment option fired!",
          })
        }
      >
        +
      </button>
      <input
        type="checkbox"
        ref={checkboxRef}
        onChange={() =>
          dispatch({
            type: "checkbox",
            payload: checkboxRef.current,
          })
        }
      />
    </>
  );
}

export default CounterReducer;
