import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleMenu} from '../utils/appSlice';

const Header=()=>{
    const dispatch = useDispatch();
    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }
    return(
        <div className='flex p-5 m-2 shadow-lg justify-between'>
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
                <input type="text" placeholder=" Search..." className="w-96 py-1 border border-gray-400 rounded-l-full"/>
                <button className="border border-gray-400 rounded-r-full py-1 px-1.5 bg-gray-100">Search</button>
            </div>
            <div>
                <img className="h-8"
                 src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' 
                 alt='user_logo'
                 />
            </div>
        </div>
    )
}
export default Header;