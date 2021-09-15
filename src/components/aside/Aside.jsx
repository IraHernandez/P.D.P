import React from "react";
import add from "../../img/add.svg";
import overview from "../../img/overview.svg";
import matrix from "../../img/matrix.svg";
import confi from "../../img/confi.svg";
import "./Aside.css";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="">
      <nav>
        <ul className="">
          <Link className="aside-link" to="/">
            <img src={overview} alt="overview" />
          </Link>
          <Link className="aside-link" to="/skills">
            <img src={matrix} alt="field of the matrix skills" />
            My skill Matrix
          </Link>
          <Link className="aside-link" to="/create-role">
            <img src={add} alt="field to create to new user" />
            Create
          </Link>
        </ul>
      </nav>
      <div className="settings-content ">
        <div className="line-separate"></div>
        <div className="settings">
          <img src={confi} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
