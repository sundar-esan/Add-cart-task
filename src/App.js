import "./App.css";
import Product from "./Components/Product";
import Nav from "./Components/Nav";
import { useState } from "react";

function App() {
  //initialization:

  const [items] = useState([
    {
      name: "Fancy Product",
      price: "$180.00",
      addedToCart: false,
    },
    {
      name: "Special Item",
      price: "$15.00",
      addedToCart: false,
    },
    {
      name: "Sale Item",
      price: "$25.00",
      addedToCart: false,
    },
    {
      name: "Popular Item",
      price: "$120.00",
      addedToCart: false,
    },
    {
      name: "Special Item",
      price: "$18.00",
      addedToCart: false,
    },
    {
      name: "Sale Item",
      price: "$25.00",
      addedToCart: false,
    },
  ]);
  // cart Count details:

  const [cart, setCart] = useState(0); //by default cart value is 0;

  // call back () will call by child with child to parent passing data;

  const Child = (data, name) => {
    setCart(cart + data);
    console.log(name);
    items.map((item) => {
      if (name === item.name) {
        item.addedToCart = !item.addedToCart;
      }
      return item;
    });
    console.log(items);
  };

  return (
    <div className="App">
      <Nav cartCount={cart} />
      <div className="cardContainer">
        {items.map((item, index) => {
          return <Product key={index} value={item} parent={Child} />;
        })}
      </div>
    </div>
  );
}

export default App;
