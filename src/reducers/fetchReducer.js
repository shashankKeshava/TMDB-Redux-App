import { FETCH_MOVIES } from "../utils/actionTypes.js";

const initialState = {
    movieList: [],
    isLoading: true,
    type: FETCH_MOVIES
};

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return Object.assign({}, state, {
                movieList: action,
                isLoading: false
            });
        default:
            return state;
    }
}

export default fetchReducer;