import React, { useState } from 'react'
import './Header.css'
import { useDispatch } from 'react-redux'
import images from '../../images.png'
import { searchingMovie } from '../URL/Slices/Search'
import { Link } from 'react-router-dom'

const Header = () => {


  const [searchMovie,setsearchMovie] = useState("")

  const [category,setCategory] = useState("hide");

  const handlechange = (e) =>{
    setsearchMovie(e.target.value);
    dispatch(searchingMovie(e.target.value))
   
  }

  const dispatch  = useDispatch();
  const handleclick = (searchMovie) =>{
    dispatch(searchingMovie(searchMovie))
  }
  
  const handleCategory = () =>{
    if(category==="dis-category")
    {
      setCategory("hide");
      console.log(category)
    }
    else if(category==="hide")
    {
      setCategory("dis-category");
      console.log(category)
    }
    
  }
 
  return (
    <div className='header'>
        <div className="image-box">
            <img className='logo-image' src={images} alt="" />
        </div>
        
        <div className='navbar'>
          <div className="searchcontainer">
            <input type="text" className='search-bar' value={searchMovie} onChange={handlechange} placeholder='search'/>
            <button onClick={()=>handleclick(searchMovie)}>Search</button>
          </div>
        
          
          <Link to="/">Home</Link>

           
            <div className="category-list">
              <p className='category' onClick={()=>handleCategory}>Category</p>
              <div className={category!=="hide"?"dis-category":"hide"}>
                <Link to="/action">Action</Link>
                <Link to="/adventure">Adventure</Link>
                <Link to="/animation">Animation</Link>
                <Link to="/biography">Biography</Link>
                <Link to="/comedy">Comedy</Link>
                <Link to="/documentry">Documentry</Link>
                <Link to="/drama">Drama</Link>
                <Link to="/famliy">Family</Link>
                <Link to="/fantasy">Fantasy</Link>
                <Link to="/file-noir">File-noir</Link>
              </div>
              
            </div>
            <Link to="/watchlist">WatchList</Link>
          
          {/* <ul>
            <li></li>
            <li>Category</li>
            <li></li>
            <li>Sign In</li>
            <li>Dark</li>
          </ul> */}
        </div>
        
    </div>
  )
}

export default Header