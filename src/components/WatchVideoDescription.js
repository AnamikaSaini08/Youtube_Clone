import React, { useState } from 'react';

const ShowMoreDetails = ({title,description,viewCount,tags,publishedAt})=>{
  return(
  <div className='bg-slate-600 text-white mt-2 py-4 px-3 rounded-lg'>
    <div className='text-bold flex'>
    <h1 className='mr-2'>{viewCount} views</h1>
    <h1>{publishedAt.slice(0,10)}</h1>
    </div>
    <div className='mb-8'>
    {title}
    </div>
    <hr/>
    <p className='my-4'>{description}</p>
    <hr/>
    <div className='mt-4'>
    {tags.map( (tag ,i)=>{
      return <span key={i} className='text-blue-400'>#{tag}</span>
    })}
    </div>
  </div>
  )
  
}

const WatchVideoDescription = ({videoInfo}) => {
    const [{statistics,snippet}] = videoInfo;
    const {title,thumbnails,channelTitle, tags,description,publishedAt} = snippet;
    const {viewCount,commentCount} = statistics;
    const [showMore , setShowMore] = useState(false);
  return (
    <div className='w-[900px]'>
    <div>
        <h1 className='text-bold text-2xl'>{title} </h1>
    </div>
    <div className='my-2 flex text-bold'>
      <img alt='img' src={thumbnails?.default?.url} className='rounded-full w-10 h-10'/>
      <h1 className='ml-5'>{channelTitle}</h1>
      <button className='ml-32 w-32 h-10 bg-red-600 text-white px-5 py-1 rounded-full shadow-md ease-in duration-300 hover:bg-red-700 '>
      Subscribe
      </button>
      <button className='rounded-full pb-2 px-6 text-2xl ml-96 bg-gray-100 hover:bg-gray-200 '
        onClick={()=>setShowMore(!showMore)}
      >...</button>
    </div>
      {showMore && <ShowMoreDetails title={title} description={description} viewCount={viewCount} tags={tags} publishedAt={publishedAt} />}
    </div>
  )
}

export default WatchVideoDescription
