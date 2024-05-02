import React from 'react'
import './Top250Movies.css'
import { TOP_250_MOVIES as url , options } from '../URL/Url';
import useFetchAPi from '../URL/useFetchAPi';
import { useSelector,useDispatch } from 'react-redux';
import { addItemToWatchList } from '../URL/Slices/WatchList';
const Top250Movies = () => {


    let data = useFetchAPi({url});
    

  let movieforsearch = useSelector((appStore) =>{
    return appStore.search?.searchItem;
  })

  
  if(movieforsearch!==null && movieforsearch!==" ")
  {
      data = data.filter((res) => {
      return res.title.toLowerCase().includes(movieforsearch.toLowerCase());
    })
    
  }

  const dispatch = useDispatch();

  const handleWatchList = (item) =>{
      dispatch(addItemToWatchList(item))
  }
    const datakeys = Object.keys(data);
    // console.log(datakeys)
    let i = 0 ; 


  return (data.length===0)?<h1>Loading...</h1> : (
    <div className='top-250-movies-container'>
    {data.map((res) => (
        <div className='top-250-movies-box' key={datakeys[i++]}>
            <div className="top250movie-imageContainer">
              <img className='top250movies-image' src={res.image} alt="" />
            </div>
            <p className='top250-title'>{res.title}</p>
            <div className="top250movies-timeline">
              <p>{res.year}|</p>
              <p>{res.timeline}</p>
              
            </div>
             <p className="top250-Rating">Rating : {res.rating.split("(")[0]}/10</p>
            <div className="top250movies-watchList">
              <p>{res.rating.split("(")[1].split(")")[0]}</p>
              <button>Add to WatchList</button>
            </div>   
        </div>
    ))
        
    }
    </div>
  )
}

export default Top250Movies