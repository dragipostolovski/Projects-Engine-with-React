// Accordion.js

import { useState } from "react";

export function Accordion() {
    // const [ state, setState ] = useState(defualtState)
    const [ toggled, setToggled] = useState(false);

    const displayText = toggled ? (<p>Projects Engine - Fueling the potential of your digital engine.</p>) : '';
    
    return (
        <div>
            {/* It is time for JavaScript */}
            { toggled && <p>Projects Engine - Fueling the potential of your digital engine.</p>}
            {/* OR */}
            { toggled ? <p>Projects Engine - Fueling the potential of your digital engine.</p> : ''}
            {/* OR */}
            {displayText}
            <button onClick={() => setToggled(!toggled)}>Click me</button>
        </div>
    );
}