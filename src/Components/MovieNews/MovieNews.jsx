import React from 'react'
import { MOVIE_NEWS as url  } from '../URL/Url';
import './MovieNews.css'
import useFetchAPi from '../URL/useFetchAPi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MovieNews = () => {

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
  // console.log(data)


  return (data.length===0) ? <h1>Loading...</h1> : (
    <div className='container moviesnews-container'>
        {data.map((res)=>(
          <div className='movies-news-box' key={datakeys[i++]}>

            <div className="movies-news-image-container">
              <img className='movies-news-image' src={res.image} alt="" />
            </div>
              

            <Link className='movies-news-title' to={res.sourceLink}>{res.title}</Link>
          
            <div className="movies-news-writer">
              <p>Writer : {res.writer}</p>
              <p>{res.date}</p>
            </div>

            <p className='movies-news-source'>{res.source}</p>

            {/* <p>{res.description}</p> */} 
          </div>))
        }
    </div>
   
  )
}

export default MovieNews