import React from 'react'
import { useSelector } from 'react-redux';
// import Trailer from '../TrendingTrailer/Trailer'
// import appStore from '../URL/Store';


const WatchListColl = () => {

  const list = useSelector((appStore) =>{return appStore.watchList.watchListItem})
  console.log(list)

//   let watchColl = sessionStorage.getItem('reduxstate')
//   console.log(typeof(watchColl))
//   console.log(JSON.parse(watchColl))
//  let list =  JSON.parse(watchColl)
//  console.log(list.watchList.watchListItem)
let i =0;
  return (list.length!==0)?<h1>Loading</h1> :(
    <div> {list.map((res) =>(
      <div  key={i++}>{list.image}</div>
    ))}</div>
  )
}

export default WatchListColl