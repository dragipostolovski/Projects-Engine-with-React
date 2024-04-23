// Words.js

import { useState, useRef, useEffect } from "react";
import { Lesson } from "./Lesson";
import { Search } from "../Search";

const lessons = [
    {
        id: 1,
        title: "Component creation flow and prop types"
    },
    {
        id: 2,
        title: "Implicit return"
    },
    {
        id: 3,
        title: "Basic filtering with State"
    }
]

export function Lessons () {
    const [find, setFind] = useState("");
    const lessonsRef = useRef(null);

    useEffect( () => {
        console.log('Effect!');
    }, [find] ) // tell useEffect when to run, when find is changed
    
    return (
        <div ref={lessonsRef}>
            {/* unordered list */}

            <Search find={find} setFind={setFind} label="Find lesson"/>
            
            <ul>
                {lessons.filter( (lesson) => 
                    lesson.title.toLowerCase().includes(find.toLowerCase())
                ).map((lesson) => (
                    <Lesson key={lesson.id} lesson={lesson} />
                ))}
            </ul>
        </div>
    )
}