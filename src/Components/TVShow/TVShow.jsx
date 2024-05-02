import React from 'react'
import useFetchAPi from '../URL/useFetchAPi';
import { TV_SHOWS as url  } from '../URL/Url';
import { useSelector,useDispatch } from 'react-redux';
import { addItemToWatchList } from '../URL/Slices/WatchList';
import './TVShow.css'

const TVShow = () => {
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
  let i = 0 ; 
  let j= 0 ;
  // console.log(data)
  return (data.length===0)?<h1>Loading..</h1>:(
    <div className="tvshow-container">
      {
        data.map((res)=>( 
          <div key={datakeys[i++]} className="tvshows-rowContainer">
            
            <p className='tvshows-date'>{res.date}</p>

            <div className='tvshows-listContainer'>
              {
                res.list.map((episode) => (
                  <div key={j++} className="list-box">
                      <div className="tv-imageContainer">
                        <img className='tv-image' src={episode.image} alt="" />
                      </div>
                      <p className='tvshow-title'>{episode.title}</p>
                  </div>
                ))
              }
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default TVShow