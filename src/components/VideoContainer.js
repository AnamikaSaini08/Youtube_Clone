import { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import {YOUTUBE_API_KEY} from '../utils/constant';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {openMenu} from '../utils/appSlice';

const VideoContainer = () => {
  const [videos , setVideos] = useState(null);
  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setVideos(json?.items);
  }

  const dispatch = useDispatch();
  useEffect( ()=>{
    getVideos();
    dispatch(openMenu());
  } , []);
  return !videos? <Shimmer/> : (
    <div className='flex flex-wrap'>
      {videos.map( (video)=>{
        return <Link to={"/watch?v="+video?.id} key={video?.id}><VideoCard videoInfo = {video} /></Link>
      })}
    </div>
  )
}

export default VideoContainer
