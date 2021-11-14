const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const axios = require("axios");
const logger = require("redux-logger").createLogger();

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FECH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

const fetchUsersRequest = () => {
  return {
    type: FECH_USERS_REQUEST,
  };
};

const fechUsersSUccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FECH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_ERROR:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fectUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.name);
        dispatch(fechUsersSUccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersError(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk, logger));
store.subscribe(() => {});
store.dispatch(fectUsers());
