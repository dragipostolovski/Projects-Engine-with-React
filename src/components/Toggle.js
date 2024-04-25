import { useToggle } from '../hooks/useToggle';

const Toggle = () => {
  // if you return array you can rename them
  // if you have multiple uses
  // const [ isToggled, setMenu, toggle ] = useToggle( false );
  
  const { isToggled, toggle } = useToggle( false );

  return (
    <div>
        <button onClick={toggle}>Toggle</button>
        { isToggled &&<p>To be toggled</p> }
    </div>
  )
}

export default Toggle;