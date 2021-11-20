import { combineReducers } from "redux";
import bikeReducer from "./bikes/BikeReducer";
import carReducer from "./cars/CarReducer";
import usersReducer from "./users/userReducer";

const rootReducer = combineReducers({
  cars: carReducer,
  bikes: bikeReducer,
  users: usersReducer,
});

export default rootReducer;
