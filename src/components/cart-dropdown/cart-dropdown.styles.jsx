import styled from "styled-components";
import { BaseButton } from "../button/button.component";
export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;
export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

// .cart-dropdown-container {
//     position: absolute;
//     width: 240px;
//     height: 340px;
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
//     border: 1px solid black;
//     background-color: white;
//     top: 90px;
//     right: 40px;
//     z-index: 5;

//     .empty-message {
//       font-size: 18px;
//       margin: 50px auto;
//     }

//     .cart-items {
//       height: 240px;
//       display: flex;
//       flex-direction: column;
//       overflow-y: auto;

//     }

//   }
