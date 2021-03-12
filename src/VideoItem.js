import React from 'react'

import {useDispatch} from 'react-redux'
import selectVideo from './selectAction'

const VideoItem = props =>{
    const dispatch= useDispatch()

    const handleClick = event =>{
        event.preventDefault()
        dispatch(selectVideo(props.fetchedvideo))
    }

    return (
        <div onClick={handleClick}>
          <img src={props.fetchedvideo.snippet.thumbnails.default.url} alt={props.fetchedvideo.snippet.title} />
          <div>{props.fetchedvideo.snippet.title}</div>
        </div>
      );
}

export default VideoItem