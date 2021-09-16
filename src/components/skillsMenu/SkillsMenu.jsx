import React from "react";
import hardskills from "../../img/hardskills.svg";
import competences from "../../img/competences.svg";
import versions from "../../img/versions.svg";
import "./SkillsMenu.css";

function SkillsMenu(){
    return (
        <div className="skills-content">
            <div className="skills-links">
              <img src={hardskills} alt="" />
              <p>Hardskills</p>
            </div>
            <div className="skills-links">
              <img src={competences} alt="" />
              <p>Competences</p>
            </div>
            <div className="skills-links">
              <img src={versions} alt="" />
              <p>Versions</p>
            </div>
            <div>
                <button className="button">Save version</button>
            </div>
            <div className="line-separate-skills"></div>
          </div>
    )
}

export default SkillsMenu;