import { useEffect, useState } from "react";
import axios from 'axios'
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
export default function Random() {
  // const API_KEY=process.env.React_app_Giphy_api_key;
//   const [gif,setgif]=useState("");
// const[load,setload]=useState(false);
//   async function fetchData(){
//     setload(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//     // AXIOS USE THIS TIME
//    const {data}=await axios.get(url);
// console.log(data);
//         const imgsrc=data.data.images.downsized_large.url;
//         setgif(imgsrc);
//         setload(false);
// }
//   useEffect(()=>{
//            fetchData();
//        },[])

const{gif,load,fetchData}=useGif();

  function gifchangehandler(){
    fetchData();
  }

  return (
    <div className="w-1/2  border-2 border-black bg-green-500 flex flex-col rounded-xl mt-8 gap-3  items-center  ">
      <h1 className="font-semibold mt-5 text-xl underline">A Random GIF</h1>
      {load?(<Spinner></Spinner>):(<img src={gif} alt="giffe" width="250px" height="250px"></img>)}
      <button className="bg-green-200 h-9 font-semibold mb-4 text-lg rounded-lg w-10/12" onClick={gifchangehandler}>Genrate</button>
    </div>
  );
}
