import React from 'react';
import { Link } from 'react-router-dom';

const VideoList = ({video}) => {
    return ( 
        <li>
            <Link to={`/${video.id.videoId}`}>
            <img src={video.snippet.thumbnails.default.url} height={video.snippet.thumbnails.default.height} width={video.snippet.thumbnails.default.width} alt=""/>
            </Link>
            <p>
                {video.snippet.title}
            </p>
        </li>
     );

}
 
export default VideoList;