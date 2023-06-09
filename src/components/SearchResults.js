import React, { useEffect, useState } from 'react';
import { getSearchVideos } from '../utils/helper';
import SearchVideoCard from './SearchVideoCard';
import Shimmer from './Shimmer';
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ButtonList from './ButtonList';
import { addHistory } from '../utils/historySlice';

const SearchResults = () => {
    const [searchVideos , setSearchVideos] = useState(null);
    const [searchParam] = useSearchParams();
    const searchText = searchParam.get("search_query");
    const buttonCLickSearch = useSelector( store=>store.buttonClick.buttonClick);
    const dispatch = useDispatch();

    useEffect( ()=>{
        const fetchSearchVideos = async () => {
            const videos = await getSearchVideos(searchText);
            setSearchVideos(videos);
          };
          fetchSearchVideos();
    },[searchText]);

  return !searchVideos ? <Shimmer/> : (
    <div>
      <div>
        {buttonCLickSearch && <ButtonList/>}
      </div>
      <div className='flex'>
        <div>
          {searchVideos.map( (video)=>{
              return <Link to={"/watch?v="+video?.id?.videoId} 
                        key={video?.id?.videoId}
                        onClick={()=>dispatch(addHistory(video))}>
                  <SearchVideoCard videoInfo={video}/>
              </Link>
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchResults;
