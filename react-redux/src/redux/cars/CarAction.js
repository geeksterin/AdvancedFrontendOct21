import { BUY_CAR } from "./Types";

const buyCar = (number = 1) => {
  return {
    type: BUY_CAR,
    payload: number
  };
};

export default buyCar;
