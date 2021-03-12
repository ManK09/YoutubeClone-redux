import SELECT_VIDEO from './selectVideo'

const selectVideo = videodetails =>{
    return{
        type:SELECT_VIDEO,
        payload:videodetails
    }
}

export default selectVideo