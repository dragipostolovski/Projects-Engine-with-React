// Lesson.js

import PropTypes from 'prop-types';
import { useEffect } from "react";

export function Lesson({lesson}) {

    useEffect( () => {
        console.log(lesson.title)
    }, [] ) // empty array means only when something is rendered

    return (
        <li>{lesson.title}</li>
    )
}

Lesson.propTypes = {
    lesson: PropTypes.shape({
        title: PropTypes.string.isRequired
    }).isRequired
}