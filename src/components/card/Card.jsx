import React from "react";

function Card({ name, role, progress, level }) {

    return (
        <>
            <div>
                <h1>Name: {name}</h1>
                <h3>Level: {level}</h3>
            </div>

        </>
    )

}

export default Card;