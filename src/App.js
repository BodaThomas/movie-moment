import React from 'react'
import Modal from 'react-modal'
import InfiniteScroll from 'react-infinite-scroller'
import './App.css'
import API from './api'
import { Movie } from './components'
import { MovieModal } from './views'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            page: null,
            maxPages: null,
            modalIsOpen: false,
            modalData: null
        }
    }

    getMovies(page) {
        console.log(this.state.page)
        API.get(`/movie/now_playing?page=${page}`)
            .then(json => json.data)
            .then(data => {
                this.setState({movies: [...this.state.movies, ...data.results], page: page, maxPages: data.total_pages})
            })
    }

    componentDidMount() {
        Modal.setAppElement('#main')
        this.getMovies(1)
    }

    handleMovieClick(data) {
        this.setState({modalData: data, modalIsOpen: true})
    }

    render() {
        const modalStyle = {
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
        }

        return (
            <div className="App" id="main">
                <div className="App-header">
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        className="bg-gray-800 border-b-2 text-white"
                        style={modalStyle}
                        onRequestClose={() => {this.setState({modalIsOpen: false})}}
                    >
                        <button onClick={() => this.setState({modalIsOpen: false})}>Close</button>
                        <MovieModal movieData={this.state.modalData}/>
                    </Modal>
                    <InfiniteScroll
                        loadMore={() => this.getMovies(this.state.page + 1)}
                        hasMore={this.state.page < this.state.maxPages ? true : false}
                    >
                        <div className="title">Last Movies</div>
                        <div className="movies grid grid-cols-5 gap-4 auto-cols-max">
                            {this.state.movies !== null ?
                                this.state.movies.map((element, i) => (
                                    <div className="w-48" key={i} onClick={() => this.handleMovieClick(element)}>
                                        <Movie data={element}/>
                                    </div>
                                ))
                                : null
                            }
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}

export default App
