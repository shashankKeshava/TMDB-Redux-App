import { UNSORT } from "../utils/actionTypes.js";

const intialState = {
    sortedMovieList: [],
    type: UNSORT
};

const sortReducer = (state = intialState, action) => {
    switch (action.type) {
        case UNSORT:
            return {
                ...state,
                movieList: action.result
            };
        default:
            return intialState;
    }
}

export default sortReducer;