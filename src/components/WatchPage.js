import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {closeMenu} from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveMessage from './LiveMessage';
import SuggestedVideos from './SuggestedVideos'
import { getVideoById } from '../utils/helper';
import WatchVideoDescription from './WatchVideoDescription';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const [videoDetails , setVideoDetails] = useState(null);
    const dispatch = useDispatch();
    const videoId = searchParams.get("v");

    useEffect( ()=>{
        const fetchVideoById = async()=>{
          const video = await getVideoById(videoId);
          console.log("Video- ",video);
          setVideoDetails(video);
        }
        fetchVideoById();
        dispatch(closeMenu());
    },[videoId]);

  return videoDetails && (
    <div className='px-5 w-full'>
      <div className='py-5 flex'>
        <div>
          <iframe width="900" 
          height="400" 
          src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen>
          </iframe>
        </div>
          <LiveMessage/>
      </div>
      <div className='flex'>
          <WatchVideoDescription videoInfo={videoDetails}/>
          <SuggestedVideos videoId={searchParams.get("v")}/>
      </div>
      <div>
        <CommentContainer/>
      </div>
    </div>
  )
}

export default WatchPage
