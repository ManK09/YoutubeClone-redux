import {combineReducers} from 'redux'
import searchReducer from './searchReducer'
import listReducer from './listReducer'
import selectReducer from './selectReducer'

const rootReducer = combineReducers({
    searchReducer:searchReducer,
    listReducer:listReducer,
    selectReducer:selectReducer
})

export default rootReducer