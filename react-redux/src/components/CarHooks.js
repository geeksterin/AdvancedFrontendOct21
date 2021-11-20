import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCar } from "../redux";

function CarHooks(props) {
  const numberOfCars = useSelector((state) => state.cars.numberOfCars);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{numberOfCars}</span>
      <br />
      <button onClick={() => dispatch(buyCar())}>Buy Car</button>
    </div>
  );
}

export default CarHooks;
