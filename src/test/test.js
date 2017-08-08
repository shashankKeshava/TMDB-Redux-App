import request from 'superagent';
import React, { Component, Image } from 'react';


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMovies: null
        }
    }
    _showMovieTabs = (e) => {
        let showMovieTabs = [];
        showMovieTabs = e.results.map((item, index) => {
            return (<div key={index} className={"movieTabsChild"}>
            		<img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
            			{item.title}
            		</div>);
        })
        this.setState({
            showMovies: (<div className={"movieTabsparent"}>
        					{showMovieTabs}
        				</div>)
        });

    }
    _fetchPopularMovies = () => {
        let popularMovies;
        // Use Fetch To make API Calls
        request
            .get('https://api.themoviedb.org/3/movie/popular?api_key=a0bc683500a8905f2d1868a85a282281&language=en-US&page=1')
            .end((err, res) => {
                popularMovies = this._showMovieTabs(res.body);
            })

    }
    componentDidMount = () => {
        this._fetchPopularMovies();
    }

    render() {
        console.log(this.state);
        return (
            <div>
            {this.state.showMovies}
            </div>

        )
    }
}

export default Test;