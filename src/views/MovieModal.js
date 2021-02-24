import React from 'react'
import PropTypes from 'prop-types'

class MovieModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: null,
            overview: null,
            posterPath: null
        }
    }

    componentDidMount() {
        this.setState({title: this.props.movieData.title, overview: this.props.movieData.overview, posterPath: this.props.movieData.poster_path})
    }

    render() {
        return (
            <div className="movie-modal">
                {this.state.posterPath !== null ? <img src={'http://image.tmdb.org/t/p/w342' + this.state.posterPath}/> : null}
                {this.state.title !== null ? this.state.title : null}
                <div>
                    {this.state.overview !== null ? this.state.overview : null}
                </div>
            </div>
        )
    }
}

MovieModal.propTypes = {
    movieData: PropTypes.object
}

export default MovieModal
