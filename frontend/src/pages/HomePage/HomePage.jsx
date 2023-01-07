import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";
import VideoResults from "../../components/VideoResults/VideoResults";
import { KEY } from "../../localKey";
import axios from "axios";
// import VideoList from "../../components/VideoList/VideoList";


// The homepage will have a search bar to gather search results (5 in total) - then the user will click one of the videos, and it
// will bring them to the video page where the VideoID will come up in Iframe, and related videos to the side
// NOTE: the search page and the video page do not need the Bearer and token properties - the comments will.
// { videoId } = useParams();

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("bob ross");

  useEffect(() => {
    getVideos();
  }, [token]);

  async function getVideos(){
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${searchTerm}&key=${KEY}`, (videos))
      console.log(response.data.items);
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.response.data);
    }
  }

    function handleSubmit(event) {
      event.preventDefault();
      getVideos()
    }
  

  return (
    <>
      <div className="container">
        <h1>Home Page for {user.username}!</h1>
      </div>
      <div className="SearchBar">
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
        <button className="search-btn" type="submit">Search</button>
        </form>
      
      </div>
      <div>
      <VideoResults VidArray={videos} />
      </div>
    </>
  );

}


// const HomePage = () => {
//   // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
//   // The "token" value is the JWT token that you will send in the header of any request requiring authentication
//   //TODO: Add an AddCars Page to add a car for a logged in user's garage
//   const [user, token] = useAuth();

// const fetchCars = async () => {
//   try {
//     let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });
//     setCars(response.data);
//   } catch (error) {
//     console.log(error.response.data);
//   }
// };

// useEffect(() => {
//   fetchCars();
// }, [token]);

// return (
//   <div className="container">
//     <h1>Home Page for {user.username}!</h1>
//     {cars &&
//       cars.map((car) => (
//         <p key={car.id}>
//           {car.year} {car.model} {car.make}
//         </p>
//       ))}
//   </div>
// );
// };

export default HomePage;