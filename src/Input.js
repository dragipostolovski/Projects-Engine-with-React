// Input.js

import { useState } from "react";

export function Input() {
    // const [ state, setState ] = useState(defualtState)
    const [ value, setValue] = useState('');
    
    return (
        <div>
            {value && <p>{value}</p>}
            <input name="search" id="search" className="input-field" value={value} 
            
            // onChange={ (e) => setValue( e.target.value ) } 

            // OR
            onChange={ (e) => { // event
                if( !e.target.value.includes("t") ) {
                    setValue( e.target.value ) 
                }
            }
            }
            />
        </div>
    );
}