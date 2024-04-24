import React from "react";

function MenuList(props) {
  const menuItems = props.data;

  return (
    <div>
      <ul id="menu-list">
        {menuItems.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.url}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuList;
