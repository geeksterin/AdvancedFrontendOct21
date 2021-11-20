import React from "react";
import { connect } from "react-redux";
import { buyCar } from "../redux";

function Car(props) {
    const  {numberOfCars, buyCar} = props
  return <div>
      <span>{numberOfCars}</span>
      <button onClick={buyCar}>Buy Car</button>
  </div>;
}

const mapStateToProps = (state) => {
  return {
    numberOfCars: state.cars.numberOfCars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCar: () => dispatch(buyCar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Car);
