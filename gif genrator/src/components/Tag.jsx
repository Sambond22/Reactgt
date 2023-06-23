import { useEffect, useState } from "react";
import axios from 'axios'
import Spinner from "./Spinner";
import useGif from "../hooks/useGif"
export default function Tag() {


  const API_KEY=process.env.React_app_Giphy_api_key;
  // const [gif,setgif]=useState("");
// const[load,setload]=useState(false);
//   async function fetchData(){
//     setload(true);
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

const[tag,settag]=useState("car");

const{gif,load,fetchData}=useGif(tag);
  function gifchangehandler(){
    fetchData(tag);
  }

  function changlehandler(event){
    settag(event.target.value);
  }

  return (
    <div className="w-1/2 h-96 bg-blue-500 flex flex-col border-2 border-black rounded-xl mt-8  items-center text-2xl  ">
      <h1 className="font-semibold mt-5 text-xl underline">Random {tag} GIF</h1>
      {load?(<Spinner></Spinner>):(<img src={gif} alt="giffe" width="250px" height="250px"></img>)}
     
     <input
     className=" font-semibold mb-[3px] text-center py-1  text-lg rounded-lg w-10/12 "
     onChange={changlehandler}
     value={tag}
     ></input>
     
      <button className="bg-green-200 py-1 font-semibold mb-4 text-lg rounded-lg w-10/12" onClick={gifchangehandler}>Genrate</button>
    </div>
)
}
