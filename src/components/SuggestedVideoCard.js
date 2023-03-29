import React from 'react'

const SuggestedVideoCard = ({suggestion}) => {
   const {snippet} = suggestion;
   const {thumbnails,channelTitle,publishedAt,title} = snippet;
  return (
    <div className='flex shadow-md bg-gray-100 w-96 h-32 mt-2 ml-5'>
    <div className=''>
        <img src= {thumbnails?.medium?.url}
            alt="image"
            className='w-58 h-28 m-2 border rounded-lg'
        />
    </div>
    <div className='my-2 ml-4'>
        <h1 className='font-bold'>{title.length>25? title.slice(0,25)+"...": title}</h1>
        <p>{channelTitle}</p>
        <p>{publishedAt.slice(0,10)}</p>
    </div>
    </div>
  )
}

export default SuggestedVideoCard;
