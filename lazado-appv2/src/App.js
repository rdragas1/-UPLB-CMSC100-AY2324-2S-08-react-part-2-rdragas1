import "./App.css";
import MenuList from "./components/MenuList";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { useState } from "react";

function App() {

  const [cart, updateCart] = useState([]);
  

  return (
    <div>
      <div id="header">
        <img
          src="https://i.ibb.co/3Y7NMMd/lazado-logo.png"
          alt="lazado logo"
        ></img>
        <MenuList data={menus} />

      </div>
      <CartList state={cart} statefunction={updateCart} quantityfunc={countDuplicates} />
      <div id="content">
        <div id="banner-container">
          <img
            style={{ maxWidth: 100 + "%" }}
            src="https://i.ibb.co/1ryZGDL/lazado-banner.png"
            alt="lazado banner"
          ></img>
        </div>
        <ProductList
          data={appliances}
          title={"Appliances"}
          statefunction={updateCart}
          state={cart}
        />
        <ProductList
          data={accessories}
          title={"Accessories"}
          statefunction={updateCart}
          state={cart}
        />
        <ProductList
          data={gadgets}
          title={"Gadgets"}
          statefunction={updateCart}
          state={cart}
        />
        <ProductList
          data={clothing}
          title={"Clothing"}
          statefunction={updateCart}
          state={cart}
        />
      </div>
    </div>
  );
}

export default App;

function countDuplicates(array, elementToCount) {
  let count = 0;
  array.forEach(function (element) {
    if (element === elementToCount) {
      count++;
    }
  });
  return count;
}

var pushcart = [];

export function getCart () {
  return pushcart;
}

const menus = [
  { name: "Appliances", url: "#Appliances", id: 1 },
  { name: "Accessories", url: "#Accessories", id: 2 },
  { name: "Gadgets", url: "#Gadgets", id: 3 },
  { name: "Clothing", url: "#Clothing", id: 4 },
];

const appliances = [
  {
    name: "Blomberg Washing Machine",
    url: "https://storage.beko.co.uk/blomberg2018products/large/Blomberg_WashingMachine_LWF28442B_Black_AngledClosed.jpg",
    price: 11699,
    id: 1,
  },
  {
    name: "Samsung Refrigerator",
    url: "https://content.blueport.com/ProductImages/0/441674.jpg",
    price: 21399,
    id: 2,
  },
  {
    name: "LG 65-Inch TV 4K OLED",
    url: "https://i0.wp.com/tvreviewland.com/wp-content/uploads/2018/12/lg-65-inch-tv-2.jpg?fit=1500,1340&ssl=1",
    price: 25499,
    id: 3,
  },
  {
    name: "Oster Microwave Oven",
    url: "https://i5.walmartimages.com/asr/c2e15fb6-487d-45e6-b1ac-faaac2105e75_1.81c76d946ac2e4690632ebd53b6ef8a7.jpeg",
    price: 8500,
    id: 4,
  },
];

const gadgets = [
  {
    name: "Samsung Galaxy A20 32GB ",
    url: "https://resources.claroshop.com/medios-plazavip/s2/10944/1348499/5e6bec1e0d81d-a20snegropresentacion-1600x1600.jpg",
    price: 15990,
    id: 1,
  },
  {
    name: "Huawei Watch 2 Sport Smartwatch",
    url: "https://www.bhphotovideo.com/images/images2000x2000/huawei_55021796_watch_2_sport_carbon_1327329.jpg",
    price: 6499,
    id: 2,
  },
  {
    name: "JBL Pulse 2 Wireless Portable Speaker",
    url: "http://www.bhphotovideo.com/images/images2000x2000/jbl_jblpulse2blkus_pulse_2_portable_bluetooth_1182617.jpg",
    price: 4299,
    id: 3,
  },
  {
    name: "Philips Wireless Earbuds",
    url: "https://cdn1.smartprix.com/rx-iUsZIoh0t-w1200-h1200/philips-tat1225-true.jpg",
    price: 8500,
    id: 4,
  },
];

const accessories = [
  {
    name: "Butterfly Necklace",
    url: "https://i.ebayimg.com/images/g/IFkAAOSwHHJilF7S/s-l1600.jpg",
    price: 271,
    id: 1,
  },
  {
    name: "Friendship Bracelet",
    url: "https://m.media-amazon.com/images/I/71Br2TB6ibL._SY695_.jpg",
    price: 189,
    id: 2,
  },
  {
    name: "Miniso Square Shades",
    url: "https://shop.minisoph.com/cdn/shop/products/6936735307227_2.jpg?v=1664256056",
    price: 299,
    id: 3,
  },
  {
    name: "Gold Rings",
    url: "https://www.sportsgirl.com.au/media/catalog/product/0/6/065367_079_1.jpeg?optimize=low&bg-color=255,255,255&fit=bounds&height=572&width=480&canvas=480:572",
    price: 150,
    id: 4,
  },
];

const clothing = [
  {
    name: "Men's Polo",
    url: "https://i.pinimg.com/564x/2a/9d/00/2a9d0056444682b5b70522963008d43e.jpg",
    price: 679,
    id: 1,
  },
  {
    name: "Men's Cargo Polo",
    url: "https://i.pinimg.com/564x/b6/93/5d/b6935dd220afc3e0d3636a4257f74224.jpg",
    price: 499,
    id: 2,
  },
  {
    name: "Women's Cropped Polo",
    url: "https://i.pinimg.com/564x/f1/16/c7/f116c783c44f10f28b91d0fbd4b734c0.jpg",
    price: 379,
    id: 3,
  },
  {
    name: "Crochet Sweater",
    url: "https://i.pinimg.com/564x/77/8b/22/778b2290f8912888a9b74ceeb2abd760.jpg",
    price: 599,
    id: 4,
  },
];
