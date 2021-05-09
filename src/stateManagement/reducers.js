import { SET_LOG_IN, ADD_TO_CART } from "./actions";

const initialState = {
  isLoggedIn: false,
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOG_IN:
      return Object.assign({}, state, { isLoggedIn: action.payload });

    case ADD_TO_CART:
      console.log(state.cart.concat(action.payload))
      return Object.assign({}, state, {
        cart: state.cart.concat(action.payload),
      });

    default:
      return state;
  }
};

export default rootReducer;
