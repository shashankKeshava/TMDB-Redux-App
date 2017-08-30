import { connect } from 'react-redux';
import { getMovieList } from '../actions';
import tmdbApp from '../components/App.js';

/*const getMovieList = (movie, filter) => {
    //switch (filter) {
    return { movie: 'Test Movie' };
    //}
}
*/

const mapToStateToProps = state => {
    return {
        movieList: getMovieList()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            console.log("Clicked");
        }
    }
}

const tmdbVisibility = connect(
    mapToStateToProps,
    mapDispatchToProps
)(tmdbApp)

export default tmdbVisibility;