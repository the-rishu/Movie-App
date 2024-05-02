import React from 'react'
import { TrendingTrailerUrl as url} from '../URL/Url.jsx'
import './Trailer.css'
import { Link} from 'react-router-dom'
import useFetchAPi from '../URL/useFetchAPi'
import { useSelector , useDispatch} from 'react-redux'
import { addItemToWatchList } from '../URL/Slices/WatchList.jsx'

const Trailer = () => {

 
 
  let data = useFetchAPi({url});
  console.log("Trailer Called")
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


    let watchColl = useSelector((appStore) =>{
      return appStore.watchList?.watchListItem;
    })
    console.log(watchColl)
    
  const datakeys = Object.keys(data);
  let i = 0 ;


 return (data.length ===0)?((firstCheck)? <h1>Loading....</h1>:<h1>Not found</h1> ):(
    <div className='Trailer-container'>
        {data.map((res)=>(
        <div key={datakeys[i++]} className='Trailer-box'>
            <div className='trailer-image-container'>
                <img className='trailer-image' src={res.image} alt="" />  
                <p className='trailer-length'>{res.trailerLength}</p>
            </div>

            {/*  video Length*/}
            
           
            {/* title and data */}
            <p className='trailer-title'>{res.title}</p>
            <p className='trailer-date'>{res.releaseDate}</p>

            {/* link and watchlist */}
            <div className='trailer-video-info'>
                <Link to={res.videoLink} className='videolink'>Video Link</Link>
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
