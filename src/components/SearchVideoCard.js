import React from 'react'

const VideoCard = ({videoInfo}) => {
  const { snippet} = videoInfo;
  const {  channelTitle,title,thumbnails,publishedAt,liveBroadcastContent, description} = snippet;
  const dateOnly = publishedAt.slice(0, 10);
  return (
    <div className='flex drop-shadow-lg h-64 bg-slate-50 p-5 mx-5 my-2 ml-10'>
     <div className='w-1/2'>
      <img src={thumbnails?.medium?.url} alt='thumbnail' className='rounded-lg h-52 border bg-black w-full'/>
     </div>
     <div className='ml-5 w-full overflow-hidden'>
      <h1 className='text-bold text-2xl'>{title}</h1>
      {liveBroadcastContent==="live" 
      && 
      <img src="https://thumbs.dreamstime.com/b/live-icon-white-background-stream-video-news-symbol-social-media-template-broadcasting-online-logo-play-button-network-sign-178366972.jpg"
        alt="live"
        className='w-16 h-14'
      />
      }
      <div className='flex'>
        <img src="https://www.shutterstock.com/image-vector/user-icon-600w-523867123.jpg"
           alt='thumbnail' 
           className='h-10 mt-3 '/>
        <h1 className='font-bold mt-4'>{channelTitle}</h1>
      </div>
      <p className='text-bold ml-3'>{dateOnly}</p>
      <p className='mt-5'>{description}</p>
     </div>
    </div>
  )
}

export default VideoCard
