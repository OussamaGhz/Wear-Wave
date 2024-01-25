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
  if (action.type === "ADD") {
    const existingProductIndex = state.cartItems.findIndex(
      (item) => item.id === action.product.id
    );
    let updatedCartItems = [...state.cartItems];
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
  } else if (action.type === "REMOVE") {
    let updatedCartItems = [...state.cartItems];
    let newNbItems = state.nbItems - 1;
    const indexToRemove = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    if (indexToRemove !== -1) {
      //item exist (should be always true)
      const qtyOfItem = updatedCartItems[indexToRemove].qty;
      if (qtyOfItem > 1) {
        //reduce the qty by one
        updatedCartItems[indexToRemove] = {
          ...updatedCartItems[indexToRemove],
          qty: updatedCartItems[indexToRemove].qty - 1,
        };
      } else {
        // only one element exist (remove it)
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
  };

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
