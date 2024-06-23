import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../custum_hooks/useOnlineStatus";

const Header = () => {
  const [loginButton, setLoginButton] = useState(["login"]);
  const [cartButtonName, setCartButtonName] = useState(["Add to cart"]);
  useEffect(() => {}, [loginButton]);
  const onlineStatus = useOnlineStatus();
  return (
    <header className="header flex justify-between bg-amber-600 px-2 py-2">
      <Link to="/">
        <img
          className="header_image"
          width="75px"
          height="75px"
          alt="react_icon"
          src={require("../../assets/image/swiggy_icon.jpg")}
        />
      </Link>
      <div className="menu-container flex items-center">
        <Link to="/">
          <a className="px-3 font-semibold  hover:text-amber-50">🏠 Home</a>
        </Link>
        <Link to="/offers">
          <a className="px-3 font-semibold  hover:text-amber-50">🆕 Offers</a>
        </Link>
        <Link to="/help">
          <a className="px-3 font-semibold  hover:text-amber-50">🆘 Help</a>
        </Link>
        <Link to="/signin">
          <a className="px-3 font-semibold  hover:text-amber-50">👤 Signln</a>
        </Link>
        <Link to="/cart">
          <a className="px-3 font-semibold  hover:text-amber-50">🛒 Cart</a>
        </Link>
        <span className="px-3 font-semibold  hover:text-green-600">
          {onlineStatus ? "🟢 Online" : "🔴 Offline"}
        </span>
        <button
          className="child_btn  px-3 font-semibold  hover:text-amber-50"
          onClick={() => {
            setLoginButton(loginButton === "login" ? "logout" : "login");
          }}
        >
          {loginButton}
        </button>
        <button
          className="add-to-cart-btn px-3 font-semibold  hover:text-amber-50"
          onClick={() => {
            setCartButtonName(
              cartButtonName === "Add to cart" ? "Payment" : "Add to cart"
            );
          }}
        >
          {cartButtonName}
        </button>
      </div>
    </header>
  );
};
export default Header;
