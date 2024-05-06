import { useAppState } from '../state'

export default function Nav() {
     const { isMenuOpen, toggleMenu } = useAppState();

     if( !isMenuOpen) return null;
   
     return (
          <nav style={{
               background: "#000",
               height: "100vh",
               width: "100vh",
               position: 'absolute',
               left: 0,
               right: 0
          }}>

          <a href="/" alt="Home">Home</a>
          <a href="hooks" alt="Hooks">Hooks</a>
          <button onClick={toggleMenu}>Close</button>

     </nav>
    )
}
