import React from 'react'
import useFetchAPi from '../URL/useFetchAPi';
import './UpcomingMovies.css'
import { UPCOMING_MOVIES as url } from '../URL/Url';
import { useSelector,useDispatch } from 'react-redux';
import addItemToWatchList from '../URL/Slices/WatchList'

const UpcomingMovies = () => {

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
  let j = 0;
  // console.log(data)

  return (data.length === 0)?<h1>Loading...</h1>:(
    <div className='upcoming-movie-container' >
      {data.map((res) =>(
        <div key={datakeys[i++]} className="upcoming-movie-box">
           
          <p className='upcoming-movie-date' >{res.date}</p>
           
          <div  className='upcoming-movie-collection'>
            {res.list.map((movies)=>(
              <div key={j++} className='upcoming-movie-list-container'>

                <div className="upcoming-movie-image-container">
                    <img className='upcoming-movie-list-image' src={movies.image} alt="" />
                </div>

                <p className='upcoming-movie-title'>{movies.title}</p>
                
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

export default UpcomingMovies


// {/* <div>
// {movies.categories.map((categories)=>(categories+","))}
// </div> */}

// {/* <div>
//   {
//     movies.staring.map((staring) =>(staring + ","))
//   }
// </div> */}