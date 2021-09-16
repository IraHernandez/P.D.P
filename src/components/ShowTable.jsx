import React from "react";
import { getSkills } from "../firebase/Firestore";
import { useState, useEffect } from "react";
import Table from "./Table";
import SkillsMenu from "./skillsMenu/SkillsMenu";
import SubMenu from "./skillsMenu/SubMenu"

function ShowTable() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        getSkills(setSkills)
    }, []);

    return (
        <>
        <div>
            <SkillsMenu />
            <SubMenu />

        </div>
        <div>
            {skills.map((skills) =>
                <Table key={skills.id}
                    skill={skills.skill}
                    roleLevel={skills.roleLevel}
                    valoration={skills.valoration}
                    result={skills.results}
                    progress={skills.progress}
                />
            )}

        </div>
        </>
    )
}
export default ShowTable;