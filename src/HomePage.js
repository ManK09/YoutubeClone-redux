import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Search from './Search'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import {fetchVideos} from './listActions'
import {fetchVideoRequest} from './listActions'
//import {useSelector} from 'react-redux'

const HomePage = () =>{
    const videoData=useSelector(state => state.listReducer)
    const videoID=useSelector(state => state.selectReducer.videoID)
    //console.log("hey",videoID)

    const dispatch=useDispatch()

    useEffect( () =>{
        dispatch(fetchVideoRequest())
    },[])

    return(
        (!videoData.loading) ? (<h2>Loading...</h2>): (videoData.error ? <div>Error</div>:( videoID ? 
            <div>
                <Search />
                 <VideoDetail />
                <VideoList />
            </div> :
             <div>
             <Search />
             <VideoList />
         </div>

        ))
    )
    
}


export default HomePage