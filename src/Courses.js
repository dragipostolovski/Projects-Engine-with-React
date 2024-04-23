// Courses.js

import { useState } from "react";

const courses = [
    {
        id: 1,
        name: "JavaScript Essential Training"
    },
    {
        id: 2,
        name: "WordPress Development for Beginners"
    },
    {
        id: 3,
        name: "React for Everyone"
    }
]

export function Courses () {
    const [find, setFind] = useState('');
    
    return (
        <div>
            {/* unordered list */}
            <label for="search">
                Find course:
                <input name="search" id="search" value={find} onChange={(e) => setFind(e.target.value)} />
            </label>
            
            <ul>
                {/* {courses.map((course) => {
                    return (
                        <li key={course.id}>{course.name}</li>
                    )
                })} */}

                {/* {courses.filter((course) => {
                    return course.name.toLowerCase().includes(find.toLowerCase())
                }).map((course) => {
                    return (
                        <li key={course.id}>{course.name}</li>
                    )
                })} */}

                {courses.filter( (course) => 
                    course.name.toLowerCase().includes(find.toLowerCase())
                ).map((course) => (
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul>
        </div>
    )
}