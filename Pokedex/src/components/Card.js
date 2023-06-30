import React, { useState } from 'react'
import useGif from '../hook/useGif'
import Details from './Details';
function Card({name,ind,url}) {

  const[show,setshow]=useState(false)
  const {datafetch,stat,type,imgg,ability,wweight,hheight}=useGif(ind);
    function clickhandler(){
   
       datafetch(ind);
    //    setshow(true);   
    } 
    //
  //  const colourr=`bg-${type[0].type.name}`;
  //  console.log(colourr);
    // console.log(type[0].type.name);
//     console.log(imgg)
// console.log(ind)
// console.log(stat)
// console.log(ability)s
// console.log(wweight)
// console.log(hheight)

// let colour=(type[0].type.name);
// console.log(type[0].type.name)
// bg-[${type[0].type.name}]

  return (
  <div  onClick={()=>setshow(!show)}  className={` w-[450px] max-h-[450px] flex relative h-[300px] hover:scale-105 transition-all bg-cyan-500 shadow-lg shadow-rose-400 hover:shadow-cyan-500/50 m-4 p-4 border-[10px] justify-between  rounded-2xl`}  >
<div className='font-extrabold text-4xl capitalize mt-11 '>{name}</div>  
{show && <Details name={name}show={show} setshow={setshow} imgg={imgg} stat={stat} ability={ability} type={type} wweight={wweight} hheight={hheight}></Details>}

<div className='font-bold text-2xl'>{ind}</div>
<img className="h-[10rem] w-[10rem] absolute  left-[58%] top-[25%]" src={imgg} alt='pokemon imgggg'></img>
<div className='flex flex-col justify-start   absolute left-10 top-[50%]'>
{type.map((type)=>
                  <div className='text-xl text-white border-[3.2px] rounded-2xl px-[12px] p-[5px] mt-2'>{type.type.name}</div> )}
</div>

    </div>
  )
}

export default Card