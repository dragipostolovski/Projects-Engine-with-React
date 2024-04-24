// Movie.js

import PropTypes from 'prop-types';

export function Movie({movie}) {
    return (
        <div className='c-grid__item'>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
        </div>
    )
}

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired
}