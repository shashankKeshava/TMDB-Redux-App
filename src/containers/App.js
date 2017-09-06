import { connect } from "react-redux";
import { getMovieList } from "../actions";
import MovieTiles from "../components/movieTiles.js";
import React from "react";
import { bindActionCreators } from 'redux'

class tmdbApp extends React.Component {
    componentDidMount = () => {
        store.dispatch(getMovieList);
    }
    render() {
        return (
            <div>
                <MovieTiles
                    movieList={this.props.movieList}
                    _fetchMovieList={this.props.getMovieList}
                />
            </div>
        );
    }
}

const mapToStateToProps = state => {
    return {
        movieList: state.ratingFilter.movieList
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getMovieList }, dispatch)

const tmdbVisibility = connect(mapToStateToProps, mapDispatchToProps)(tmdbApp);

export default tmdbVisibility;