import React from "react";
import SingleProduct from "./SingleProduct";
import "./styles.css";
import { CartState } from "../context/Context";

const Home = () => {
  const { products } = CartState();
  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default Home;
