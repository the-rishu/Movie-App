import React, { useState } from 'react'
import './Body.css'

import { Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'
import WatchListColl from '../WatchList/WatchListColl'
import Error from '../Error/Error'

const Body = () => {
  let [activeLink,setactiveLink] = useState(null);
  const handleBackgroundColor = (link) =>{
    if(activeLink!==link)
    {
      setactiveLink(link);
    }
  }

  return (
    <div>
      <div className="apiOption">
        
          {/* <Link to="/" className={activeLink==="/"?'changeColor':'link'} onClick={()=> handleBackgroundColor("/")}>Trending Trailers</Link> */}

          <Link to="/top-box-office" className={activeLink==="/top-box-office"?'changeColor':'link'}  onClick={()=>handleBackgroundColor("/top-box-office")}> Box Office</Link>

          <Link to="/most-popular-movies" className={activeLink==="/most-popular-movies"?'changeColor':'link'} onClick={()=>handleBackgroundColor("/most-popular-movies")}>Most Popular Movies</Link>

          <Link to="/top-250-movies" className={activeLink==="/top-250-movies"?'changeColor':'link'} onClick={()=>handleBackgroundColor("/top-250-movies")}>Top Movies</Link>

          <Link to="/get-celebrities-news" className={activeLink==="/get-celebrities-news"?'changeColor':'link'} onClick={()=>handleBackgroundColor("/get-celebrities-news" )}>Celebrites News</Link>

          <Link to="/get-movie-news" className={activeLink==="/get-movie-news"?'changeColor':'link'} onClick={()=>handleBackgroundColor("/get-movie-news")}>Movie News</Link>

          <Link to="/upcoming-movies" className={activeLink==="/upcoming-movies"?'changeColor':'link'} onClick={()=>handleBackgroundColor("/upcoming-movies")}>Upcoming Movies</Link>

          <Link to="/upcoming-tv-shows" className={activeLink==="/upcoming-tv-shows"?'changeColor':'link'} onClick={()=>handleBackgroundColor("/upcoming-tv-shows")}>Upcoming TVShows</Link>

          <Link to="/get-most-popular-celebrities" className={activeLink==="/get-most-popular-celebrities"?'changeColor':'link'} onClick={()=>handleBackgroundColor("/get-most-popular-celebrities")}>Popular Celebrites</Link>
        
          
      </div>
      
      <Outlet />  
    </div>
  )
}



export default Body;