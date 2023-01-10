import React from "react";
import VideoList from "../VideoList/VideoList";
import styled from "styled-components";
// import "./VideoResults.css"

const FlexBox = styled.ul`
display: flex;
flex-wrap: wrap;
`
const VideoResults = (props) => {
    return ( 
        <FlexBox>
            {props.VidArray.map(el => <VideoList key={el.id.videoId} video = {el}/>)}
        </FlexBox>
    );
}

export default VideoResults
