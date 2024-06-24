import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkiing, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/AuthContext";
import { StoreContext } from "../context/StoreContext";
import "./Header.scss";

const Header = props => {
  const [state] = useContext(StoreContext);
  const isAuth = useContext(AuthContext);
  const quantity = state.cartItems.map(item => item.quantity);
  const numberToDisplay = quantity.reduce((a, c) => a + c, 0);
  return (
    <div className="Nav">
      <div className="Nav-group">
        <Link className="Nav-group__item-home" to="/">
          <FontAwesomeIcon icon={faSkiing} size="2x" />
          <span>Mountain Shop</span>
        </Link>
        <NavLink className="Nav-group__item" to="/products">
          Products
        </NavLink>
        {isAuth && (
          <NavLink className="Nav-group__item" to="/admin">
            Admin
          </NavLink>
        )}
        <Link className="Nav-group__item Nav-group__item--right" to="cart">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          <span className="quantity">{numberToDisplay}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
