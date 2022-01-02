import React, { useState } from "react";
import PropTypes from "prop-types";
import './styles.scss'
import clsx from 'clsx';


function TodoList({ courses, onClick, course, onChange, onAdd , onDel}) {
    const handleOnClick = (index) => {
        onClick(index);
    };
    const handleChange = (value) => {
        onChange(value)
    };
    const handleAdd = ()=>{
        onAdd()
    }
    const handleDel = (i) => {
        onDel(i)
    }
    return (
        <>
            <input type="text" value={course} onChange={(e) => handleChange(e.target.value)} />
            <button onClick={handleAdd}>add</button>
            <ul>
                <h1>TODO LIST</h1>
                {courses.map((course, index) => (
                    <>
                        <li
                            key={index}
                            className={clsx({
                                completed: course.status === "completed",
                            })}
                            onClick={() => handleOnClick(index)}
                        >
                            {course.name}
                        </li>
                        <span onClick={() => handleDel(index)}>X</span>
                    </>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
