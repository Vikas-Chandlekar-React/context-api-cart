import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Cart, CartState } from "../context/Context";

const Header = () => {
  // const { cart } = useContext(Cart);
  const { cart } = CartState();

  return (
    <div>
      <span className="header">React Context API</span>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
