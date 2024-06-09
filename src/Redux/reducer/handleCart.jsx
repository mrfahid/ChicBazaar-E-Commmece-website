// reducer.js
const initialState = [];

const handleCart = (state = initialState, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM": {
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...product, qty: 1 }];
      }
    }
    case "DELITEM": {
      return state.map((x) =>
        x.id === product.id ? { ...x, qty: x.qty - 1 } : x
      ).filter((x) => x.qty !== 0);
    }
    default: {
      return state;
    }
  }
};

export default handleCart;
