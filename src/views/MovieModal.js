import React from 'react'
import PropTypes from 'prop-types'
import API from '../api'

class MovieModal extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        API.get(`/movie/${this.props.movieId}`)
    }

    render() {
        return (
            <div className="h-full w-full bg-blue-500">
                {this.props.movieId}
            </div>
        )
    }
}

MovieModal.propTypes = {
    movieId: PropTypes.number.isRequired
}

export default MovieModal
