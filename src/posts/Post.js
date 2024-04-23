export function Post( post ) {
    return (
        <article className="c-grid__item">
            <h3>{post.post.title.rendered}</h3>
            <p dangerouslySetInnerHTML={{__html: post.post.excerpt.rendered}} />
        </article>
    )
}