import React from 'react'
import {Link} from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='drop-shadow-2xl ml-5 text-lg h-fit bg-slate-50'>
      <div>
      <ul className='p-5 leading-10'>
        <Link><li>Home</li></Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      </div>
      <hr/>
      <div>
        <ul className='p-5 leading-10'>
          <Link><li>Library</li></Link>
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
