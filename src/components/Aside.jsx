import React from "react";
import add from "../img/add.svg";
import overview from "../img/overview.svg";
import matrix from "../img/matrix.svg";
import confi from "../img/confi.svg";
import "./Aside.css";

const Aside = () => {
  return (
    <aside className="">
      <nav>
        <ul className="">
          <li>
            <img src={overview} alt="overview" />
          </li>
          <li>
            <img src={matrix} alt="field of the matrix skills" />
            My skill Matrix
          </li>
          <li>
            <img src={add} alt="field to create to new user" />
            Create
          </li>
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
