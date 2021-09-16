import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Table({ skill, roleLevel, valoration, result, progress }) {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <h3>Skill: {skill}</h3>
            <h3>Role Level: {roleLevel}</h3>
            <label><h3>Valoration:</h3>
                <select>
                    <option value="2">{valoration}</option>
                </select>
            </label>
            <h3>Result: {result}</h3>
            <h3>Action Plan:</h3>
            <input type="file" />
            <h3>Progress: {progress}</h3>
            <h3>Deadline:</h3>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

        </div>
    )
}

export default Table;