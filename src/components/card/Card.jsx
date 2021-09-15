import React from "react";

function Card({ name, role, progress, level}) {

    return(
        <>       
        <h2>Name: {name}</h2>
        <h3>Level: {level}</h3>
        </>
    )

}

export default Card;