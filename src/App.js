import React from 'react'
import './App.css'
import API from './api'
import Movie from './components/Movie'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: null,
            page: null,
            maxPages: null
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
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="title">Last Movies</div>
                    <div className="movies grid grid-cols-5 gap-4">
                        {this.state.movies !== null ?
                            this.state.movies.map((element, i) => <div key={i} onClick={() => this.handleMovieClick(element.id)}><Movie data={element}/></div>)
                            : null
                        }
                    </div>
                </header>
            </div>
        )
    }
}

export default App
