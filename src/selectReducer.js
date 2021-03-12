import SELECT_VIDEO from './selectVideo'

const initialState={
    videoID:''
}

const selectReducer = (state=initialState,action) =>{
    switch(action.type){
        case SELECT_VIDEO:{
            return{
                ...state,
                videoID:action.payload.id.videoId
            }
        }
        default: return state
    }
}

export default selectReducer