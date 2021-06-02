//실제로 할일 axios를 통해 받은 movie 데이터를 렌더링하기.
import React from "react"
import PropTypes from "prop-types"

function Movie({id, year, title, summary, poster}){
    return <h1>{title}</h1>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie