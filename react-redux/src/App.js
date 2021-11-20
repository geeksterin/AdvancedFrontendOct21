import { store } from "./redux";
import { Provider } from "react-redux";

import "./App.css";
// import Car from "./components/Car";
// import Bike from "./components/Bike";
// import CarHooks from "./components/CarHooks";
// import CarPayload from "./components/CarPayload";
import Users from "./components/Users";

function App() {
  return (
    <Provider store={store}>
      {/* <Car />
      <Bike />
      <CarHooks />
      <br />
      <CarPayload /> */}
      <Users />
    </Provider>
  );
}

export default App;
