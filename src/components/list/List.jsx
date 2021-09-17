import React from "react";
import { getUsers } from "../../firebase/Firestore";
import { useState, useEffect } from "react";
import Card from "../card/Card";
import SearchBar from "../searchBar/SearchBar";
import cratk from "../../img/list/cratk-icon.svg"
import people from "../../img/list/people-icon.svg";
import path from "../../img/list/path-icon.svg";
import "./List.css"


function List() {
  const [user, setUser] = useState([]);
  const [keyWord, setKeyWord] = useState('');

  useEffect(() => {
      getUsers(setUser)
  }, []);

  console.log(user)

  const updateInput = async (input) => {
      setKeyWord (input);
  }
  return (
    <>
      <div className="overview">
        <div className="overview__menu">
          <div className="overview__menu-button">
            <img src={path} alt="Pathfindees button"/>
            <p className="overview__menu-titles">Pathfindees</p>
          </div>
          <div className="overview__menu-button">
            <img src={cratk} alt="craft people button"/>
            <p className="overview__menu-titles">Craft people</p>
          </div>
          <div className="overview__menu-button">
            <img src={people} alt="People in charge button"/>
            <p className="overview__menu-titles">People in charge</p>
          </div>
        </div>
        <div className="overview__title-pathfindees">
          <h1>Pathfindees |</h1>
          <SearchBar setKeyword={updateInput} />
        </div>
        <div className="card-content">
          {user
            .filter(
              (user) =>
                user.firstName
                  .toLowerCase()
                  .includes(keyWord.toLowerCase()) ||
                user.lastName.toLowerCase().includes(keyWord.toLowerCase())
            )
            .map((user) => (
              <Card
                key={user.id}
                id={user.id}
                level={user.Level}
                role={user.Role}
                name={user.firstName + " " + user.lastName}
                progress={parseInt(user.Progress)}
                img={user.img}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default List;