import React, { useContext } from 'react'
import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import { CartContext } from '../../contexts/cart.context'
const  CartDropdwon=()=> {
    const {products} = useContext(CartContext); 
    console.log(products)
  return (
    <div className='cart-dropdown-container'>
        {products.map((product,i)=>
            <div key={i++} className='cart-items'>{product.name}</div>
        )}
        
        <Button>Go TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdwon;