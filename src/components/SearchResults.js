import React, { useEffect, useState } from 'react';
import { openMenu } from '../utils/appSlice';
import { getSearchVideos } from '../utils/helper';
import SideBar from './SideBar';
import SearchVideoCard from './SearchVideoCard';
import Shimmer from './Shimmer';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SearchResults = () => {
    const [searchVideos , setSearchVideos] = useState([]);
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen); 
    const dispatch = useDispatch();

    useEffect( ()=>{
        const fetchSearchVideos = async () => {
            const videos = await getSearchVideos("car");
            setSearchVideos(videos);
          };
          fetchSearchVideos();
          dispatch(openMenu());
    },[]);

  return searchVideos.length===0 ? <Shimmer/> : (
    <div className='flex'>
      <div>
        {isMenuOpen && <SideBar/> } 
      </div>
      <div>
        {searchVideos.map( (video)=>{
            return <Link to={"/watch?v="+video?.id?.videoId} key={video?.id?.videoId}><SearchVideoCard videoInfo={video}/></Link>
        })}
      </div>
    </div>
  )
}

export default SearchResults
