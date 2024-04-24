import React from "react";
import RemoveButton from "./RemoveButton";


function CartList(props) {
    let cartList = props.state;
    let uniqueList = [...new Set(cartList)];

  return (
    <div id="cart-list">
      <span> Shopping Cart Quantity: {cartList.length}</span>
        
      <ul id="added-list"> 
      {uniqueList.map((item)=>{
        return (
          <li key={item}>
            <span id="added-name"> {item}</span>
            <span> QTY {props.quantityfunc(props.state, item)} </span>
            <RemoveButton name={item} state={cartList} statefunction={props.statefunction}/>
          </li>
        );
      })}


      </ul>
    </div>
  );
}

export default CartList;
