import React from "react";
import logo from "../../assets/img/v-camp-logo.png";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import './header.scss';

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="V-camp logo" />
      </div>
      <div className="navbar-btn">
        <Link to="/login">
          <Button>Ingresá a tu portal</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
