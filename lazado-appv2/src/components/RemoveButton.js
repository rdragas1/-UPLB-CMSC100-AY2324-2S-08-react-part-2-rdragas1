import React from "react";

function RemoveButton(props) {

  const handleClick = () => {
    let arr = [...props.state]
    arr = arr.filter((item) => item !== props.name);
    props.statefunction(arr);
  };

  return (
    <button type="button" id="remove-from-cart-btn" onClick={handleClick}>
      <span>X</span>
    </button>
  );
}

export default RemoveButton;
