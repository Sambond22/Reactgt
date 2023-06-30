import {  useEffect } from 'react';
import  ReactDOM  from 'react-dom';
import React from 'react'
import useGif from '../hook/useGif';
function Details({name,show,setshow,imgg,type,  stat, ability,wweight,hheight}) {
  // ReactDOM.createPortal


  useEffect(()=>{
document.body.style.overflowY="hidden";
    return()=>{
document.body.style.overflowY="scroll";


    }
  })

  return ReactDOM.createPortal (
    
    <div>
  <div className='modalwrapper ' onClick={(()=>setshow(false))}>
  {console.log({show})}
    
  </div>
    <div className=' relative modelcontainer'>  
    <div className='flex flex-col  items-center rounded-2xl h-[10rem] w-[45rem]'>
  <div className='ml-[5rem] text-7xl font-bold'>  {name}</div>
    <img className="h-[10rem] mt-2 z-50 w-[10rem] absolute left-[39%] top-[29%]" src={imgg} alt='pokemon imgggg'></img>
<div className='flex gap-x-1  mt-3 ml-[5rem]  '>
{type.map((type)=>
                  <div className='text-2xl  border-black border-[2px] rounded-2xl px-[19px] p-[5px] mt-2'>
                  {type.type.name}</div> )}
</div>
 
   
    <div className=' bg-white h-[27rem] w-[55rem] rounded-[10%] flex flex-col absolute left-0 top-[18rem]'>
<div className='ml-5 mt-5'>
<p className='ml-2 text-4xl font-semibold'>Abilities</p>
{ability.map((ability)=> <div className='flex text-lg ml-2 mt-1  '><div className='w-1 h-1 rounded-full mt-3  bg-black'></div>{ability.ability.name}</div>)}

</div>
   
   <br></br>
   <div className='ml-5 '>
   <p className='ml-2 text-4xl font-semibold'>Stats</p>
  {stat.map((stat)=>
 <div>
 
 
 <table>
 <tbody className='flex'>
    <tr className='flex'>
    <td className='capitalize gap-x-2'>{stat.stat.name} :</td>
   <div className='flex'>
   <td >{stat.base_stat} <div className={` absolute left-4 bottom-4 range-view ${stat.base_stat>50?"range-view-negative":"range-view-positive"}`} style={ { '--percent': `${stat.base_stat}%` } } ></div>
</td>
   </div>
    </tr>
  </tbody>
  </table>
 </div>)}
    <div className='mr-2 mt-4 text-4xl font-semibold absolute right-12 flex  top-0'>Weight:<div className='text-xl mt-2'>  {wweight} kg</div></div>
    <div className='mr-1 mt-10 text-4xl font-semibold absolute right-12 top-4  flex'>Height:<div className='text-xl mt-2'> {hheight*10} cm</div></div>
    

   
   </div>
 </div>
   
 </div>
    
</div> 

    </div>
    ,
    
    document.querySelector(".mymodal")
  )
}

export default Details