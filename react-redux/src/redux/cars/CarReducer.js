import { BUY_CAR } from "./Types";

const initialState = {
  numberOfCars: 10,
};
const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        numberOfCars: state.numberOfCars - action.payload,
      };
    default:
      return state;
  }
};

export default carReducer;
