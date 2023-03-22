import React, { useState } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clickIcon, setClickIcon] = useState(false);
  const handleClick = () => {
    setClickIcon(!clickIcon);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Humsafar Tours & Travels</h1>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clickIcon ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clickIcon ? " nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
