import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export function Post( post ) {
    const [ image, setImage ] = useState("https://projectsengine.com/wp-content/themes/zing/src/img/placeholder.jpg");

    const getMedia = async () => {
        try {
            const res = await fetch(`${process.env.WEBSITE}wp-json/wp/v2/media/` + post.post.featured_media);
    
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
            <img src={image} alt={post.post.title.rendered} title={post.post.title.rendered} />
            {/* <a href={post.post.link}><h3>{post.post.title.rendered}</h3></a> */}
            <h3><Link to={`/${post.post.slug}`} alt={post.post.title.rendered}>{post.post.title.rendered}</Link></h3>
            <p dangerouslySetInnerHTML={{__html: post.post.excerpt.rendered}} />
        </article>
    )
}

Post.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.shape({
            rendered: PropTypes.string
        }).isRequired,
        slug: PropTypes.string
    }).isRequired
}