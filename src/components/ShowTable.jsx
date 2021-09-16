import React from "react";
import { getSkills } from "../firebase/Firestore";
import { useState, useEffect } from "react";
import Table from "./Table";
import SkillsMenu from "./skillsMenu/SkillsMenu";

function ShowTable() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        getSkills(setSkills)
    }, []);

    return (
        <>
        <div>
            <SkillsMenu />

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