export const getMovieList = () => dispatch => {
    let popularMovies = [];
    // Use Fetch To make API Calls
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=a0bc683500a8905f2d1868a85a282281&language=en-US&page=1")
        .then((request) => request.json())
        .then((list) => {
            return dispatch({
                type: 'TEST',
                list
            });
        })
};