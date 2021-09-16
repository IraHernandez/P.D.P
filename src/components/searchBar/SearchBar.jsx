import React from "react";

function SearchBar({setKeyword}) {
    
       return (
        <>
            <input
                type="text"
                name=""
                placeholder="Search pathfindee"
                onChange={(e) => setKeyword(e.target.value)}
            />
        </>
    )
}

export default SearchBar;