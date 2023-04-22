import { useContext } from 'react';

import {CartIconContainer, ItemCount, ShoppingIcon} from './cart-icon.styles.jsx';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
  const {cartCount,isCartOpen,setIsCartOpen} = useContext(CartContext);
  const toggleIsCartOpen = ()=> {setIsCartOpen(!isCartOpen)}
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon />
        <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon