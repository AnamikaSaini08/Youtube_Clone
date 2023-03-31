import React from 'react'
import {Link} from 'react-router-dom';

const SideBar = () => {
  const sideMenuBar = ["Library" , "Shorts" , "Trends" , "Music" , "Movies"];
  return (
    <div className='drop-shadow-2xl ml-5 text-lg h-fit bg-slate-50 w-44'>
      <div>
      <ul className='p-5 leading-10'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/history'><li>History</li></Link>
        <Link to='/subscriptions'><li>Subscriptions</li></Link>
      </ul>
      </div>
      <hr/>
      <div>
        <ul className='p-5 leading-10'>
          {sideMenuBar.map( (menu)=>{
            return <Link to={'/results?search_query='+menu}><li>{menu}</li></Link>
          })}
        </ul>
      </div>
      <hr/>
      <div className='p-5'>
        <h1 className='font-bold text-xl'>Subscriptions</h1>
      </div>
      <hr/>
    </div>
  )
}

export default SideBar
