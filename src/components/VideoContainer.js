import { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import {YOUTUBE_API_KEY} from '../utils/constant';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {openMenu} from '../utils/appSlice';

const VideoContainer = () => {
  const [videos , setVideos] = useState(null);
  const [filterVideo , setFilterVideo] = useState(null);
  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setVideos(json?.items);
    setFilterVideo(json?.items);
    console.log("Api call---",json);
  }

  const dispatch = useDispatch();
  useEffect( ()=>{
    getVideos();
    dispatch(openMenu());
  } , []);
  return !videos? <Shimmer/> : (
    <div className='flex flex-wrap'>
      {videos.map( (video)=>{
        return <Link to={"/watch?v="+video?.id}><VideoCard videoInfo = {video} key={video?.id}/></Link>
      })}
    </div>
  )
}

export default VideoContainer
