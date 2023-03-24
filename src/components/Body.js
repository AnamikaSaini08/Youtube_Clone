import SideBar from './SideBar';
import MainContainer from './MainContainer';
import store from '../utils/store';
import {useSelector} from 'react-redux';

const Body = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  return (
    <div className=''>
    {isMenuOpen && <SideBar/> } 
    <MainContainer/>
    </div>
  )
}

export default Body
