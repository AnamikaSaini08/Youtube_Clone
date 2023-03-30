import React from 'react';
import { Link } from 'react-router-dom';
import { isButtonClick } from '../utils/buttonClickSlice';
import { useDispatch } from 'react-redux';

const Button = () => {
    const List = ["All" , 'Live' , "News" , 'Cricket' , 'Songs' , 'Movies' , 'IPL' , 'Gaming','Motivation','Bhakti'];
    const dispatch = useDispatch();
  return (
    <div>
      {List.map( (list , index)=>{
        return <Link onClick={()=>dispatch(isButtonClick(true))} to={'/results?search_query='+list}><button key={index} className='m-3 px-5 py-2 bg-gray-200 rounded-lg'>{list}</button></Link>
      })}
    </div>
  )
}

export default Button
