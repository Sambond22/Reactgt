import React from 'react'
import { useState,useEffect } from 'react';
function useGif(ind) {
    console.log(ind)
    const url=`https://pokeapi.co/api/v2/pokemon?limit=500&offset=0`;
const pokeurl=`https://pokeapi.co/api/v2/pokemon/`
// let[ind,setind]=useState(0);
let[stat,setstat]=useState([]);
let[imgg,seturlimg]=useState("");
let[ability,setability]=useState([]);
let[wweight,setweight]=useState(0);
let[hheight,setheight]=useState(0);
let[pokemon,setpokemon]=useState("");
let[type,settype]=useState("");
    const[loading,setloading]=useState(false);


async function datafetch(){
    // id pass

    setloading(true);

    const data=await fetch(ind===0?url:`${pokeurl}${ind}`);
    // const data=await fetch (url);
    const results=await data.json();
    console.log(results)
//    console.log(results.weight)
   

    if(ind!==0){
        setweight(results.weight);
            setheight(results.height);
seturlimg(results.sprites.other.dream_world.front_default);
setability(results.abilities);
setstat(results.stats); 
settype(results.types);
// console.log(imgg)
// console.log(wweight)
// console.log(hheight)
         
    }
    
    setpokemon(results);
    
    // console.log(results);
    setloading(false);
   

}
    useEffect(()=>{
        datafetch();
         },[]);
    return {datafetch,ind,stat,type,imgg,ability,wweight,hheight,pokemon};
  
}

export default useGif