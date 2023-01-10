import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const colorArray = ["#4f6d7a", "#c0d6df", "#dbe9ee", "#4a6fa5", "#166088"];

const VideoGrid = styled.li`
width: 200px;
padding: 1rem;
display: grid;
column-gap: 1px;
grid-template-columns: auto;
content: center;
box-shadow: 2px 8px 16px -2px rgba(19, 57, 94, 0.486);
margin: 1rem;
border-radius: 10px;
font-size: smaller;
`;

const VideoList = ({video}) => {
    return ( 
        <VideoGrid style={{backgroundColor: `${colorArray[Math.floor(Math.random() * colorArray.length)]}` }}>
            <Link to={`/${video.id.videoId}`}>
            <img src={video.snippet.thumbnails.default.url} height={video.snippet.thumbnails.default.height} width={video.snippet.thumbnails.default.width} alt=""/>
            </Link>
            <p>
                {video.snippet.title}
            </p>
        </VideoGrid>
     );

}
 
export default VideoList;