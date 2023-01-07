import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import "./VideoPage.css";
import { KEY } from "../../localKey";
// import VideoList from "../../components/VideoList/VideoList";
import { useParams } from 'react-router-dom'
// import AddComment from "../../components/AddComment/AddComment";


// Video page will have the large player (clicked on by through the homepage), and the search results to the side (5 in total)
const VideoPage = () => {
    // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
    // The "token" value is the JWT token that you will send in the header of any request requiring authentication
    //TODO: Add an AddCars Page to add a car for a logged in user's garage
    const [user, token] = useAuth();
    const [videos, viewVideos] = useState([]);
    const { videoId } = useParams();
    
    useEffect(() => {
      getVideos();
    }, [token]);
  
    async function getVideos(){
      try {
        let response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&relatedToVideoId=${videoId}&key=${KEY}`, (videos))
        console.log(response.data.items);
        viewVideos(response.data.items);
      } catch (error) {
        console.log(error.response.data);
      }
    }

  // use same function on homepage to get related videos
  // `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&relatedToVideoId=${searchTerm}&key=${KEY}`
  return (
      <>
        <div className="container">
          <h1>Results for {user.username}!</h1>
        </div>
          <div className="player">
          <iframe title="ytplayer"
                  type="text/html"
                  width="640"
                  height="360"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
                  frameborder="0"> 
          </iframe>
          </div>
          <div>
            {/* <AddComment NewCommentObject={AddComment} /> */}
          </div>
          <div>
            <RelatedVideos VideoArray={videos} />
          </div>
      </>
    );
  }


export default VideoPage;