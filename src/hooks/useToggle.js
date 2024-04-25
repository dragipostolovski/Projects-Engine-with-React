import { useState } from 'react';

export const useToggle = ( defualt ) => {
    const [ isToggled, setToggle ] = useState(defualt);

    const toggle = () => setToggle(prevState => !prevState)

    // if you return array you can rename them
    // return [ isToggled, setToggle, toggle ];

    return { isToggled, setToggle, toggle };
}