import React from "react";
import "./SkillsMenu.css";

function SkillsMenu () {
    return (
        <>
        <header className="skills-menu">
            <h1>Skills Matrix</h1>
            <select
                className="skills-menu__select"
                type="text"
                required>
                <option value="Creative">Creative</option>
                <option value="Data">Data</option>
                <option value="Tech">Tech</option>
                <option value="PMO">PMO</option>
                <option value="Admin">Admin</option>
                <option value="Media">Media</option>
            </select>
        </header>
        </>
    )
}

export default SkillsMenu;