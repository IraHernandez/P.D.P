import React from "react";
import add from "../../img/add.svg";
import overview from "../../img/overview.svg";
import matrix from "../../img/matrix.svg";
import confi from "../../img/confi.svg";
import "./Aside.css";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="aside-menu">
      <nav>
        <ul className="aside-menu__list">
          <Link className="aside-menu__links" to="/">
            <img src={overview} alt="overview" />
          </Link>
          <Link className="aside-menu__links" to="/my-skills">
            <img src={matrix} alt="field of the matrix skills" />
            My skill Matrix
          </Link>
          <Link className="aside-menu__links" to="/create-role">
            <img src={add} alt="field to create to new user" />
            Create
          </Link>
        </ul>
      </nav>
      <div>
        <div className="aside-menu__settings"></div>
        <div className="aside-menu__settings-img">
          <img src={confi} alt="" />
          <p className="aside-menu__settings-title">Settings</p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;