import React from 'react'
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const History = () => {
  const histories = useSelector(store=>store?.history?.histories);
  return histories && (
      <div className='flex flex-wrap'>
        {histories.map( (video)=>{
          return <Link key={video?.id}
            to={"/watch?v="+video?.id}>
          <VideoCard videoInfo={video}/></Link>
        })}
    </div>
  )
}

export default History
