/* eslint-disable no-underscore-dangle */
/* selectors */
export const getCart = ({ cart }) => cart.products;
export const getTotal = ({ cart }) => cart.total;

/* action name creator */
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const UPDATE_VALUE = createActionName('UPDATE_VALUE');
const ADD_NOTES = createActionName('ADD_NOTES');
const SEND_ORDER = createActionName('SEND_ORDER');

/* action creators */
export const addToCart = (payload) => ({ payload, type: ADD_TO_CART });
export const removeFromCart = (payload) => ({ payload, type: REMOVE_FROM_CART });
export const updateValue = (payload) => ({ payload, type: UPDATE_VALUE });
export const addNotes = (payload) => ({ payload, type: ADD_NOTES });
export const sendOrder = (payload) => ({ payload, type: SEND_ORDER });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...statePart,
        products: [...statePart.products, { ...action.payload }],
        total: statePart.total + (action.payload.price),
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...statePart,
        products: statePart.products.filter((item) => item._id !== action.payload),
      };
    }
    case UPDATE_VALUE: {
      return {
        ...statePart,
        products: statePart.products.map((product) => {
          if (product.id === action.payload.id) return { ...product, value: action.payload.value };
          return product;
        }),
      };
    }
    case ADD_NOTES: {
      return {
        ...statePart,
        products: statePart.products.map((product) => {
          if (product.id === action.payload.id) return { ...product, notes: action.payload.notes };
          return product;
        }),
      };
    }
    case SEND_ORDER: {
      console.log('action.payload', action.payload);
      return {
        ...statePart,
        order: action.payload,
      };
    }
    default:
      return statePart;
  }
};
