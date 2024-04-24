import React from "react";
import AddtoCartButton from "./AddtoCartButton";

function ProductList(props) {
  const shoppingItems = props.data;

  return (
    <div>
      <h1 id={props.title}>{props.title}</h1>
      <ul id="product-list">
        {shoppingItems.map((item) => {
          return (
            <li key={item.id}>
              <img src={item.url} alt={props.title + " item " + item.id}></img>
              <span id="name"> {item.name} </span>
              <span id="price"> {"\u20B1" + item.price + ".00"}</span>
              <AddtoCartButton
                title="Add to cart"
                name={item.name}
                statefunction={props.statefunction}
                state={props.state}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
