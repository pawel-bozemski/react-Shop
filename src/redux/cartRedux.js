/* selectors */
export const getCart = ({ cart }) => cart.products;

/* action name creator */
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');

/* action creators */
export const addToCart = (payload) => ({ payload, type: ADD_TO_CART });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...statePart,
        products: [action.payload],
        total: statePart.total + (action.payload.price * action.payload.value),
      };
    }
    default:
      return statePart;
  }
};
