import React, { useReducer } from "react";
import all_product from "../Components/Assets/all_product";
import { boolean } from "zod";

export const shopContext = React.createContext({
  nbItems: 0,
  cartItems: [],
});

const defaultShopState = {
  nbItems: 0,
  cartItems: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log(action.product);
    const existingProductIndex = state.cartItems.findIndex(
      (item) => item.id === action.product.id
    );
    let updatedCartItems = [...state.cartItems];
    let newNbItems = state.nbItems + 1;

    if (existingProductIndex !== -1) {
      console.log(existingProductIndex);
      //existing item
      updatedCartItems[existingProductIndex] = {
        ...updatedCartItems[existingProductIndex],
        qty: updatedCartItems[existingProductIndex].qty + 1,
      };
      console.log(updatedCartItems);
    } else {
      alert(2);
      const newCartItem = { ...action.product, qty: 1 };
      updatedCartItems = [...updatedCartItems, newCartItem];
    }

    return {
      ...state,
      nbItems: newNbItems,
      cartItems: updatedCartItems,
    };
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

  const removeItem = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  }

  const contextValue = {
    all_product,
    refs: { newCollectionsRef: null },
    cartItems: cartState.cartItems,
    nbItems: cartState.nbItems,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
