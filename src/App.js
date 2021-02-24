import React from 'react'
import Modal from 'react-modal'
import './App.css'
import API from './api'
import { Movie } from './components'
import { MovieModal } from './views'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: null,
            page: null,
            maxPages: null,
            modalIsOpen: true,
            movieIdModal: 54
        }
    }

    getMovies(page) {
        API.get('/movie/now_playing', {
            params: {
                page: {page}
            }
        })
            .then(json => json.data)
            .then(data => this.setState({movies: [...data.results]}))
    }

    componentDidMount() {
        this.getMovies(1)
    }

    handleMovieClick(id) {
        console.log(id)
        this.setState({})
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        className="h-full w-full bg-gray-800 border-b-2"
                        style={{
                            overlay: {
                                position: 'fixed',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                borderRadius: 15,
                                padding: 10
                            }
                        }}
                    >
                        <MovieModal movieId={this.state.movieIdModal}/>
                    </Modal>
                    <div className="title">Last Movies</div>
                    <div className="movies grid grid-cols-5 gap-4">
                        {this.state.movies !== null ?
                            this.state.movies.map((element, i) => <div key={i} onClick={() => this.handleMovieClick(element.id)}><Movie data={element}/></div>)
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default App
