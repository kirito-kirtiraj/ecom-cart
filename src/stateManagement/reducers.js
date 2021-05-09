import { SET_LOG_IN } from "./actions";

const initialState = {
  isLoggedIn: false,
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOG_IN:
      return Object.assign({}, state, { isLoggedIn: action.payload });

    default:
      return state;
  }
};

export default rootReducer;
