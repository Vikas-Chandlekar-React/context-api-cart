import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import "./styles.css";

faker.seed(100);

const Home = ({cart,setCart}) => {
  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
  }));

  //   console.table(productsArray);

  // const [cart, setCart] = useState([]);

  console.log("Cart = ", cart);
  const [products, setProducts] = useState(productsArray);
  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct
          key={prod.id}
          prod={prod}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
};

export default Home;
