import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footeer from './Components/Footer/Footeer';
import { Provider } from 'react-redux';
import appStore from './Components/URL/Store';
import { createBrowserRouter } from 'react-router-dom';
import Error from './Components/Error/Error';
import Trailer from './Components/TrendingTrailer/Trailer';
import TopBoxOffice from './Components/TopBoxOffice/TopBoxOffice'
import MostPopularMovies from './Components/MostPopularMovies/MostPopularMovies'
import Top250Movies from './Components/Top250/Top250Movies'
import CelebritiesNews from './Components/CelebritiesNews/CelebritiesNews'
import MovieNews from './Components/MovieNews/MovieNews'
import UpcomingMovies from './Components/UpcomingMovies/UpcomingMovies'
import TVShow from './Components/TVShow/TVShow'
import PopularCelebrites from './Components/PopularCelebrities/PopularCelebrites'
import Body from './Components/Body/Body';
import WatchListColl from './Components/WatchList/WatchListColl';

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header/>
        <Body/>
        <Footeer/>
      </div>
     </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Trailer />,
        errorElement:<Error/>,
      },
      {
        path:"/top-box-office",
        element:<TopBoxOffice/>,
        errorElement:<Error/>,
      },
      {
        path:"/most-popular-movies",
        element:<MostPopularMovies/>,
        errorElement:<Error/>,
      },
      {
        path:"/top-250-movies",
        element:<Top250Movies/>,
        errorElement:<Error/>,
      },
      {
        path:"/get-most-popular-celebrities",
        element:<PopularCelebrites/>,
        errorElement:<Error/>,
      },
      {
        path:"/upcoming-tv-shows",
        element:<TVShow/>,
        errorElement:<Error/>,
      },
      {
        path:"/upcoming-movies",
        element:<UpcomingMovies/>,
        errorElement:<Error/>,
      },
      {
        path:"/get-celebrities-news",
        element:<CelebritiesNews/>,
        errorElement:<Error/>,
      },
      {
        path:"/get-movie-news",
        element:<MovieNews/>,
        errorElement:<Error/>,
      },
      {
        path:"/watchlist",
        element:<WatchListColl/>,
        errorElement:<Error/>,
      },
      
    ]
  }
]);

export default appRouter;

