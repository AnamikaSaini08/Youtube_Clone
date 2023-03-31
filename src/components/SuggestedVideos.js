import React, { useEffect , useState} from 'react';
import { GOOGLE_API_KEY, SUGGESTED_VIDEOS } from '../utils/constant';
import SuggestedVideoCard from './SuggestedVideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addHistory } from '../utils/historySlice';
import Shimmer from './Shimmer';

const SuggestedVideos = ({videoId}) => {
    const [suggestionVideos , setSuggestionVideos] = useState([]);
    const dispatch = useDispatch();
    useEffect( ()=>{
        getSuggestedVideos();
    },[videoId]);

    const getSuggestedVideos= async()=>{
        const data = await fetch(SUGGESTED_VIDEOS+videoId+"&type=video&key="+GOOGLE_API_KEY);
        const json = await data.json();
        setSuggestionVideos(json?.items);
    }
    const addingToHistory=(video)=>{
        dispatch(addHistory(video));
    }

  return !suggestionVideos ? <Shimmer/> : (
    <div>
        <h1 className='text-bold ml-5'>Suggestions</h1>
        {suggestionVideos.map( (suggestion)=>{
            return <Link to={"/watch?v="+suggestion?.id?.videoId} 
                    key={suggestion?.id?.videoId}
                    onClick={()=>{addingToHistory(suggestion);
                    }}>
                <SuggestedVideoCard suggestion={suggestion}/>
            </Link>
            
        }
        )}
    </div>
  )
}

export default SuggestedVideos;
