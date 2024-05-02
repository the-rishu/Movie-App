import React, { useState } from 'react'
import './Header.css'
import { useDispatch } from 'react-redux'
import images from '../../images.png'
import { searchingMovie } from '../URL/Slices/Search'
import { Link } from 'react-router-dom'

const Header = () => {


  const [searchMovie,setsearchMovie] = useState("")

  

  const handlechange = (e) =>{
    setsearchMovie(e.target.value);
    dispatch(searchingMovie(e.target.value))
   
  }


  const dispatch  = useDispatch();
  const handleclick = (searchMovie) =>{
    dispatch(searchingMovie(searchMovie))
  }
  
 
  return (
    <div className='header'>
        <div className="image-box">
            <img className='logo-image' src={images} alt="" />
        </div>
        
        <div className='navbar'>
          <div className="searchcontainer">
            <input type="text" className='search-bar' value={searchMovie} onChange={handlechange}/>
            <button onClick={()=>handleclick(searchMovie)}>Search</button>
          </div>
        
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/watchlist">WatchList</Link></li>
            <li>Sign In</li>
            <li>Dark</li>
          </ul>
        </div>
        
    </div>
  )
}

export default Header