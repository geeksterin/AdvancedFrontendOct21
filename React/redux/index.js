/**
 * 3 core concepts
 * Store -> Hold state of the application
 * Action -> Describes what happended
 * Reducer -> Ties store and action together
 */

/**
 *                               JavascriptApp
 *                    Store   <-|             |->  Actions
 *                      |                             |
 *                      |                             |
 *                      |  <-       Reducer         <-|
 */

/**
 * 3 principles
 * The state of whole application is stored in an object tree within a single store
 * The only way to change the state is to emit / dispatch an action, an object describing what happended
 * To specify how state tree is transformed by actions, you write pure reducers (takes prev / next state as input and returns a new state)
 */

const { createStore } = require("redux");

// Implement Action

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

// Implement Reducer: (prevSate, action) => newState

const initialSate = {
  numberOfCars: 10,
  numberOfBike: 20,
};

function reducer(state = initialSate, action) {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        numberOfCars: state.numberOfCars - 1,
      };
    case BUY_BIKE:
      return {
        ...state,
        numberOfBike: state.numberOfBike - 1,
      };
    default:
      return state;
  }
}

// Implement store
// Holds the state
// Alows access to the state via getState()
// Allows state to be update via dispatch (action)
// Registers listeners via subscribers (listener)
// Handles unregistering of listners via the function returned by subsscribe(listener)

// const store = createStore(reducer);
// console.log("Initial state", store.getState());
// const unsunbscribe = store.subscribe(() =>
//   console.log("Updated state", store.getState())
// );
// store.dispatch(buyCar());
// store.dispatch(buyCar());
// store.dispatch(buyCar());
// store.dispatch(buyBike());
// store.dispatch(buyBike());
// store.dispatch(buyBike());
// unsunbscribe();
