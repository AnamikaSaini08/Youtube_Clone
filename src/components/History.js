import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import SideBar from './SideBar'
import VideoCard from './VideoCard';

const History = () => {
  const histories = useSelector(store=>store?.history?.histories);
  console.log(histories);
  return histories && (
    <div className='flex'>
      <div className='w-48'>
        <SideBar/>
      </div>
      <div className='flex flex-wrap'>
        {histories.map( (video)=>{
          return <Link key={video?.id}
            to={"/watch?v="+video?.id}>
          <VideoCard videoInfo={video}/></Link>
        })}
      </div>
      
    </div>
  )
}

export default History
