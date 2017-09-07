import { combineReducers } from 'redux'

import fetchReducer from "./fetchReducer.js";
import sortReducer from "./sortReducer.js";

const bmdbApp = combineReducers({
    fetchReducer,
    sortReducer
})

export default bmdbApp