import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickToSubscribe } from '../utils/subscribeSlice';
import ShowMoreDetailsOfVideo from './SomeMoreDetailsOfVideo';

function isSubscribe(subscribeArray,channelId){
  const result = subscribeArray?.find(item=>item.hasOwnProperty(channelId));
  return result ? 'Unsubscribe' : 'Subscribe';
}

const WatchVideoDescription = ({videoInfo}) => {
    const [{statistics,snippet} = {}] = videoInfo || [];
    const {title,thumbnails,channelTitle, tags,description,publishedAt,channelId} = snippet || {};
    const {viewCount,commentCount} = statistics || {};
    const [showMore , setShowMore] = useState(false);
    const subscribeArray = useSelector(store=>store.subscribe.subscribe);
    const [isChannelSubscribe , setIsChannelSubscribe] = useState(isSubscribe(subscribeArray,channelId));
    const dispatch = useDispatch();

    const subscribeHandle = ()=>{
      dispatch(clickToSubscribe({[channelId] : videoInfo}));
    }
    useEffect( ()=>{
      setIsChannelSubscribe(isSubscribe(subscribeArray , channelId));
    },  [subscribeArray,channelId]);

  return (
    <div className='w-[900px]'>
    <div>
        <h1 className='text-bold text-2xl'>{title} </h1>
    </div>
    <div className='my-2 flex text-bold'>
      <img alt='img' src={thumbnails?.default?.url} className='rounded-full w-10 h-10'/>
      <h1 className='ml-5'>{channelTitle}</h1>
      <button 
        className='ml-32 w-32 h-10 bg-red-600 text-white px-5 py-1 rounded-full shadow-md ease-in duration-300 hover:bg-red-700 '
        onClick={()=>{ 
          subscribeHandle();
          }}
      >
        {isChannelSubscribe}
      </button>
      <button 
        className='rounded-full pb-2 px-6 text-2xl ml-96 bg-gray-200 hover:bg-gray-300 '
        onClick={()=>setShowMore(!showMore)}
      >...</button>
    </div>
      {showMore && <ShowMoreDetailsOfVideo title={title} description={description} viewCount={viewCount} tags={tags} publishedAt={publishedAt} />}
    </div>
  )
}

export default WatchVideoDescription
