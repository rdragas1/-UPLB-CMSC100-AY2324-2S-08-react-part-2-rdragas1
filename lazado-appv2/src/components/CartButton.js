import React from "react";

function CartButton(props) {
  const handleClick = () => {
    console.log(props.data);
  };

  return <button type="button" id="cart-btn" onClick={handleClick}></button>;
}

export default CartButton;
