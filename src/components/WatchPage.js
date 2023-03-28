import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {closeMenu} from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import {SUGGESTED_VIDEOS , GOOGLE_API_KEY} from '../utils/constant';
import SuggestionVideos from './SuggestionVideos';
import CommentContainer from './CommentContainer';
import LiveMessage from './LiveMessage';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const [suggestedVideos , setSuggestedVideos] = useState([]);
    const dispatch = useDispatch();

    useEffect( ()=>{
        dispatch(closeMenu());
    },[]);

  return (
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
      <div>
        <CommentContainer/>
      </div>
    </div>
  )
}

export default WatchPage
