import { FETCH_MOVIES, UNSORT, SORT_YEAR } from "../utils/actionTypes.js"

export const getMovieList = (url) => dispatch => {
    let popularMovies = [];
    // Use Fetch To make API Calls
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=a0bc683500a8905f2d1868a85a282281&language=en-US&page=1")
        .then((request) => request.json())
        .then((list) => {
            return dispatch({
                type: FETCH_MOVIES,
                ...list
            });
        })
};

//Action: Sort By Rating 
export const sortByRating = (type = UNSORT, payload) => dispatch => {
    return dispatch({
        type,
        payload
    })
}

//Action: Sort By Year 
export const sortByYear = (type = UNSORT, year, payload) => dispatch => {
    return dispatch({
        type,
        year,
        payload
    })
}

export const sortBySearch = (type = UNSORT, searchTerm, payload) => dispatch => {
    return dispatch({
        type,
        searchTerm,
        payload
    })
}