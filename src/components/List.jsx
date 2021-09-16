import React from "react";
import { getUsers } from "../firebase/Firestore";
import { useState, useEffect } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";
import cratk from "../img/list/cratk-icon.svg"
import people from "../img/list/people-icon.svg";
import path from "../img/list/path-icon.svg";
import search from "../img/list/search-icon.svg";
import "./List.css"
import "./Card.css"

function List() {
    const [user, setUser] = useState([]);
    const [input, setInput] = useState('');
    const [keyWord, setKeyWord] = useState('');

    useEffect(() => {
        getUsers(setUser)
    }, []);

    const updateInput = async (input) => {
        setKeyWord (input);
    }
    return (
      <>
        <div className="cards-container">
          <div className="user-content">
            <div className="user-links">
              <img src={path} alt="" />
              <p>Pathfindees</p>
            </div>
            <div className="user-links ">
              <img src={cratk} alt="" />
              <p>Craft people</p>
            </div>
            <div className="user-links">
              <img src={people} alt="" />
              <p>People in charge</p>
            </div>
          </div>
          <div className="title-block ">
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