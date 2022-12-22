import React from "react";

const RelatedVideos = ({VideoArray}) => {
    return (
        <ul>
            {VideoArray.map(el => <li>{el.snippet.title}</li>)}
        </ul>
    );
}

export default RelatedVideos