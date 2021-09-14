import React from 'react'
import { Link, withRouter } from "react-router-dom"
import overview from "../img/overview.svg"
import matrix from "../img/matrix.svg"
import add from "../img/add.svg"
import "./Aside.css"


const Aside = ()=> {
  return (
  <aside>
    <nav>
      <ul className="">
        <div>
          <img src={overview} alt="" />
        </div>
        <div>
          <img src={matrix} alt="" />
          My skill Matrix
        </div>
        <div>
          <img src={add} alt="" />
          Create
        </div>
      </ul>
    </nav>
  </aside>
  )
};

export default Aside;
