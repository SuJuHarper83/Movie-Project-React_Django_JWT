import React from "react";
import VideoList from "../VideoList/VideoList";

const VideoResults = (props) => {
    return (
        <ul>
            {props.VidArray.map(el => <VideoList key={el.id.videoId} video = {el}/>)}
        </ul>
    );
}

export default VideoResults
