import React from "react";
import search from "../img/list/search-icon.svg";

function SearchBar({setKeyword}) {

       return (
         <>
           <div className="searchInput ">
             <input
               type="text"
               name=""
               placeholder="Search pathfindee"
               onChange={(e) => setKeyword(e.target.value)}
             />
             <img src={search} alt="" />
           </div>
         </>
       );
}

export default SearchBar;