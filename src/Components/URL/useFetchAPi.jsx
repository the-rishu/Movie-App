
import { useState , useEffect } from 'react';
import { options } from './Url';



const useFetchAPi = ({url}) => {

    
    let [data,setData] = useState([]);
    console.log(url)

    useEffect(()=>{
        if(!url) return;

        console.clear();
        api();
     },[])
 
     
    const api = async () => {
        try
        {

            
        const response = await fetch(url,options);
        const result = await response.json();
        const keys = Object.keys(result);
        console.log(result[keys[0]]);
        setData(result[keys[0]]) 
        }
        catch(err)
        {
            console.log(err)
        }
        
        // if(data.length!==0)
        // {
        // localStorage.setItem('data', JSON.stringify(data));  
        // }
    } 
return data;
}

export default useFetchAPi