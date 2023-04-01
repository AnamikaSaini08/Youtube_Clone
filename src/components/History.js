import React from 'react'
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const History = () => {
  const histories = useSelector(store=>store?.history?.histories);
  return histories && (
    <div>
    <div className='my-2'>
      <h1 className='px-2 py-2 bg-red-600 ml-96 text-white text-bold shadow-sm rounded-md'>Your History</h1>
    </div>
      <div className='flex flex-wrap'>
          {histories.map( (video)=>{
            const id = video?.id?.videoId || video?.id ;
            return <Link key={id}
              to={"/watch?v="+id}>
            <VideoCard videoInfo={video}/></Link>
          })}
      </div>
    </div>
      
  )
}

export default History
