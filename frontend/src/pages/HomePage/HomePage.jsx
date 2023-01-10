import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";
import VideoResults from "../../components/VideoResults/VideoResults";
import { KEY } from "../../localKey";
import axios from "axios";
import "./HomePage.css"
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
  const [videos, setVideos] = useState([
    {
        "kind": "youtube#searchResult",
        "etag": "RDb9t_3R2p3A0KyfI_JoeQeBIrs",
        "id": {
            "kind": "youtube#video",
            "videoId": "uHKfrz65KSU"
        },
        "snippet": {
            "publishedAt": "2019-12-11T19:43:05Z",
            "channelId": "UC8hC-augAnujJeprhjI0YkA",
            "title": "Baby Cats - Cute and Funny Cat Videos Compilation #8 | Aww Animals",
            "description": "Watching funny baby cats is the hardest try not to laugh challenge. Baby cats are amazing creature because they are the cutest ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/uHKfrz65KSU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/uHKfrz65KSU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/uHKfrz65KSU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Aww Animals",
            "liveBroadcastContent": "none",
            "publishTime": "2019-12-11T19:43:05Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "XScKhRRQcDLvkpHbizhq1B5GzyU",
        "id": {
            "kind": "youtube#video",
            "videoId": "tpiyEe_CqB4"
        },
        "snippet": {
            "publishedAt": "2020-04-10T16:00:28Z",
            "channelId": "UCzn2gx8zzhF0A4Utk8TEDNQ",
            "title": "Cute and Funny Cat Videos to Keep You Smiling! 🐱",
            "description": "Hoomans! Rufus here! Cats are my best frens! I made this brand new compilation for you of my favorite Cat, Kittens and even ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/tpiyEe_CqB4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/tpiyEe_CqB4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/tpiyEe_CqB4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Rufus",
            "liveBroadcastContent": "none",
            "publishTime": "2020-04-10T16:00:28Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "bOK2Rbs5kq4c_cN8DmEkHdfMqos",
        "id": {
            "kind": "youtube#video",
            "videoId": "jHWKtQHXVJg"
        },
        "snippet": {
            "publishedAt": "2019-11-01T01:35:36Z",
            "channelId": "UC8hC-augAnujJeprhjI0YkA",
            "title": "Baby Cats - Cute and Funny Baby Cat Videos Compilation",
            "description": "Baby cats are amazing creature because they are the cutest and most funny. I challenge anyone watching this video to try not to ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/jHWKtQHXVJg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/jHWKtQHXVJg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/jHWKtQHXVJg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Aww Animals",
            "liveBroadcastContent": "none",
            "publishTime": "2019-11-01T01:35:36Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "pMmOajap__7PU73wp41MtGcoA6s",
        "id": {
            "kind": "youtube#video",
            "videoId": "ZuRLOlB4N8U"
        },
        "snippet": {
            "publishedAt": "2021-11-09T17:00:24Z",
            "channelId": "UCTnomncAH9Gm5bjmCNIDjjA",
            "title": "Cute Animals for When You are Stressed",
            "description": "Hope you enjoy these cute animal videos. I'm very passionate about animals, dogs, cats, whatever you name it! This channel is ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ZuRLOlB4N8U/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ZuRLOlB4N8U/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ZuRLOlB4N8U/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "PetWard",
            "liveBroadcastContent": "none",
            "publishTime": "2021-11-09T17:00:24Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "kMe-yG1uNUbOrtdIfWsnOg2XI40",
        "id": {
            "kind": "youtube#video",
            "videoId": "6QzcF3xdoF8"
        },
        "snippet": {
            "publishedAt": "2021-11-28T17:00:05Z",
            "channelId": "UCTnomncAH9Gm5bjmCNIDjjA",
            "title": "More Cute Animals for When You are Stressed",
            "description": "Hope you enjoy these cute animal videos. I'm very passionate about animals, dogs, cats, whatever you name it! This channel is ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/6QzcF3xdoF8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/6QzcF3xdoF8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/6QzcF3xdoF8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "PetWard",
            "liveBroadcastContent": "none",
            "publishTime": "2021-11-28T17:00:05Z"
        }
    }
]);
  const [searchTerm, setSearchTerm] = useState("cute cats");

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
      <div className="title-container-a">
        <h1>Home Page for {user.username}!</h1>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
        <button className="button" type="submit">Search</button>
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