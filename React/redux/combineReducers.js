const { createStore, combineReducers, applyMiddleware } = require("redux");
const logger = require("redux-logger").createLogger();

const BUY_CAR = "BUY_CAR";
const BUY_BIKE = "BUY_BIKE";

function buyCar() {
  return {
    type: BUY_CAR,
  };
}

function buyBike() {
  return {
    type: BUY_BIKE,
  };
}

const initialCarState = {
  numberOfCars: 10,
};

const intialBikeState = {
  numberOfBikes: 20,
};

const carReducer = (state = initialCarState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        numberOfCars: state.numberOfCars - 1,
      };
    default:
      return state;
  }
};

const bikeReducer = (state = intialBikeState, action) => {
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

const rootReducer = combineReducers({
  cars: carReducer,
  bikes: bikeReducer,

});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsunbscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(buyCar());
store.dispatch(buyCar());
store.dispatch(buyCar());
store.dispatch(buyBike());
store.dispatch(buyBike());
store.dispatch(buyBike());
// unsunbscribe();
store.dispatch(buyBike());
store.dispatch(buyBike());