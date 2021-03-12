import {SEARCH_VIDEO} from './searchType'

 export const searchVideo = (videoQuery) =>{
    return{
        type:SEARCH_VIDEO,
        payload:videoQuery
    }
}

export default searchVideo