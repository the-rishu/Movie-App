import React from 'react'
import { MOST_POPULAR_MOVIES as url  } from '../URL/Url';
import './MostPopularMovies.css'
import useFetchAPi from '../URL/useFetchAPi';
import { useSelector,useDispatch } from 'react-redux';
import addItemToWatchList from '../URL/Slices/WatchList'

const MostPopularMovies = () => {

    let data = useFetchAPi({url});
    let firstCheck = true;

    let movieforsearch = useSelector((appStore) =>{
      return appStore.search?.searchItem;
    })
  
    
    if(movieforsearch!==null && movieforsearch!==" ")
    {
        data = data.filter((res) => {
        return res.title.toLowerCase().includes(movieforsearch.toLowerCase());
      })
      if(firstCheck)
      {
        firstCheck  = false;
      }
    }
  
    const dispatch = useDispatch();
  
    const handleWatchList = (item) =>{
        dispatch(addItemToWatchList(item))
    }
    const datakeys = Object.keys(data);
    let i = 0 ;
  

  return (data.length === 0)?<h1>Loading....</h1>: (
    <div className='container'>
        {data.map((res)=>(
             <div className='most-popular-movies' key={datakeys[i++]}>
              <div className="mostpopularmovie-image-container">
                <img className='mostpopularmovie-image' src={res.image} alt="" />
              </div>
              <p className='most-popular-title'>{res.title}</p>
              <div className='most-popular-timeline'>
                <p>{res.year}</p>
              </div>
              <div className='most-popular-rating'>
                <p>Rating:{res.rating.split("(")[0]}/10</p>
                <button className='watchList-btn'>Add to WatchList</button>
              </div>
                
            </div>
        ))
           
        }
    </div>
  )
}

export default MostPopularMovies