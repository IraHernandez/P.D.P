import React from 'react'
import logo from "../img/logo.png"
import menuGroupe from "../img/menuGroupe.svg"
import Notification from "../img/Notification.svg"
import "./Header.css"

const Header = ()=> {
  return (
    <div>
      <header>
        <div className="header-logo ">
          <img src={logo} alt="Logo de la página" />
        </div>
        <div className="header-menu ">
          <img src={menuGroupe} alt="menu de página" className="menu" />
          <div className="barra"></div>
          <img
            src={Notification}
            alt="logo de notificación"
            className="notification"
          />
          <p>Cesar Avellaneda</p>
        </div>
      </header>

    </div>
  )
};


export default Header;


