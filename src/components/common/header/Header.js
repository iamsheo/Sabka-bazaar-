import "./Header.css";
import React, { useState } from "react";
import logo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "../cart";
import { useSelector } from "react-redux";

const Header = () => {
  const list = useSelector((state) => state);
  console.log(list.itemList);
  const [cartRender, setCartRender] = useState(false);
  const cartHandler = () => setCartRender(!cartRender);
  return (
    <>
      <header>
        <nav className="head-box">
          <Container>
            <div className="head-container">
              <div>
                <div className="head-logo">
                  <img src={logo} />
                </div>
                <div className="menu-list">
                  <NavLink exact="true" to="/">
                    Home
                  </NavLink>
                  <NavLink exact="true" to="/products">
                    Products
                  </NavLink>
                </div>
              </div>
              <div>
                <div className="login-menu">
                  <NavLink exact="true" to="/signin">
                    SingIn
                  </NavLink>
                  <NavLink exact="true" to="/signup">
                    Register
                  </NavLink>
                </div>
                <div className="cart-btn" onClick={cartHandler}>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    color="red"
                    size="lg"
                  />{" "}
                  {list.itemList.length} Items
                </div>
              </div>
            </div>
          </Container>
        </nav>
      </header>
      {cartRender && <Cart cartHandler={cartHandler} cartRender={cartRender} />}
    </>
  );
};

export default Header;
