import React from "react";
import like from "../../img/card/like.svg";
import diamond from "../../img/card/diamond.svg";
import file from "../../img/card/file.svg"
import { Link } from "react-router-dom";
import "./Card.css"


function Card({ name, role, progress, level,img,id}) {
    console.log(img)
    return (
  <div className="cards">
        <div className={progress < 50 ? "cards__ground" : "cards__grounds"}>
          <div className="cards__avatar">
            <img src={img} alt="user avatar"/>
          </div>
        </div>
        <div className="cards__information">
          <Link to={`/skills/${id}`}> {name}</Link>
          <p className="cards__text">Creative Disigner</p>
          <p className="cards__text">Senior</p>
        </div>
        <div className="cards__progress-content">
          <p className="cards__text">Progress</p>
          <p className="cards__text">20%</p>
        </div>
        <div className="cards__progress-content-box">
          <div className="cards__progress"></div>
        </div>
        <div className="cards__progress-advance"></div>
        <hr />
        <div className="cards__menu">
          <div className="cards__menu-quality">
            <img src={diamond} alt="diamond" />
            <p>Hard skills</p>
          </div>
          <div className="cards__menu-quality">
            <img src={like} alt="heart" />
            <p>Competences</p>
          </div>
          <div className="cards__menu-quality">
            <img src={file} alt="file" />
            <p>Report</p>
          </div>
        </div>
      </div>
    );
  };

export default Card;