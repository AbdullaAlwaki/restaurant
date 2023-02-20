export const initialState = {
  menu: [],
  cart: [],
  offer:[],
  favorite:[],
  customer: {},
  shipping: "",
  payment: ""
};

function addToCart(state, action) {
  const cartElem = action.payload;
  cartElem.qty = 1;
  return { ...state, cart: [...state.cart, cartElem] };
}

function increment(state, action) {
  const cart = state.cart;
  const newCart = cart.map((cartElem) => {
    if (cartElem._id === action.payload) {
      return { ...cartElem, qty: cartElem.qty + 1 };
    }

    return cartElem;
  });

  return { ...state, cart: newCart };
}


export function reducer(state, action) {
  switch (action.type) {
    case "MENU":
      const favorite = action.payload.filter((item) => item.isFavorites === true);
      const offer = action.payload.filter((ele) => ele.isOffers === true);
      return {...state, menu: action.payload, favorite: favorite, offer: offer};

    case "ADDTOCART":
      return addToCart(state, action);
    case "EMPTYCART":
      return { ...state, cart: []}
    case "REMOVEFROMCART":
      return {
        ...state,
        cart: state.cart.filter((dish) => dish._id !== action.payload),
      };

    case "INCREMENT":
      return increment(state, action);

    case "DECREMENT":
      return {
        ...state,
        cart: state.cart.map((cartElem) =>
          cartElem._id === action.payload
            ? { ...cartElem, qty: cartElem.qty - 1 }
            : cartElem
        ),
      };

      case "PERSONALDETAILS":
        return{ ...state, customer: action.payload};

    case "SHIPPINGDETAILS":
      return{ ...state, shipping: action.payload};
    
    case "PAYMENTDETAILS":
        return{ ...state, payment: action.payload};
        
    default:
      throw new Error(`The action ${action.type} not defined`);
  }
}
