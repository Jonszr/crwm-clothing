import React, { useContext } from 'react'
import './cart-item.styles.scss'
import { CartContext } from '../../contexts/cart.context'
const CartItem = ({cartItem}) => {
  const {deleteItemToCart} =useContext(CartContext);
  const clearItemHandler = ()=>{
    deleteItemToCart(cartItem);
  }
    const {name,imageUrl,price, quantity} = cartItem
  return (
    <div className='cart-item-container'>
        
        <img src={imageUrl} alt={`${name}`}/>
        <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
        </div>
        <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
    </div>
  )
}

export default CartItem