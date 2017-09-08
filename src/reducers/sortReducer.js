import _ from "lodash";
import {
    SORT_LOW,
    SORT_HIGH,
    SORT_POP_LOW,
    SORT_POP_HIGH,
    SORT_YEAR,
    UNSORT
} from "../utils/actionTypes.js";

const initialState = {
    type: UNSORT,
    isLoading: true,
    sortedList: []
};

const sortReducer = (prevState = initialState, action) => {
    let sortedMovieList = [];
    let movieDate = [];
    switch (action.type) {
        case UNSORT:
            return Object.assign({}, {
                ...prevState,
                movieList: action.payload
            });
        case SORT_LOW:
            sortedMovieList = _.orderBy(
                action.payload, ["vote_count"], ["asc"]
            );
            return Object.assign({}, ...prevState, {
                type: action.type,
                sortedList: sortedMovieList
            });
        case SORT_HIGH:
            sortedMovieList = _.orderBy(
                action.payload, ["vote_count"], ["desc"]
            );
            return Object.assign({}, ...prevState, {
                type: action.type,
                sortedList: sortedMovieList
            });
        case SORT_POP_LOW:
            sortedMovieList = _.orderBy(
                action.payload, ["popularity"], ["asc"]
            );
            return Object.assign({}, ...prevState, {
                type: action.type,
                sortedList: sortedMovieList
            });
        case SORT_POP_HIGH:
            sortedMovieList = _.orderBy(
                action.payload, ["popularity"], ["desc"]
            );
            return Object.assign({}, ...prevState, {
                type: action.type,
                sortedList: sortedMovieList
            });
        case SORT_YEAR:
            sortedMovieList = action.payload.filter((movie) => {
                movieDate = movie.split("-");
                return movieDate[0] == action.value ? movie : ;
            })
        default:
            return Object.assign({}, prevState, {
                movieList: action.payload
            });
    }
};

export default sortReducer;