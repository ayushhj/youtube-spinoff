import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const[videos,setVideos] = useState([])



useEffect(()=>{
  getVideos();
},[])

const getVideos = async()=>{
  const data = await fetch(YOUTUBE_VIDEOS_API)
  const json = await data.json()
  //console.log(json.items[0])
  setVideos(json.items)

}



  return (
    <div className='flex flex-wrap px-3'>
      { videos.map((video)=>( 
        <Link to={"/watch?v=" + video.id} key={video.id}  > <VideoCard  info={video}/> </Link> 
         ))}
  
    </div>
  )
}

export default VideoContainer