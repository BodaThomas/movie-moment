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
            modalIsOpen: false,
            movieIdModal: 54
        }
    }

    getMovies(page) {
        API.get(`/movie/now_playing?page=${page}`)
            .then(json => json.data)
            .then(data => this.setState({movies: [...data.results]}))
    }

    componentDidMount() {
        this.getMovies(1)
    }

    handleMovieClick(id) {
        console.log(id)
        this.setState({movieIdModal: id, modalIsOpen: true})
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        className="bg-gray-800 border-b-2 text-white"
                        style={{
                            overlay: {
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            },
                            content: {
                                position: 'absolute',
                                borderRadius: 15,
                                padding: '20px',
                                outline: 'none',
                                overflow: 'auto',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }
                        }}
                        onRequestClose={() => {this.setState({modalIsOpen: false})}}
                    >
                        <button onClick={() => this.setState({modalIsOpen: false})}>Close</button>
                        <MovieModal movieId={this.state.movieIdModal}/>
                    </Modal>
                    <div className="title">Last Movies</div>
                    <div className="movies grid grid-cols-5 gap-4 auto-cols-max">
                        {this.state.movies !== null ?
                            this.state.movies.map((element, i) => <div className="w-48" key={i} onClick={() => this.handleMovieClick(element.id)}><Movie data={element}/></div>)
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default App
