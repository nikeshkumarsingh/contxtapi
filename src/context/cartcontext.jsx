import {createContext}from"react";
import {useContext}from "react";
const CartContext=createContext();
export const CartContextProvider=({children})=>{
  
    return (
        <CartContext.Provider value={0}>
            {children}
        </CartContext.Provider>
    )
}