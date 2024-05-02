import React from 'react'
import { CELEBRITIES_NEWS as url  } from '../URL/Url';
import useFetchAPi from '../URL/useFetchAPi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CelebritiesNews.css'

const CelebritiesNews = () => {

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
  


  return (data.length===0)?<h1>Loading...</h1>:(
   <div className='celebrities-news-container'>
      {data.map((res)=>(
        <div className='celebrities-news-box' key={datakeys[i++]}>
           
            {/* <p>{res.description}</p> */}
            
            <div className="celebrities-news-image-container">
              <img className='celebrities-news-image' src={res.image} alt="" />
            </div>
           
              <Link className='celebrities-news-title' to={res.sourceLink}>{res.title}</Link>
          
           <div className="celebrities-news-writer">
              <p>{res.writer}</p>
              <p>{res.date}</p>
           </div>
           <p className='celebrities-news-source'>{res.source}</p>
         
        </div>
      ))
        
      }
   </div>
  )
}

export default CelebritiesNews