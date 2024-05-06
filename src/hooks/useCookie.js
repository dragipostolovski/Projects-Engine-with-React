import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useCookie = ({key}) => {
    const defualt = Cookies.get(key);
    const [cookie, setCookie] = useState(defualt)

    useEffect(()=> {
        Cookies.set(key, cookie);
    }, [key, cookie])

    return [ cookie, setCookie ];
}