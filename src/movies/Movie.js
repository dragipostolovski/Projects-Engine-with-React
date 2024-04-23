// Movie.js

import PropTypes from 'prop-types';

export function Movie({movie}) {
    return (
        <li>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
        </li>
    )
}

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired
}