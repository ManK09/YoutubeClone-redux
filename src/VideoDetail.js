import React from "react";
import { useSelector } from "react-redux";

const VideoDetail = () => {
    console.log("hello")
  const selectedVideo = useSelector((state) => state.selectReducer.videoID);
  //console.log(videoID)

  return (
    <div>
      <iframe
        title="detail"
        width="700"
        height="315"
        src={`https://www.youtube.com/embed/${selectedVideo}`}
      />
    </div>
  );
};

export default VideoDetail;