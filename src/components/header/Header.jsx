import React from "react";
import logo from "../../img/logo.png";
import menuGroupe from "../../img/menuGroupe.svg";
import Notification from "../../img/Notification.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header-logo ">
          <img src={logo} alt="page logo" />
        </div>
        <div className="header-menu ">
          <img src={menuGroupe} alt="menu page" className="menu" />
          <div className="barta"></div>
          <img
            src={Notification}
            alt="notification logo"
            className="notification"
          />
          <p>Cesar Avellaneda</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
