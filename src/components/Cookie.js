import { useCookie } from "../hooks/index";

const Cookie = () => {
    const [cookie, setCookie ] = useCookie({key: 'pe:menu'})

    return (
        <>
            <h2>Cookies</h2>
            <p>Cookie: {cookie}</p>
            <input type="text" name="cookie" id="cookie" value={cookie} onChange={ e => setCookie(e.target.value) } />
        </>
    )
}

export default Cookie;