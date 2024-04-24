import React from "react";
import { getCart } from "../App";

function RemoveButton(props) {

  const handleClick = () => {

    const indexToRemove = getCart().indexOf(props.name);
    if (indexToRemove !== -1) {
      getCart().splice(indexToRemove, 1);
      props.statefunction(getCart());
    }
    console.log(getCart());
    console.log(props.state);
  };

  return (
    <button type="button" id="remove-from-cart-btn" onClick={handleClick}>
      <span>X</span>
    </button>
  );
}

export default RemoveButton;
