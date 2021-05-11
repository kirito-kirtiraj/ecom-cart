export const SET_LOG_IN = "SET_LOG_IN";
export const setLogin = (payload) => {
  return { type: SET_LOG_IN, payload };
};

export const ADD_TO_CART = "ADD_TO_CART";
export const addToCart = (payload) => {
  return { type: ADD_TO_CART, payload };
};

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const removeFromCart = (payload) => {
  return { type: REMOVE_FROM_CART, payload };
};
