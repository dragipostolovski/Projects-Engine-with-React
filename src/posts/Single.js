
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_URL = `${process.env.REACT_APP_WEBSITE}wp-json/wp/v2/posts?slug=`;

export function Single() {
    const { slug } = useParams();

    const [ post, setPost ] = useState([]);

    const getPost = async () => {
        try {
            const res = await fetch(API_URL + slug);
            const response = await res.json();
            setPost(response);
        } catch (e) {
            console.error(e);
        }
    }


    useEffect( () => {
        getPost()
    }, [])

    if( post[0] === undefined ) {
        return
    }

    return (
        <article className="c-article">
            <div className="c-article__inner container">
                <h1 className="c-article__title">{post[0].title.rendered}</h1>
                <div className="c-article__content" dangerouslySetInnerHTML={{__html: post[0].content.rendered}} />
            </div>
        </article>
    )
}