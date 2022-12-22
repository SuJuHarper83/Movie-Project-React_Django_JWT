import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { DATA } from "../../localData";
import AddComment from "../../components/AddComment/AddComment";
import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  @param {Array} videos
  @param {Object[]} video
  
  const [user, token] = useAuth();
  const [videos, setVideos] = useState(DATA);

  useEffect(() => {
    // getVideos();
  }, [token]);

  const getVideos = async () => {
    try {
      let response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          headers: {
            Authorization: "Bearer" + token,
          },
        }
      );
      setVideos(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Home Page for {user.username}!</h1>
      </div>
      <div className="player">
        <h1>${videos.title}</h1>
        <iframe title="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/UnNLDaaJvLU?autoplay=1"
          frameborder="0"
        ></iframe>
        <h1>${videos.description}</h1>
      </div>
      <div>
      <AddComment />
      </div>
      <div>
        
      </div>
    </>
  );
};

export default HomePage;

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

// export default HomePage;
