import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import "./VideoPage.css";
import { KEY } from "../../localKey";
// import VideoList from "../../components/VideoList/VideoList";
import { useParams } from 'react-router-dom'
import styled from "styled-components";
// import AddComment from "../../components/AddComment/AddComment";


// Video page will have the large player (clicked on by through the homepage), and the search results to the side (5 in total)
const VideoPage = () => {
    // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
    // The "token" value is the JWT token that you will send in the header of any request requiring authentication
    //TODO: Add an AddCars Page to add a car for a logged in user's garage

     // use same function on homepage to get related videos
    // `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&relatedToVideoId=${searchTerm}&key=${KEY}`

    const [user, token] = useAuth();
    const [videos, viewVideos] = useState([
      {
          "kind": "youtube#searchResult",
          "etag": "8_KMzjn7uqOV4V-Br1ICPZdEZfE",
          "id": {
              "kind": "youtube#video",
              "videoId": "C6RUp21s6BQ"
          },
          "snippet": {
              "publishedAt": "2019-12-16T10:32:14Z",
              "channelId": "UC8hC-augAnujJeprhjI0YkA",
              "title": "Baby Cats - Cute and Funny Cat Videos Compilation #9 | Aww Animals",
              "description": "Watching funny baby cats is the hardest try not to laugh challenge. Baby cats are amazing pets because they are the cutest and most funny. This is the cutest and best video ever. It is funny and cute!\r \n\nHope you like our funny compilation and don't forget to SUBSCRIBE us and share with your friends! \n👉Subscribe for new video: https://www.youtube.com/channel/UC8hC-augAnujJeprhjI0YkA\r\n\n#babycat #funnycats #aww #animals #cutecat\n---------------------------------------------------------------------------------------------------\nThe featured clips in our video are used with permission from the original video owners. The highlight clips can be done by our fans! \r\n\nIf you see a clip that you own that you did not submit or give consent for use, we have likely received false permissions and would be happy to resolve this for you! Please drop us a line at http://bit.ly/AwwAnimals\r\n\n►►►►►►►►► THANKS FOR WATCHING◄◄◄◄◄◄◄◄◄\n► AND DON'T FORGET TO LIKE COMMENTS AND SUBSCRIBE! ◄",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/C6RUp21s6BQ/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/C6RUp21s6BQ/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/C6RUp21s6BQ/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  },
                  "standard": {
                      "url": "https://i.ytimg.com/vi/C6RUp21s6BQ/sddefault.jpg",
                      "width": 640,
                      "height": 480
                  },
                  "maxres": {
                      "url": "https://i.ytimg.com/vi/C6RUp21s6BQ/maxresdefault.jpg",
                      "width": 1280,
                      "height": 720
                  }
              },
              "channelTitle": "Aww Animals",
              "liveBroadcastContent": "none",
              "publishTime": "2019-12-16T10:32:14Z"
          }
      },
      {
          "kind": "youtube#searchResult",
          "etag": "kemNGuOHP2zUZ4MrZ878j8rZ8oc",
          "id": {
              "kind": "youtube#video",
              "videoId": "GCt0VFRJeg4"
          },
          "snippet": {
              "publishedAt": "2022-01-23T12:25:47Z",
              "channelId": "UCsCXEzIUVns6Pl9DDcNp32Q",
              "title": "Cute and Funny Pomeranian Videos 204 #Shorts",
              "description": "The Pomeranian boo is one of the smallest and sweetest dog breeds in the world. I'm sure you also love them. Because the Pomeranian is too adorable. Enjoy your weekend with cute Pomeranian!\n\n🐶 If you like the videos, please don't forget to subscribe to our channel\n🔔 Subscribe: https://www.youtube.com/c/PetsForYouTube \n\n#minidog #dogcute #babydog #pomeranian #shorts",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/GCt0VFRJeg4/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/GCt0VFRJeg4/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/GCt0VFRJeg4/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  },
                  "standard": {
                      "url": "https://i.ytimg.com/vi/GCt0VFRJeg4/sddefault.jpg",
                      "width": 640,
                      "height": 480
                  },
                  "maxres": {
                      "url": "https://i.ytimg.com/vi/GCt0VFRJeg4/maxresdefault.jpg",
                      "width": 1280,
                      "height": 720
                  }
              },
              "channelTitle": "Pets For You",
              "liveBroadcastContent": "none",
              "publishTime": "2022-01-23T12:25:47Z"
          }
      },
      {
          "kind": "youtube#searchResult",
          "etag": "hZQOrVntoA04XIbmiBu_NYESg78",
          "id": {
              "kind": "youtube#video",
              "videoId": "_lt4R_ICefg"
          },
          "snippet": {
              "publishedAt": "2022-05-23T14:41:59Z",
              "channelId": "UC0LB0Ik4nGuMJy2ZJpENJ2A",
              "title": "BEST THAT LITTLE PUFF TikTok Compilation #catsmakefood",
              "description": "BEST THAT LITTLE PUFF TikTok Compilation #catsmakefood😂😂\n\n💜THANKS FOR WATCHING🙃\n🧡👍LIKE & SUBSCRIBE👇💜\n💚HELP ME REACH 100,000 SUBSCRIBERS🎬\n\n🟪Thatlittlepuff  on TikTok: https://www.tiktok.com/@thatlittlepuff\n\n\ntiktok, tik tok, cơm, cơm official, that little puff, smart cat, thatlitlepuff, bts, food, puff, tiktok that little puff, tiktok china, tik tok hài hước, tik tok trung quốc, cat, tictoc, that, tok, tik, đầu bếp mèo, mèo làm đồ ăn, cát, com, cat drink maker, mèo nấu ăn, giáng sinh, little, food noel, cats make food, tiktok viral, kompilasi tiktok, tik tok fyp, cooking cat, cat cook, cat chef, tiktok thatlitlepuff, tiktok fyp 2021, for you page, cat chef tiktok, tiktok fyp viral, tiktok streetfood, tiktok compilation, cat cook tiktok, cooking cat tiktok, compilation, #6, #12, #5, #7, #9, #10, #8, cat new video, cute cat, cat cat cat, c a t cat, cat short video, cat funny, cat cat, cats meowing, tik tok trung quoc, tik tik, lifestyle (sociology), fan bts, orange cat, that little puff compilation, cute dogs, funnyvideos, funnydogs, funnycats, youtube compilation, catvideos, funny cats, that little puff collection, aww cats, cute cats, baby cats, cats, món ăn giáng sinh, that little puff tiktok, thatlittlepuff, cat chef cooking, nhạc tik tok, trào lưu giới trẻ, tik tok viet nam, tik tok thời trang trung quốc, tik tok trào lưu, nhưng khoảng khắc hài hước, cat cooking videos, that little puff cat, satisfying video, tiktoks, best of that little puff tiktok video, cat cooking show, squid game, cat tiktok, that little puff cat chef, tik tok compilation, funny that little puff tiktok moment, chef cat, that little puff fails, that little puff making drinks, teentok, funny tiktok, that little puff cooking, tiktok 2022, 시장, 시장음식, 시장맛집, 고강제일시장, 수제캔디, 스위티, 수제사탕, 캔디만들기, 사탕, 캔디, 사탕만들기, 튀벅, キャンディ, 전통시장, handmade candy, candy making, candy, 手作りキャンディー, versatile utilities, heart touching tiktok videos 2021, reality based heart touching tiktok, zik, noel, love children, tiktok love children, filaretiki love children tiktok videos 2021, filaretiki love children tiktok compilation, 한국거리음식, love children tiktok, reality based heart touching, heart touching, cat cooking fails, utility, food cat, cat food, cat chief, tikok, tiktok videos 2021, iammahru, best tiktok trent, march, fruit tart, korean food, spicy rice cake, stir-fried rice cake, tteokbokki, 신참떡볶이, 떡볶이, 즉석떡볶이, トッポッキ, 과일타르트, 전리단길, dessert, tart, 전포카페거리, 부산맛집, 타르트, 디저트, yt:cc=on, lynch zhang cat, trend 2021, tik tok trend, tik tok trends, tik toks, tik tok dance, tiktok memes, tik tok 2021, tiktok tutorial, tiktok new, ragdoll cat, lynch zhang, new york city, daniel wu, that little puff tiktoks, tiktok funny, that little puff most liked tiktoks, tart cake, 길거리음식, 분식, 분식맛집, 떡볶이맛집, korea food, korea, recipe, cooking, 쌀떡볶이, 밀떡볶이, 오뎅, 김밥, 꼬마김밥, 어묵, 순대, 튀김, 수제튀김, snacks, street food, 푸드, street, 먹거리, 가성비, 맛집, 음식, korean, 한국, 한국길거리음식, travel, events, korean street food, 맛집추천, 여행, 한국요리, 요리, 거리음식 #tiktok #losmejoresbailesdetiktok #onktiktok #tiktoksrecientes #tiktokbailes #nuevastendenciasdetiktok #tiktokfunnyvideo #mejoresbailesdetiktok #tiktokvideo #losmasnuevostiktok #funny #tiktok2022 #tiktokdance #tiktok2021 #sitesabeseltiktokbaila #tustiktokers #abltd #lomasnuevodetiktok #viral #memes #tiktokcompilation #nuevosbailesdetiktok2022 #tiktokersup #jctiktok #tiktokazul #banglatiktokvideo #mejorestendenciasdetiktok2022 #tiktokrecientes2022 #tiktokmashup #tiktokmemes #banglafunnyvideo #bailesdetiktok #tiktoks #tiktokhype #likeevideo #nuevosbailesdetiktok2021 #sagawa #meme #football #entertainment #টিকটক #breakupfunnyvideo #new #tiktoksongs #compilation #skltd #skbd #likee #tiktokrecientes2021 #tiktokvideobangla #4ktiktokbd #sk24 #banglatiktokevido #banglatiktok #srtiktok #tiktokphilippines #mercury88tiktokes #mercuri88 #viraltiktokmercuri88 #manuelmercurithemother #manuelmercuri #tiktokhocsinh40 #tiktokviệtnam #tiktoksong #domelipa #iamferv #nailartstorytimetiktok #nailartstorytime #trynottolaughmercuri88 #mercuri88tiktok #tiktoklatestdance #tiktokbailadance #iamfervydomelipa #tiktalkunicorn #tiktokhiphop #manuelmercurithebrother #tiktokmanuelmercuri #tiktokmercuri88 #sbftiktok #funnyvideos #tiktoksthat #tiktok2020 #funnytiktoks #cleantiktoks #visickstiktok #besttiktoks #satisfying #maxvalenzuelayiamferv #maxvalenzuela #iamfervynils #iamfervymaxvalenzuelanovios #maxyfer #maxfer #maxyfernanda #nilskueselyfernanda #nilskuesel #tiktoklosmaspopulares #domelipaydekko #domelipayiamferv #storytimenailarttiktok",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/_lt4R_ICefg/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/_lt4R_ICefg/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/_lt4R_ICefg/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  },
                  "standard": {
                      "url": "https://i.ytimg.com/vi/_lt4R_ICefg/sddefault.jpg",
                      "width": 640,
                      "height": 480
                  },
                  "maxres": {
                      "url": "https://i.ytimg.com/vi/_lt4R_ICefg/maxresdefault.jpg",
                      "width": 1280,
                      "height": 720
                  }
              },
              "channelTitle": "Internet Planet",
              "liveBroadcastContent": "none",
              "publishTime": "2022-05-23T14:41:59Z"
          }
      },
      {
          "kind": "youtube#searchResult",
          "etag": "D90s6Mdk6vSbyn68djBy9smZsdo",
          "id": {
              "kind": "youtube#video",
              "videoId": "1Sr0cMt40J4"
          },
          "snippet": {
              "publishedAt": "2022-05-31T21:10:41Z",
              "channelId": "UCj4ANXw21Mm8m1U_BdplFQA",
              "title": "Yavru kedilerimiz 3 haftalık oldular 😊😊",
              "description": "",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/1Sr0cMt40J4/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/1Sr0cMt40J4/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/1Sr0cMt40J4/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  },
                  "standard": {
                      "url": "https://i.ytimg.com/vi/1Sr0cMt40J4/sddefault.jpg",
                      "width": 640,
                      "height": 480
                  }
              },
              "channelTitle": "ODES CATTERY",
              "liveBroadcastContent": "none",
              "publishTime": "2022-05-31T21:10:41Z"
          }
      }
  ]);
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

    const VidPlayer = styled.iframe`
    border-radius: 10px;
    display: block;
    margin: auto;
    `
 
  return ( 
      <> 
        <div className="title-container-b">
          <h1>Results for {user.username}!</h1>
        </div> 
          <div className="player">
          <VidPlayer title="ytplayer"
                  type="text/html"
                  width="640"
                  height="360"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
                  frameborder="0"> 
          </VidPlayer>
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