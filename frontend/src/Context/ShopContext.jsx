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
      (item) => item._id === action.product._id
    );

    if (existingProductIndex !== -1) {
      alert(1);
      state.nbItems += 1;
      // Increment the quantity of the existing product by one
      const updatedCartItems = [...state.cartItems];
      updatedCartItems[existingProductIndex] = {
        ...state.cartItems[existingProductIndex],
        qty: state.cartItems[existingProductIndex].qty + 1,
      };

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    } else {
      alert(2);
      state.nbItems += 1;
      // If the product is not in the cart, add it with quantity 1
      const newCartItem = {
        ...action.product,
        qty: 1,
      };

      return {
        ...state,
        cartItems: [...state.cartItems, newCartItem],
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

  const contextValue = {
    all_product,
    refs: { newCollectionsRef: null },
    cartItems: cartState.cartItems,
    nbItems: cartState.nbItems,
    addItem: addItem,
  };
  console.log(cartState.cartItems);

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};

export default ShopContextProvider;
