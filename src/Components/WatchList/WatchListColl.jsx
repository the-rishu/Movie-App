import React from 'react'
import { useSelector } from 'react-redux';
import Trailer from '../TrendingTrailer/Trailer';
import appStore from '../URL/Store';


const WatchListColl = () => {

  const list2 = useSelector((appStore) =>{return appStore.watchList.watchListItem})
  console.log(list2)

  let watchColl = sessionStorage.getItem('reduxstate')
  console.log(typeof(watchColl))
  console.log(JSON.parse(watchColl))
 let list =  JSON.parse(watchColl)
 console.log(list.watchList.watchListItem)
let i =0;
  return (list2.length!==0)?<h1>Loading</h1> :(
    <div> {list2.map((res) =>(
      <div>{list2.image}</div>
    ))}</div>
  )
}

export default WatchListColl