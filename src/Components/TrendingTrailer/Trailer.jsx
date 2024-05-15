import React from 'react'
import { TrendingTrailerUrl as url} from '../URL/Url.jsx'
import './Trailer.css'
import { Link} from 'react-router-dom'
import useFetchAPi from '../URL/useFetchAPi'
import { useSelector , useDispatch} from 'react-redux'
import { addItemToWatchList } from '../URL/Slices/WatchList.jsx'

const Trailer = () => {

 
 
  let data = useFetchAPi({url});
  // console.log("Trailer Called")


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
  let i = 0 ;


//  return (data.length ===0)?((firstCheck)? <h1>Loading....</h1>:<h1>Not found</h1> ):(
  return (data.length ===0)?(<h1>Loading....</h1>):(
    <div className='container'>
        {data.map((res)=>(
        <div key={datakeys[i++]} className='Trailer-box'>
            <div className='trailer-image-container'>
                <img className='trailer-image' src={res.image} alt="" />  
                <p className='trailer-length'>{res.trailerLength}</p>
            </div>

            {/*  video Length*/}
            
           
            {/* title and data */}
            <Link to={res.videoLink} className='trailer-videolink'>
            <p className='trailer-title'>{res.title}</p>
            </Link>
            
            <p className='trailer-date'>{res.releaseDate}</p>

            {/* link and watchlist */}
            <div className="watchlist">
              <button className='watchList-btn' onClick={() =>{
                handleWatchList(res)
              }}>Add To WatchList</button>
            </div>
            
           
            
            
        </div>))
        }
    </div>
  )
}

export default Trailer
