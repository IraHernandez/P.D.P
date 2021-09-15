import React from 'react';
import { useState } from 'react';
import { addRole } from '../firebase/Firestore';

function Form() {
    // Hooks to store user information
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [level, setLevel] = useState('');

    const valueRole = {
        name: name,
        role: role,
        level: level,
    }

    const newRole = () => {
        addRole(valueRole)
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
                    onChange={(e) => setRole(e.target.value, role)}>
                    <option value="Data"> Data </option>
                    <option value="Creative"> Creative </option>
                    <option value="Tech"> Tech </option>
                    <option value="PMO"> PMO </option>
                    <option value="Admin"> Admin </option>
                    <option value="Media"> Media </option>
                </select>
            </label>
            <br />
            <label>Level of the role*
                <select
                    type="text"
                    onChange={(e) => setLevel(e.target.value, level)}>
                    <option value="Junior"> Junior </option>
                    <option value="Semi Senior"> Semi Senior </option>
                    <option value="Senior"> Senior </option>
                </select>
            </label>
            <br />
            <button onClick={newRole}>Save</button>

        </div>
    );

}

export default Form;