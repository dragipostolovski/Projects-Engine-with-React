import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { render } from "@testing-library/react";


export function Post( post ) {
    const [ image, setImage ] = useState("https://projectsengine.com/wp-content/themes/zing/src/img/placeholder.jpg");

    const getMedia = async () => {
        try {
            const res = await fetch('https://projectsengine.com/wp-json/wp/v2/media/' + post.post.featured_media);
    
            if( res.ok ) {
                const response = await res.json();

                setImage( response.guid.rendered );
            }
        } catch (e) {
            // console.error(e);
        }
    }

    useEffect( () => {
        getMedia();
    }, [])
    
    return (
        <article className="c-grid__item">
            <img src={image} alt={post.post.title.rendered} />
            <a href={post.post.link}><h3>{post.post.title.rendered}</h3></a>
            <p dangerouslySetInnerHTML={{__html: post.post.excerpt.rendered}} />
        </article>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.shape({
            rendered: PropTypes.string
        }).isRequired
    }).isRequired
}