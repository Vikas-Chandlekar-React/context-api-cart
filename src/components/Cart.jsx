import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Cart, CartState } from "../context/Context";

const CartPage = () => {
  // const { cart } = useContext(Cart);
  const { cart } = CartState();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: Rs.{total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
