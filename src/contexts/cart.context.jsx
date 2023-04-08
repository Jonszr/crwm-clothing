import React, { createContext, useState } from 'react'


export const  CartContext = createContext({
    products: [],
    setProducts: ()=>{},
    isCartOpen: false,
    setIsCartOpen: ()=>{}
})

export const CartProvider =({children})=>{
    const [products, setProducts] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {products, setProducts, isCartOpen, setIsCartOpen};
    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}