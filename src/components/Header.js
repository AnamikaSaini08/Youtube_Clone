import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleMenu} from '../utils/appSlice';
import { isButtonClick } from '../utils/buttonClickSlice';
import {YOUTUBE_SUGGESTION_API} from '../utils/constant';
import { cacheResult } from '../utils/suggestionSlice';
import { Link } from 'react-router-dom';

const Header=()=>{
    const [searchText,setSearchText] = useState("");
    const [suggestions , setSuggestions] = useState([]);
    const [showSuggestions , setShowSuggestions] = useState(false);
    const [hoverOnSuggestion , setHoverOnSuggestion] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    useEffect(() => {
        function handleScroll() {
            setIsFixed(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleScroll); 
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const dispatch = useDispatch();
    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }
    const cacheSuggestion = useSelector(store=>store?.suggestion);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(cacheSuggestion[searchText]){
                setSuggestions(cacheSuggestion[searchText]);
            }else{
                getSuggestions()
            }
        } , 200);
        return ( ()=>{
            clearTimeout(timer);
        })
    },[searchText]);

    const getSuggestions = async()=>{
        const data = await fetch(YOUTUBE_SUGGESTION_API+searchText);
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(cacheResult({
            [searchText] : json[1]
        }))
    }
    
    return(
        <div className={`flex p-5 mb-2 shadow-lg justify-between ${isFixed ? 'fixed top-0 left-0 right-0 bg-white z-10' : ''}`}>
            <div className="flex">
                <img className="h-8 cursor-pointer" 
                    alt='menu' 
                    onClick={()=> toggleMenuHandler()}
                    src='https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg'
                />
              
                    <img className='h-8 pl-5' 
                        alt='youtube_Logo'
                        src="https://static.cdnlogo.com/logos/y/92/youtube.svg"
                    />
                
            </div>
            <div>
                <div>
                    <input value={searchText} 
                    onChange={async(e)=>{setSearchText(e.target.value)}} 
                    placeholder=" Search..." 
                    className="pl-5 w-96 py-1 border border-gray-400 rounded-l-full"
                    onFocus={()=>setShowSuggestions(true)}
                    onBlur={()=>{!hoverOnSuggestion && setShowSuggestions(false)}}
                    />
        
                    <Link to={'/results?search_query='+searchText}>
                        <button className="border border-gray-400 rounded-r-full py-1 px-1.5 bg-gray-100" 
                        >
                            Search
                        </button>
                    </Link>
                </div>
                {showSuggestions && (<div className='z-10 bg-white fixed w-[24rem] px-5 py-2 shadow-xl rounded-lg border border-gray-100'>
                    <ul>
                        {suggestions.map( (suggestion)=>{
                            return <Link to={'/results?search_query='+searchText}>
                                    <li className='flex hover:bg-gray-100 p-1 m-2'
                                    onClick={()=>{
                                        setSearchText(suggestion);
                                        setShowSuggestions(false);
                                        dispatch(isButtonClick(false));
                                        }   
                                    } 
                                    onMouseOver={() => setHoverOnSuggestion(true)}
                                    onMouseOut={() => setHoverOnSuggestion(false)}
                                >
                                <img alt='search'
                                className='w-4 h-4 mt-1 mr-5'
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwabflkg_k3E9DSIlwWTB1B4rmlinJLEasveVvrUQbXg&s"
                                />
                            {suggestion}
                            </li></Link>
                        })}
                    </ul>
                </div>)}
            </div>
            <div>
                <Link to='/profile'>
                    <img className="h-8"
                    src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' 
                    alt='user_logo'
                    />
                </Link>
            </div>
        </div>
    )
}
export default Header;