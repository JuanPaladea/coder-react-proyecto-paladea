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
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map((item) =>
                item.id === action.payload.itemId
                    ? { ...item, quantity: action.payload.newQuantity }
                    : item
                ),
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
        case 'DELETE_CART':
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
};

export const CartProvider = ({children}) => {
    const [cart, dispatch] = useReducer(cartReducer, { items: [] });
    const [isCartVisible, setCartVisibility] = useState(false)

    const toggleCartVisibility = () => {
        setCartVisibility(!isCartVisible)
    }

    const addToCart = (item) => {
        const existingItem = cart.items.find((existingItem) => existingItem.id === item.id)

        if (existingItem) {
            dispatch({
            type: 'UPDATE_QUANTITY',
            payload: { itemId: item.id, newQuantity: existingItem.quantity + item.quantity },
        })
        } else (
            dispatch({ type: 'ADD_TO_CART', payload: item })
        )
    }

    const removeFromCart = (itemId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
    };
    
    const deleteCart = () => {
        dispatch({ type: 'DELETE_CART' });
    };

    return (
        <CartContext.Provider value={{cart, isCartVisible, addToCart, removeFromCart, deleteCart, toggleCartVisibility}}>
            {children}
        </CartContext.Provider>
    )
}