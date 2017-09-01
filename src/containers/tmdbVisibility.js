import { connect } from "react-redux";
import { getMovieList } from "../actions";
import App from "../components/App.js";
import React from "react";
import { bindActionCreators } from 'redux'

class tmdbApp extends React.Component {
    render() {
        return (
            <div>
                <App
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