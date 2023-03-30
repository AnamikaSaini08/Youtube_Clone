import React from 'react'

const VideoCard = ({videoInfo}) => {
  const { snippet, statistics } = videoInfo || {};
  const { channelTitle, title, thumbnails, publishedAt } = snippet || {};
  const { viewCount } = statistics || {};
  const dateOnly = publishedAt.slice(0, 10);
  return (
    <div className='drop-shadow-lg w-80 h-80 bg-slate-50 p-5 m-5 ml-10'>
     <div>
      <img src={thumbnails?.medium?.url} alt='thumbnail' className='rounded-lg'/>
     </div>
     <div>
      <h1 className='text-bold text-2xl'>{title.length>30? title?.slice(0,30)+"...": title}</h1>
      <h5>{channelTitle}</h5>
      <div className='flex'>
        <h5>{viewCount}-views</h5>
        <h5>.  {dateOnly}</h5>
      </div>
     </div>
    </div>
  )
}

export default VideoCard
