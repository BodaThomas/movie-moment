import React from 'react'
import PropTypes from 'prop-types'

class Movie extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.data.poster_path !== null ? this.props.data.poster_path : null}<br/>
                {this.props.data.title !== null ? this.props.data.title : null}
            </div>
        )
    }
}

Movie.propTypes = {
    data: PropTypes.object
}

export default Movie
