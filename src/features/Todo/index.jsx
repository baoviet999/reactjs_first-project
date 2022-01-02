import React, { useEffect, useRef, useState } from "react";
import TodoList from "./components/TodoList";
// import PropTypes from 'prop-types';

function TodoFeature() {
    const initCourses = [
        {
            name: "Javascriipt",
            id: 1,
            status: "completed",
        },
        {
            name: "PHP",
            id: 2,
            status: "none",
        },
        {
            name: "Reactjs",
            id: 3,
            status: "completed",
        },
    ];
    const [courses, setCourses] = useState(initCourses);
    const [course, setCourse] = useState("");
    const [filterCourse, setFilterCourse] = useState('all');
    const handleClick = (index) => {
        const newCourse = [...courses];
        newCourse[index] = {
            ...newCourse[index],
            status: newCourse[index].status === "completed" ? "none" : "completed",
        };
        setCourses(newCourse);
    };
    const handleChange = (value) => {
        setCourse(value);
    };
    const handleAdd = () => {
        setCourses(prev => (
            [...prev , {name : course , status : "none"}]
        ))
    };
    const handleDel = (i) => {
        const newCourse = [...courses]
        newCourse.splice(i, 1)
        setCourses(newCourse);
    }

    const handleFil = () => {
        setFilterCourse("none");
    }
    const handleFil1 = () => {
        setFilterCourse("completed");
    }
    const handleFil2 = () => {
        setFilterCourse('all')
    };

    const rederCourse = courses.filter(x => filterCourse === 'all' || filterCourse === x.status)

    return (
        <div>
            <button onClick={handleFil}>Filter new</button>
            <button onClick={handleFil1}>Filter complete</button>
            <button onClick={handleFil2}>Filter All</button>
            <TodoList
                courses={rederCourse}
                onClick={handleClick}
                course={course}
                onChange={handleChange}
                onAdd={handleAdd}
                onDel={handleDel}
            />
        </div>
    );
}

export default TodoFeature;
