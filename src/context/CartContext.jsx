import React, { useContext, useReducer, useState } from "react";

export const CartContext = React.createContext()

export const useCart = () => {
    return useContext(CartContext)
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
            ...state,
            items: [...state.items, action.payload],
            };
        default:
            return state;
    }
};

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, { items: [] });

    const addToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}