// Search.js

import PropTypes from 'prop-types';

export function Search({ find, setFind, label="Find course" }) {
    return (
        <label htmlFor="search container">
            {label}
            <input type="text" name="search" id="search" value={find} onChange={(e) => setFind(e.target.value)} />
        </label>
    )
}

Search.propTypes = {
    find: PropTypes.string.isRequired,
    setFind: PropTypes.func.isRequired
}