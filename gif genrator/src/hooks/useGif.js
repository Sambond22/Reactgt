// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios'
// import Spinner from "./Spinner";

const API_KEY=process.env.React_app_Giphy_api_key;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {
  
    const [gif,setgif]=useState("");
    const[load,setload]=useState(false);
    
    async function fetchData(){
        setload(true);
        
        // AXIOS USE THIS TIME
       const {data}=await axios.get(tag?(`${url}&tag=${tag}`):(url));
   
            const imgsrc=data.data.images.downsized_large.url;
            setgif(imgsrc);
            setload(false);
    }
      useEffect(()=>{
               fetchData();
           },[])

return {gif,load,fetchData};
    
    }
    


export default useGif