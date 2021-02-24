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
            <div className="movie-modal flex flex-row">
                <div className="m-auto w-1/3 flex-none">
                    {this.state.posterPath !== null ? <img src={'http://image.tmdb.org/t/p/w342' + this.state.posterPath}/> : null}
                </div>
                <div className="flex-none flex-wrap w-2/3 mx-5 my-4 space-y-5">
                    <h1 className="font-black text-4xl">
                        {this.state.title !== null ? this.state.title : null}
                    </h1>
                    <p className="text-justify">
                        {this.state.overview !== null ? this.state.overview : null}
                    </p>
                </div>
            </div>
        )
    }
}

MovieModal.propTypes = {
    movieData: PropTypes.object
}

export default MovieModal
