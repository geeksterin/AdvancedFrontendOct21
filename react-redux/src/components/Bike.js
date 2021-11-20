import React from "react";
import { connect } from "react-redux";
import { buyBike } from "../redux";

function Bike(props) {
  const { numberOfBikes, buyBike } = props;
  return (
    <div>
      <span>{numberOfBikes}</span>
      <button onClick={buyBike}>Buy Bike</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfBikes: state.bikes.numberOfBikes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBike: () => dispatch(buyBike()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bike);
