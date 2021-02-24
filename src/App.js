import React from 'react'
import './App.css'
import API from './api'
import Movie from './components/Movie'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        API.get('/movie/now_playing', {
            params: {
                page: 1
            }
        })
            .then(json => json.data)
            .then(data => this.setState({data: data}))
    }

    render() {
        if (this.state.data !== null)
            console.log(this.state.data)
        return (
            <div className="App">
                <header className="App-header">
                    <div className="title">Last Movies</div>
                    {this.state.data !== null ?
                        this.state.data.results.map((element, i) => <Movie key={i} data={element}/>)
                        : null
                    }
                </header>
            </div>
        )
    }
}

export default App
