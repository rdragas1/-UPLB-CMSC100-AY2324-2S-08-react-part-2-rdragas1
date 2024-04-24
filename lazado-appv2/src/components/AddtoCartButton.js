import React from "react";
import { getCart } from "../App";

function AddtoCartButton(props) {
  const handleClick = () => {
    console.log("Added " + props.name + " to the cart!");
    getCart().push(props.name);

    props.statefunction([...getCart()]);
  };

  return (
    <button type="button" id="add-to-cart-btn" onClick={handleClick}>
      <span>{props.title}</span>
    </button>
  );
}

export default AddtoCartButton;
