import React, { useState } from 'react'
import './Body.css'
import { Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'
import WatchListColl from '../WatchList/WatchListColl'
import Error from '../Error/Error'
import Trailer from '../TrendingTrailer/Trailer'
import Top250Movies from '../Top250/Top250Movies'
import TopBoxOffice from '../TopBoxOffice/TopBoxOffice'
import MostPopularMovies from '../MostPopularMovies/MostPopularMovies'
import MovieNews from '../MovieNews/MovieNews'
import CelebritiesNews from '../CelebritiesNews/CelebritiesNews'
import PopularCelebrites from '../PopularCelebrities/PopularCelebrites'
import UpcomingMovies from '../UpcomingMovies/UpcomingMovies'
import TVShow from '../TVShow/TVShow'

const Body = () => {
  let [activeLink,setactiveLink] = useState(null);
  const handleBackgroundColor = (link) =>{
    if(activeLink!==link)
    {
      setactiveLink(link);
    }
  }

  return (window.innerWidth>=768)?
    <div>
       <div className="apiOption">
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
  :<>
  <div className="trending-trailer">
    <p className='component-heading'>Top Trending Trailer</p>
    <Trailer/>
  </div>
  <div className="top-box-office">
    <p className='component-heading'>Top Box Office</p>
    <TopBoxOffice/>
  </div>
  <div className="most-popular">
    <p className='component-heading'>Movies Popular Movies</p>
    <MostPopularMovies/>
  </div>
  <div className="top-250">
    <p className='component-heading'>Top Movies</p>
    <Top250Movies/>
  </div>
   <div className="popular-celeb">
    <p className='component-heading'>Popular Celebrities</p>
    <PopularCelebrites/>
   </div>
    <div className="tv-shows">
      <p className='component-heading'>TV Shows </p>
      <TVShow/>
    </div>
    <div className="upcoming-movies">
      <p className='component-heading'>Upcoming Movies</p>
      <UpcomingMovies/>
    </div>
   
    <div className="celeb-news">
      <p className='component-heading'>Celebrities News</p>
      <CelebritiesNews/>
    </div>
   <div className="movies-news">
      <p className='component-heading'>Movies News</p>
      <MovieNews/>
   </div>
   
  </>
}



export default Body;