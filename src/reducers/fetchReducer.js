import { FETCH_MOVIES } from "../utils/actionTypes.js";

const intialState = {
    movieList: [],
    isLoading: true
};

const fetchReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movieList: action.result,
                isLoading: false
            };
        default:
            return intialState;
    }
}

export default fetchReducer;