import { createStore } from "redux";

// Define an initial state object with a "user" property
const initialState = {
  user: null,
};

// Define a reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;  //return the current state
  }
};

const store = createStore(reducer);

export default store;
