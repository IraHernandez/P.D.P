import React from "react";
import menuGroupe from "../../img/menuGroupe.svg";
import Notification from "../../img/Notification.svg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-logo ">
        </div>
        <div className="header-menu  ">
          <div className="menu-and-bar">
            <img src={menuGroupe} alt="menu page" className="menu" />
            <div className="barra"></div>
          </div>
          <div className="notification-and-name ">
            <img
              src={Notification}
              alt="notification logo"
              className="notification"
            />
            <p>Cesar Avellaneda</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
