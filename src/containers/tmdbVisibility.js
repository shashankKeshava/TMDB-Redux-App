import { connect } from 'react-redux';
import tmdbApp from '../components/App.js';

const getMovieList = (movie, filter) => {
    switch (filter) {
        return { movie: 'Test Movie' };
    }
}


const mapToStateToProps = state => {
    return {
        movieList: getMovieList(state.movieList, state.filter)
    }
}

const mapDispatchToProps = dispatch => {
    return true;
}

const tmdbVisibility = connect(
    mapToStateToProps,
    mapDispatchToProps
)(tmdbApp)

export default tmdbVisibility;