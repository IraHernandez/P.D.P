import React from 'react';
import { useState } from 'react';
import { addRole } from '../../firebase/Firestore';
import roboto from "../../img/roboto.png";
import "./Form.css";

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
        <>
        <form className="form">
            <section className="section__elements">
                <p className="form__title">Create Role</p>
                <label className="form__labels">Name*</label>
                <input className="form-control rounded-pill form__inputs"
                        type="text"
                        placeholder=" Name of the role"
                        onChange={(e) => setName(e.target.value, name)}
                        required
                    />
                <br />
                <label className="form__labels">Asociated capability*</label>
                <select
                    className="form-control rounded-pill form__inputs"
                    type="text"
                    onChange={(e) => setRole(e.target.value, role)}
                    required>
                    <option value="Creative">Creative</option>
                    <option value="Data">Data</option>
                    <option value="Tech">Tech</option>
                    <option value="PMO">PMO</option>
                    <option value="Admin">Admin</option>
                    <option value="Media">Media</option>
                </select>
                <br />
                <label className="form__labels">Level of the role*</label>
                <select
                    className="form-control rounded-pill form__inputs"
                    type="text"
                    onChange={(e) => setLevel(e.target.value, level)}
                    required>
                    <option value="Junior"> Junior </option>
                    <option value="Semi Senior"> Semi Senior </option>
                    <option value="Senior"> Senior </option>
                </select>
                <br />
                <button className="form__button" onClick={newRole}>Save</button>
            </section>
        </form>
        <img className="image-roboto" src={roboto} alt="I'm a magic robot"/>
        </>
    );

}

export default Form;