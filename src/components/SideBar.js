import React from 'react'

const SideBar = () => {
  return (
    <div className='shadow-lg w-52 ml-5 text-lg bg-black text-white'>
      <div>
      <ul className='p-5 leading-10'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      </div>
      <hr/>
      <div>
        <ul className='p-5 leading-10'>
          <li>Library</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Liked Videos</li> 
        </ul>
      </div>
      <hr/>
      <div className='p-5'>
        <h1 className='font-bold text-xl'>Subscriptions</h1>
      </div>
      <hr/>
      <div className='p-5 leading-10'>
        <h1 className='font-bold text-xl'>Explore</h1>
        <ul>
        <li>Music</li>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Movies</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
