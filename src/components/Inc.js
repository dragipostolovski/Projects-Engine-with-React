import { useInc } from '../hooks/useInc';

export const Inc = () => {
    const [ volume, { inc, dec, reset } ] = useInc({
        // default: 0,
        max:  10,
        min: 0,
        step: 3
    })

    return (
        <div>
            <button onClick={dec}>-</button>
            <span className='c-number'>{volume}</span>
            <button onClick={inc}>+</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}