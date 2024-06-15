import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginButton, setLoginButton] = useState(["login"]);
  useEffect(() => {}, [loginButton]);
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header_image"
          width="100px"
          height="100px"
          alt="react_icon"
          src={require("../../assets/image/swiggy_icon.jpg")}
        />
      </Link>
      <div className="menu-container">
        <Link to="/">Home</Link>
        <Link to="/offers">🆕 Offers</Link>
        <Link to="/help">🆘 Help</Link>
        <Link to="/signin">👤 Signln</Link>
        <Link to="/cart">🛒 Cart</Link>
        <button
          id="child_btn"
          onClick={() => {
            setLoginButton(loginButton === "login" ? "logout" : "login");
          }}
        >
          {loginButton}
        </button>
      </div>
    </header>
  );
};
export default Header;
