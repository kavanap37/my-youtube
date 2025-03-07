import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideosContainer = () => {
 
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadVideos();
  }, []);
  const loadVideos= async ()=>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    // console.log(json);
    // if (json.items) {
    //   setVideos(json.items); // ✅ Update state only if data is valid
    //   console.log("Updated videos state inside:", videos);
    //   console.log("Updated videos state:", json.items);
    // } else {
    //   console.error("Error: No items in API response");
    // }
    
  }
  // useEffect(() => {
  //   console.log("Updated videos state outside:", videos); 
  // }, [videos]);
  //was checking the loaded video information in this useeffect
  return (
    <div className="flex flex-wrap">
    {videos.length > 0  ? ( // Ensure videos exist before mapping
      videos.map((video) => 
        <Link  key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard  key={video.id} videoInfo={video} />
        </Link>
      
      )
    ) : (
      <p>Loading videos...</p> // Show loading text while fetching
    )}
  </div>
  )
}

export default VideosContainer

