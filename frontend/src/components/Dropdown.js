import React, { useState, useEffect } from 'react'

function Dropdown({ handleSelect }) {
    const [courses, setCourses] = useState([])
    const [options, setOptions] = useState([])

    useEffect(() => {
        fetch('http://localhost:4001/getCourses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    useEffect(() => {
        if (courses.length > 0) {

            // filter down to only accessible courses
            const accessibleCourses = courses.filter(course => !course.access_restricted_by_date)

            // select the first course in our list as initially selected
            const first = accessibleCourses[0].id
            handleSelect(first.toString())

            // make JSX options for each accesible course and set to state
            const dropdownOptions = accessibleCourses.map(course => <option key={course.id} value={course.id}>{course.name}</option>)
            setOptions(dropdownOptions)
        }
    }, [courses, handleSelect])

    // trigger change to discussion component when new course is selected
    const change = (e) => {
        const id = e.target.value
        handleSelect(id)
    }

    return (
        <div>
            <label htmlFor='courses'>Choose a course: </label>
            <select id='courses' onChange={change}>
                {options}
            </select>
        </div >
    )
}

export default Dropdown