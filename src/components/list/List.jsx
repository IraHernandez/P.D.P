import React from "react";
import { getUser } from "../../firebase/Firestore";
import { useState, useEffect } from "react";
import Card from "../card/Card";
import SearchBar from "../searchBar/SearchBar";

function List() {
    const [user, setUser] = useState([]);
    const [input, setInput] = useState('');
    const [keyWord, setKeyWord] = useState('');

    useEffect(() => {
        getUser(setUser)
    }, []);

    console.log(user)

    const updateInput = async (input) => {
        setKeyWord (input);
    }

    return (
        <>
            <SearchBar
                input={input}
                setKeyword={updateInput} />
            <div>
                {user                
                .filter((user) => user.firstName.toLowerCase().includes(keyWord.toLowerCase()) || user.lastName.toLowerCase().includes(keyWord.toLowerCase()))
                .map((user) =>
                    <Card key={user.id}
                        id={user.id}
                        level={user.Level}
                        role={user.Role}
                        name={user.firstName + " " + user.lastName} />
                )}
            </div>
        </>
    )
}

export default List;