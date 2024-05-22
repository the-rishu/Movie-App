import React from 'react'
import { POPUPLAR_CELEBRITIES as url  } from '../URL/Url';
import useFetchAPi from '../URL/useFetchAPi';
import { useSelector } from 'react-redux';
import './PopularCelebrities.css'
import { Link } from 'react-router-dom';

const PopularCelebrites = () => {

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

  
  const datakeys = Object.keys(data);
  let i = 0 ; 
  

  return (data.length===0)?<h1>Loading..</h1> :(
    <div className="container">
      {
        data.map((res) =>(
          <div key={datakeys[i++]} className="pplrCeleb-box">
            <div className="pplrCeleb-imageContainer">
              <img className='pplrCeleb-image' src={res.image} alt="" />
            </div>

            <div>
              <Link className='pplrCeleb-detail' to={res.knownFor.link}>Movie : {res.knownFor.title.split("(")[0]}</Link>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default PopularCelebrites