import React, { useContext } from "react";
import {BaseButton} from "../button/button.component";
import {CartDropdownContainer,EmptyMessage,CartItems} from "./cart-dropdown.styles.jsx";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
const CartDropdwon = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = ()=>{
    navigate('/checkout');
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        )):<EmptyMessage>
            Your Cart is empty
          </EmptyMessage>}
      </CartItems>


        <BaseButton onClick={goToCheckoutHandler}>Go TO CHECKOUT</BaseButton>

    </CartDropdownContainer>
  );
};

export default CartDropdwon;
