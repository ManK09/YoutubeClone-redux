import React from 'react'
import VideoItem from './VideoItem'

import {useSelector} from 'react-redux'

const VideoList = () =>{

    const fetchedVideos=useSelector(state =>state.listReducer.videos)

    return (
        <div>
          {
            fetchedVideos.map((video) => {
                //{console.log(video)}
              return (
                <VideoItem
                  fetchedvideo={video}
                />
                
              );
            })
          }
        </div>
    )
}
export default VideoList