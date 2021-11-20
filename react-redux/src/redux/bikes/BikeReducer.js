import { BUY_BIKE } from "./Types";

const initialState = {
  numberOfBikes: 20,
};
const bikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BIKE:
      return {
        ...state,
        numberOfBikes: state.numberOfBikes - 1,
      };
    default:
      return state;
  }
};

export default bikeReducer;
