import React from "react";
import menuGroupe from "../../img/menuGroupe.svg";
import Notification from "../../img/Notification.svg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="main-header__logo">
        </div>
        <div className="main-header__menu">
          <div className="main-header__dropdown-menu">
            <img src={menuGroupe} alt="menu page" className="main-header__menu-img" />
            <div className="main-header__bar"></div>
          </div>
          <div className="main-header__user-notifications">
            <img
              src={Notification}
              alt="notification logo"
            />
            <p className="main-header__user">Cesar Avellaneda</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
