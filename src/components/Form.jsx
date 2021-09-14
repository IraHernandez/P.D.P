import React from 'react';
import { useState } from 'react';
import { addRole } from '../firebase/Firestore';

function Form() {
    // Hooks to store user information
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [level, setLevel] = useState('');

    const valueUser = {
        name: name,
        role: role,
        level: level,
    }

    const newUser = () => {
        addRole(valueUser)
    }

    return (
        <div>
            <header>
                <h1>Create Role</h1>
            </header>
            <label>Name*
                <input
                    type="text"
                    placeholder="Name of the role"
                    onChange={(e) => setName(e.target.value, name)}
                />
            </label>
            <br />
            <label>Asociated capability*
                <select
                    type="text"
                    placeholder="Name of the role"
                    onChange={(e) => setRole(e.target.value, role)}>
                    <option value="1"> Data </option>
                    <option value="2"> Creative </option>
                    <option value="3"> Tech </option>
                    <option value="4"> PMO </option>
                    <option value="5"> Admin </option>
                    <option value="6"> Media </option>
                </select>
            </label>
            <br />
            <label>Level of the role*
                <select
                    type="text"
                    placeholder="Name of the role"
                    onChange={(e) => setLevel(e.target.value, level)}>
                    <option value="1"> Option1 </option>
                    <option value="2"> Option2 </option>
                </select>
            </label>
            <button>Guardar</button>

        </div>
    );

}

export default Form;