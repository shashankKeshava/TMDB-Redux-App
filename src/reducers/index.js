import { combineReducers } from 'redux'
//import todos from './todos'
//import visibilityFilter from './visibilityFilter'
import ratingFilter from './ratingFilter.js'
import yearFilter from './yearFilter.js'

const bmdbApp = combineReducers({
    ratingFilter,
    yearFilter
})

export default bmdbApp