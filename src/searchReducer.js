import {SEARCH_VIDEO} from './searchType'


const initialState={
    searchQuery:''
}

const searchReducer = (state=initialState,action) =>{
    switch(action.type)
    {
        case SEARCH_VIDEO:{
            return{
                ...state,
                searchQuery:action.payload
            }
        }
        default: return state
    }
}

export default searchReducer