import React from "react";
import search from "../../img/list/search-icon.svg";

function SearchBar({setKeyword}) {
  return (
    <>
      <div className="search-bar">
        <input
          className="search-bar__input"
          type="text"
          name=""
          placeholder="Search pathfindee"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <img src={search} alt="barra buscadora"/>
      </div>
    </>
  );
}

export default SearchBar;