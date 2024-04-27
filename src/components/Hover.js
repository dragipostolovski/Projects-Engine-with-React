import { useHover } from "../hooks/useHover"

export default function Hover() {
   const [isHover, bind ] = useHover();

    return (
        <div {...bind} className={ isHover ? 'active' : ''}>
            <p>Let's hover this text!</p>
        </div>
    )
}