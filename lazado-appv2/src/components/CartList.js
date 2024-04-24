import React from "react";

function CartList(props) {
  return (
    <div id="cart-list">
      <span> Shopping Cart Quantity: {props.data.length}</span>
    </div>
  );
}

export default CartList;
