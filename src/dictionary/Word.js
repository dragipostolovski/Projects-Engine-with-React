// Word.js

import PropTypes from 'prop-types';

export function Word({word}) {
    return (
        <li>{word.name}</li>
    )
}

Word.propTypes = {
    word: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
}