import React from 'react'
import {Link} from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='drop-shadow-2xl ml-5 text-lg h-fit bg-slate-50'>
      <div>
      <ul className='p-5 leading-10'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/history'><li>History</li></Link>
        <Link><li>Subscriptions</li></Link>
      </ul>
      </div>
      <hr/>
      <div>
        <ul className='p-5 leading-10'>
          <Link><li>Library</li></Link>
          <Link><li>Shorts</li></Link>
          <Link><li>Your Videos</li></Link>
          <Link><li>Watch Later</li></Link>
          <Link><li>Liked Videos</li> </Link>
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
