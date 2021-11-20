import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCar } from "../redux";

function CarPayload(props) {
    const {buyCar} = props;
  const [input, setInput] = useState(1);
  return (
    <div>
      <input  type="number" value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={() => buyCar(input)}>Buy {input} Car</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCars: state.cars.numberOfCars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCar: (input) => dispatch(buyCar(input)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CarPayload);
