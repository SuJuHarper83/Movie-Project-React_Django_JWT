import React from "react";
import VideoList from "../VideoList/VideoList";

const RelatedVideos = ({VideoArray}) => {

    function refreshPage(){
        window.location.reload(false);
    }

    return (
        <ul onClick={refreshPage}>
            {VideoArray.map(el => <VideoList key={el.id.videoId} video = {el}/>)}
        </ul>
    );
}

export default RelatedVideos