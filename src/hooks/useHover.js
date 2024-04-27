import {useState, useMemo} from 'react'

export const useHover = () => {
    const [ isHover, setHover ] = useState(false)

    const bindMemo = useMemo( () => {
        return {
            onMouseOver: () => setHover(true),
            onMouseLeave: () => setHover(false)
        }
    }, [])

    return [isHover, bindMemo];
}