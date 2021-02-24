import React from 'react'
import PropTypes from 'prop-types'

class Movie extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="flex flex-col justify-center items-center">
                {this.props.data.poster_path !== null ? <img src={'http://image.tmdb.org/t/p/w185' + this.props.data.poster_path} className="rounded-xl"/> : null}
                {this.props.data.title !== null ? <p className="overflow-clip overflow-hidden">{this.props.data.title}</p> : null}
            </div>
        )
    }
}

Movie.propTypes = {
    data: PropTypes.object.isRequired
}

export default Movie
