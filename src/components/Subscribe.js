import React, { useEffect, useState } from 'react'
import { useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import VideoCard from './VideoCard';

const Subscribe = () => {
  const subscribes = useSelector(store=>store.subscribe.subscribe);
  return (
    <div>
    <div className='my-2'>
        <span className='w-32 px-2 py-2 bg-red-600 ml-96 text-white text-bold shadow-sm rounded-md'>
            Your Subscribe Channel
        </span>
    </div>
    <div className='flex flex-wrap'>
      {subscribes.map( (oneSubs)=>{
        return <Link>
          <VideoCard videoInfo={{...Object.values(oneSubs)[0][0]}}/>
        </Link>
      })}
    </div>

    </div>
  )
}

export default Subscribe
