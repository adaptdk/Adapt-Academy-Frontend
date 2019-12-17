import React, { createContext, useReducer } from "react";
const StoreContext = createContext();

function storeReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const id = action.payload.id;
      if (state.cartItems.findIndex(item => item.id === id) !== -1) {
        const updatedCart = state.cartItems.reduce((acc, item) => {
          if (item.id === id) {
            acc.push({ ...item, quantity: item.quantity++ });
          } else {
            acc.push(item);
          }
          return acc;
        }, []);
        return { ...state, updatedCart };
      }
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "DECREASE":
      const itemToUpdate = state.cartItems.filter(
        item => item.id === action.payload
      );
      const updatedItem = itemToUpdate.map(item => {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else return null;
      });
      const restOfIt = state.cartItems.filter(
        item => item.id !== action.payload
      );
      if (updatedItem[0]) {
        console.log(updatedItem);
        return { ...state, cartItems: [...updatedItem, ...restOfIt] };
      } else if (restOfIt[0]) {
        return { ...state, cartItems: [...restOfIt] };
      } else return { ...state, cartItems: [] };
    case "CLEAR_CART":
      return { ...state, cartItems: [] };
    case "PURCHASE":
      return { ...state, cartItems: [] };
    default:
      return state;
  }
}

const StoreProvider = ({ children }) => {
  const initialState = useReducer(storeReducer, {
    cartItems: []
  });
  return (
    <StoreContext.Provider value={initialState}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
