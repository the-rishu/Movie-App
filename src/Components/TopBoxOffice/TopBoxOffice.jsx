import React from 'react'
import {TOP_BOX_OFFICE as url} from '../URL/Url'
import './TopBoxOffice.css'
import useFetchAPi from '../URL/useFetchAPi';
import { useSelector,useDispatch } from 'react-redux';
import { addItemToWatchList } from '../URL/Slices/WatchList';

const TopBoxOffice = () => {


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
  console.log(data)

  return (data.length===0)?<h1>Loading...</h1>:(
    <div className='top-box-office-container'>
      {data.map((res) => (
        <div className='top-box-office' key={datakeys[i++]}>
          <div className="topboxoffice-imageContainer">
            <img className='top-box-image' src={res.posterImage} alt={res.title} />
          </div>
          <p>{res.title}</p>
          <div className="topboxoffice-rating">
            <p>{res.imdbRating}</p>
            <button>Add to WatchList</button>
          </div>
          
            {/* <p>{res.totalGross}</p>
            <p>{res.weekendGross}</p>
            <p>{res.weeksReleased}</p> */}
        </div>
      ))
      }
    </div>
  )
}

export default TopBoxOffice