export const initialState = {
  products: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
  },
  cart: {
    products: [],
    total: 0,
    order: [],
  },
};
