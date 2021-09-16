import React from "react";
import hardskills from "../../img/hardskills.svg";
import competences from "../../img/competences.svg";
import versions from "../../img/versions.svg";
import "./SkillsMenu.css";

function SubMenu(){
    return (
        <div className="submenu">
          <section className="submenu__links-button">
            <div className="submenu__links-section">
              <button className="submenu__links">
                <img src={hardskills} alt="" />
                <p className="submenu__tittle">Hardskills</p>
              </button>
              <button className="submenu__links">
                <img src={competences} alt="" />
                <p className="submenu__tittle">Competences</p>
              </button>
              <button className="submenu__links">
                <img src={versions} alt="" />
                <p className="submenu__tittle">Versions</p>
              </button>
            </div>
            <div>
                <button className="submenu__save-button">Save version</button>
            </div>
          </section>
              <div className="submenu__line"></div>
          </div>
    )
}

export default SubMenu;