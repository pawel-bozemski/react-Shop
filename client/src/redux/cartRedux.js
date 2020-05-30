/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

/* selectors */
export const getCart = ({ cart }) => cart.products;
export const getTotal = ({ cart }) => cart.products.reduce((total, product) => product.price * product.value + total, 0);

/* action name creator */
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const UPDATE_VALUE = createActionName('UPDATE_VALUE');
const ADD_NOTES = createActionName('ADD_NOTES');
const SEND_ORDER = createActionName('SEND_ORDER');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });

export const addToCart = (payload) => ({ payload, type: ADD_TO_CART });
export const removeFromCart = (payload) => ({ payload, type: REMOVE_FROM_CART });
export const updateValue = (payload) => ({ payload, type: UPDATE_VALUE });
export const addNotes = (payload) => ({ payload, type: ADD_NOTES });
export const sendOrder = (payload) => ({ payload, type: SEND_ORDER });

/* thunk creators */

export const saveCartRequest = (cart) => () => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const loadCartRequest = () => (dispatch) => {
  let savedCart;
  localStorage.getItem('cart')
    ? savedCart = JSON.parse(localStorage.getItem('cart')) : savedCart = [];
  dispatch(fetchSuccess(savedCart));
};

export const sendOrderRequest = (order) => {
  console.log('order', order);
  return (dispatch) => {
    dispatch(fetchStarted());

    axios
      .post('http://localhost:8000/api/order', order)
      .then((res) => {
        dispatch(sendOrder(res));
      })
      .catch((err) => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        products: action.payload ? action.payload : [],
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_TO_CART: {
      const { products } = statePart;
      if (products.length) {
        let isProductInCart = false;
        for (const prod of products) {
          if (prod._id === action.payload._id) isProductInCart = true;
        }
        return {
          ...statePart,
          products: isProductInCart ? [...products] : [...products, { ...action.payload }],
        };
      }
      return {
        ...statePart,
        products: [{ ...action.payload }],
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
          if (product._id === action.payload._id) return { ...product, value: action.payload.value };
          return product;
        }),
      };
    }
    case ADD_NOTES: {
      return {
        ...statePart,
        products: statePart.products.map((product) => {
          if (product._id === action.payload._id) return { ...product, notes: action.payload.notes };
          return product;
        }),
      };
    }
    case SEND_ORDER: {
      return {
        ...statePart,
        order: action.payload,
      };
    }
    default:
      return statePart;
  }
};
