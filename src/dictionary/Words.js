// Words.js

import { useState, useRef } from "react";
import { Word } from "./Word";
import { Search } from "../Search";

const words = [
    {
        id: 1,
        name: "fuzzy searching"
    },
    {
        id: 2,
        name: "gutenberg"
    },
    {
        id: 3,
        name: "display_post_states"
    }
]

export function Words () {
    const [find, setFind] = useState("");
    const wordsRef = useRef(null);
    const findRef = useRef(null);
    
    return (
        <div ref={wordsRef}>
            {/* unordered list */}

            <form onSubmit={(e)=> {
                e.preventDefault();
                console.log( findRef.current.value )
            }}>

                <input name="find" id="find" ref={findRef}/>
                <button type="submot">Find word</button>
            </form>

            <Search find={find} setFind={setFind} />
            
            <ul>
                {words.filter( (word) => 
                    word.name.toLowerCase().includes(find.toLowerCase())
                ).map((word) => (
                    <Word key={word.id} word={word} />
                ))}
            </ul>
        </div>
    )
}