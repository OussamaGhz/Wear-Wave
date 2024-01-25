import React, { useReducer } from "react";
import all_product from "../Components/Assets/all_product";

export const shopContext = React.createContext({
  nbItems: 0,
  cartItems: [],
});

const defaultShopState = {
  nbItems: 0,
  cartItems: [],
};

const cartReducer = (state, action) => {
  let updatedCartItems = [...state.cartItems];
  if (action.type === "ADD") {
    const existingProductIndex = state.cartItems.findIndex(
      (item) => item.id === action.product.id
    );

    let newNbItems = state.nbItems + 1;

    if (existingProductIndex !== -1) {
      //existing item
      updatedCartItems[existingProductIndex] = {
        ...updatedCartItems[existingProductIndex],
        qty: updatedCartItems[existingProductIndex].qty + 1,
      };
    } else {
      const newCartItem = { ...action.product, qty: 1 };
      updatedCartItems = [...updatedCartItems, newCartItem];
    }

    return {
      ...state,
      nbItems: newNbItems,
      cartItems: updatedCartItems,
    };
  } else if (action.type === "REDUCE") {
    let newNbItems = state.nbItems - 1;
    const indexToREDUCE = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    if (indexToREDUCE !== -1) {
      //item exist (should be always true)
      const qtyOfItem = updatedCartItems[indexToREDUCE].qty;
      if (qtyOfItem > 1) {
        //reduce the qty by one
        updatedCartItems[indexToREDUCE] = {
          ...updatedCartItems[indexToREDUCE],
          qty: updatedCartItems[indexToREDUCE].qty - 1,
        };
      } else {
        // only one element exist (REDUCE it)
        updatedCartItems = updatedCartItems.filter((item) => {
          return item.id != action.id;
        });
      }
      return {
        ...state,
        cartItems: updatedCartItems,
        nbItems: newNbItems,
      };
    }
  } else if (action.type === "REMOVE") {
    const indexToDelete = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    if (indexToDelete !== -1) {
      const newNbItems = state.nbItems - updatedCartItems[indexToDelete].qty;
      updatedCartItems = updatedCartItems.filter((item) => {
        return item.id !== action.id;
      });
      return {
        ...state,
        cartItems: updatedCartItems,
        nbItems: newNbItems,
      };
    }
  } else if (action.type === "INCREASE") {
    let newNbItems = state.nbItems + 1;
    const indexToIncrease = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    if (indexToIncrease !== -1) {
      updatedCartItems[indexToIncrease] = {
        ...updatedCartItems[indexToIncrease],
        qty: updatedCartItems[indexToIncrease].qty + 1,
      };
      return {
        ...state,
        cartItems: updatedCartItems,
        nbItems: newNbItems,
      };
    }
  }

  // Handle other actions if needed
  return state; // Return the current state if no action matches
};

const ShopContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultShopState
  );

  const addItem = (product) => {
    dispatchCartState({ type: "ADD", product: product });
  };

  const decreaseItem = (id) => {
    dispatchCartState({ type: "REDUCE", id: id });
  };
  const increaseItem = (id) => {
    dispatchCartState({ type: "INCREASE", id: id });
  };

  const removeItem = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const contextValue = {
    all_product,
    refs: { newCollectionsRef: null },
    cartItems: cartState.cartItems,
    nbItems: cartState.nbItems,
    addItem: addItem,
    decreaseItem: decreaseItem,
    increaseItem: increaseItem,
    removeItem: removeItem,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
