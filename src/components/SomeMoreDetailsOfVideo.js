import React from 'react'

const SomeMoreDetailsOfVideo = ({title,description,viewCount,tags,publishedAt})=>{
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

export default SomeMoreDetailsOfVideo;
