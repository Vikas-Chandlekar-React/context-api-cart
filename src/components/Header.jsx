import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = ({ cart }) => {
  return (
    <div>
      <span className="header">React Context API</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
