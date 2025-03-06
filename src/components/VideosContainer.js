import React, { useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

const VideosContainer = () => {
  useEffect(()=>{
    loadVideos()
  },[]);
  const loadVideos= async ()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
  }
  return (
    <div>
      
    </div>
  )
}

export default VideosContainer

