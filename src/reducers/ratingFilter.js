const intialState = {
    movieList: []
};

const ratingFilter = (state = intialState, action) => {
    switch (action.type) {
        case 'TEST':
            // return Object.assign({}, state, action.list);
            return {
                ...state,
                movieList: action.list
            };
        default:
            return intialState;
    }
}

export default ratingFilter;