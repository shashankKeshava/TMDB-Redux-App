import request from "superagent";

let nextTodoId = 0;
export const addTodo = text => {
    return {
        type: "ADD_TODO",
        id: nextTodoId++,
        text
    };
};

export const setVisibilityFilter = filter => {
    return {
        type: "SET_VISIBILITY_FILTER",
        filter
    };
};

export const toggleTodo = id => {
    return {
        type: "TOGGLE_TODO",
        id
    };
};

export const getMovieList = () => {
    let popularMovies = [];
    // Use Fetch To make API Calls
    request
        .get(
            "https://api.themoviedb.org/3/movie/popular?api_key=a0bc683500a8905f2d1868a85a282281&language=en-US&page=1"
        )
        .end((err, res) => {
            popularMovies = res.body;
        });
    return popularMovies;
};