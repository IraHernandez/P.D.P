import React from "react";
import like from "../img/card/like.svg";
import diamond from "../img/card/diamond.svg";
import file from "../img/card/file.svg"
import { Link } from "react-router-dom";
import "./Card.css"


function Card({ name, role, progress, level,img,id}) {
    console.log(img)
    return (
  <div className="cards ">
        <div className={progress < 50 ? "cardGround" : "cardCground2"}>
          <div className="avatar">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="card-info">
          <Link to={`/skills/${id}`}> {name}</Link>
          <p>Creative Disigner</p>
          <p>Senior</p>
        </div>
        <div className="progress-content">
          <p>Progress</p>
          <p>20%</p>
        </div>
        <div className="progressContent">
          <div className="progress"></div>
        </div>
        <div className="progress-advance"></div>
        <hr />
        <div className="qualitiesContent ">
          <div className="quality">
            <img src={diamond} alt="" />
            <p>Hard skills</p>
          </div>
          <div className="quality">
            <img src={like} alt="" />
            <p>Hard skills</p>
          </div>
          <div className="quality">
            <img src={file} alt="" />
            <p>Hard skills</p>
          </div>
        </div>
      </div>
    );
  };

export default Card;