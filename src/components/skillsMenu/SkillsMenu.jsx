import React from "react";
import "./SkillsMenu.css";
import search from "../../img/card/serach-Icon.svg"
import like from "../../img/card/like.svg"
import diamond from "../../img/card/diamond.svg"
import version from "../../img/card/verssiones.svg"
import progress from "../../img/card/progress1.svg"

function SkillsMenu () {
    return (
      <>
        <main className="skills-menu">
          <div className="main-content">
            <div className="info-content ">
              <div className="blockTitle">
                <h1 className="blockTitle__title">Skill Matrix</h1>
                <div className="searchInput">
                  <input type="text" placeholder="Change pathfindee" />
                  {<img src={search} alt="" />}
                </div>
              </div>
              <div className="blockProgress">
                <div className="blockName">
                  <h1 className="blockName__title">Laura Bustos</h1>
                  <h4 className="blockName__title--role" >Senior Creative Designer</h4>
                </div>
                <div className="blockImage">
                  <p className="bold">20%</p>
                  <span className="label">of matrix</span>
                </div>
              </div>
            </div>
            <div className="modeContent ">
              <div className="habilities">
                <div className="hability">
                  {<img src={diamond} alt="diamond" />}
                  <span className="hability__title">Hardskills</span>
                </div>
                <div className="hability">
               {   <img src={like} alt="" /> }
                  <span>Competences</span>
                </div>
                <div className="hability">
                  {<img src={version} alt="" />}
                  <span>Versions</span>
                </div>
              </div>
              <button>Save version</button>
            </div>
            <div className="sortContent ">
              <span>Sort: </span>
               <img src={progress} alt="" />
            </div>
            <div className="tableContent">
              <table class="table table-responsive-sm table-responsive-md caption-top">
                <thead>
                  <tr>
                    <th scope="col">Skill</th>
                    <th scope="col">Role Level</th>
                    <th scope="col">Valoration</th>
                    <th scope="col">Result</th>
                    <th scope="col">Action Plan</th>
                    <th scope="col">Progress</th>
                    <th scope="col">Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <div className="content-select">
                        <select name="" id="">
                          <option value="Familiar">Click to evaluate</option>
                          <option value="Familiar">Familiar</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Experienced">Experienced</option>
                          <option value="Proficient">Proficient</option>
                          <option value="Expert">Expert</option>
                        </select>
                        <i></i>
                      </div>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <div className="content-select">
                        <select name="" id="">
                          <option value="Familiar">Click to evaluate</option>
                          <option value="Familiar">Familiar</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Experienced">Experienced</option>
                          <option value="Proficient">Proficient</option>
                          <option value="Expert">Expert</option>
                        </select>
                        <i></i>
                      </div>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <div className="content-select">
                        <select name="" id="">
                          <option value="Familiar">Click to evaluate</option>
                          <option value="Familiar">Familiar</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Experienced">Experienced</option>
                          <option value="Proficient">Proficient</option>
                          <option value="Expert">Expert</option>
                        </select>
                        <i></i>
                      </div>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <div className="content-select">
                        <select name="" id="">
                          <option value="Familiar">Click to evaluate</option>
                          <option value="Familiar">Familiar</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Experienced">Experienced</option>
                          <option value="Proficient">Proficient</option>
                          <option value="Expert">Expert</option>
                        </select>
                        <i></i>
                      </div>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <div className="content-select">
                        <select name="" id="">
                          <option value="Familiar">Click to evaluate</option>
                          <option value="Familiar">Familiar</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Experienced">Experienced</option>
                          <option value="Proficient">Proficient</option>
                          <option value="Expert">Expert</option>
                        </select>
                        <i></i>
                      </div>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <div className="content-select">
                        <select name="" id="">
                          <option value="Familiar">Click to evaluate</option>
                          <option value="Familiar">Familiar</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Experienced">Experienced</option>
                          <option value="Proficient">Proficient</option>
                          <option value="Expert">Expert</option>
                        </select>
                        <i></i>
                      </div>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <div className="content-select">
                        <select name="" id="">
                          <option value="Familiar">Click to evaluate</option>
                          <option value="Familiar">Familiar</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Experienced">Experienced</option>
                          <option value="Proficient">Proficient</option>
                          <option value="Expert">Expert</option>
                        </select>
                        <i></i>
                      </div>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                      <div className="content-select">
                        <select name="" id="">
                          <option value="Familiar">Click to evaluate</option>
                          <option value="Familiar">Familiar</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Experienced">Experienced</option>
                          <option value="Proficient">Proficient</option>
                          <option value="Expert">Expert</option>
                        </select>
                        <i></i>
                      </div>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </>
    );
}
export default SkillsMenu;
