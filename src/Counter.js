// Counter.js

import { useState } from "react";

export function Counter() {
    // const [ state, setState ] = useState(defualtState)
    const [ number, setNumber ] = useState(0);
    
    return (
        <div>
            <h3>{number}</h3>
            <button onClick={() => setNumber(number + 1)}>+</button>
            <button onClick={() => setNumber(number - 1)}>-</button>
        </div>
    );
}