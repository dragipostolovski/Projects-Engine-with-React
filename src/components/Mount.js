import { useMount, useUnmount } from "../hooks/useMount";
import { useToggle } from "../hooks/useToggle";

export const Mount = () => {
    const { isToggled, toggle } = useToggle(false);

    return (
        <div>
            <button onClick={toggle}>Toggle</button>
            {isToggled && <UnMount /> }
        </div>
    )
}

export const UnMount = () => {
    useMount( () => {
        console.log('Mounted!');
    });

    useUnmount( () => {
        console.log('UnMounted!');
    });

    return <p>Unmount me!</p>
}