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
    sortedList: []
};

const sortReducer = (prevState = initialState, action) => {
    let sortedMovieList = [];
    let movieDate = null;
    switch (action.type) {
        case SORT_LOW:
            sortedMovieList = _.orderBy(
                action.payload, ["vote_count"], ["asc"]
            );
            return Object.assign({}, prevState, {
                type: action.type,
                sortedList: sortedMovieList,
                isSorting: true
            });
        case SORT_HIGH:
            sortedMovieList = _.orderBy(
                action.payload, ["vote_count"], ["desc"]
            );
            return Object.assign({}, prevState, {
                type: action.type,
                sortedList: sortedMovieList,
                isSorting: true
            });
        case SORT_POP_LOW:
            sortedMovieList = _.orderBy(
                action.payload, ["popularity"], ["asc"]
            );
            return Object.assign({}, prevState, {
                type: action.type,
                sortedList: sortedMovieList,
                isSorting: true
            });
        case SORT_POP_HIGH:
            sortedMovieList = _.orderBy(
                action.payload, ["popularity"], ["desc"]
            );
            return Object.assign({}, prevState, {
                type: action.type,
                sortedList: sortedMovieList,
                isSorting: true
            });
        case SORT_YEAR:
            sortedMovieList = action.payload.filter(movie => {
                movieDate = new Date(movie.release_date);
                return movieDate.getFullYear() == action.year ? movie : false;
            });
            return Object.assign({}, prevState, {
                type: action.type,
                sortedList: sortedMovieList,
                isSorting: true
            });
        case UNSORT:
            return Object.assign({}, prevState, {
                sortedList: [],
                isSorting: false,
                type: action.type,
                movieList: action.payload
            });
        default:
            return Object.assign({}, prevState, {
                movieList: action.payload,
                isSorting: false
            });
    }
};

export default sortReducer;