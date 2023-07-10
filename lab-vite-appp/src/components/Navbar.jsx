// ./src/components/Navbar.jsx

import React from "react";
import ironhackLogo from "../assets/ironhack-logo-xs.png";
import menuIcon from "../assets/menu-top-xs.png";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <img src={ironhackLogo} alt="ironhack logo" />
        <img src={menuIcon} alt="menu icon" />
      </nav>
    );
  }
}

export default Navbar;
