import React from "react";

function AddtoCartButton(props) {
  const handleClick = () => {
    console.log("Added " + props.name + " to the cart!");
    pushcart.push(props.name);
    props.statefunction([...pushcart]);

  };

  return (
    <button type="button" id="add-to-cart-btn" onClick={handleClick}>
      <span>{props.title}</span>
    </button>
  );
}

var pushcart = [];

export default AddtoCartButton;
