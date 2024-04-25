import { useState } from 'react';

export const useInc = ( {
    defualt = 0,
    max = 200,
    min = -10,
    step = 1
} ) => {
    const [ value, setValue ] = useState(defualt);

    const dec = () => setValue( prevState => ( prevState - step <= min ? min : prevState - step ) )
    const inc = () => setValue(prevState => ( prevState + step >= max ? max : prevState + step ) )
    const reset = () => setValue( defualt )

    return [ value, { inc, dec, reset } ];
}