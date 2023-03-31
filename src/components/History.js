import React from 'react'
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const History = () => {
  const histories = useSelector(store=>store?.history?.histories);
  return histories && (
      <div className='flex flex-wrap'>
        {histories.map( (video)=>{
          const id = video?.id?.videoId || video?.id ;
          return <Link key={id}
            to={"/watch?v="+id}>
          <VideoCard videoInfo={video}/></Link>
        })}
    </div>
  )
}

export default History
