import { useState } from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { FiChevronRight } from 'react-icons/fi';
import { FiChevronLeft } from 'react-icons/fi';


function Card({data}){

    let [i ,setindex]=useState(0);
    function randomm(){
        i=Math.floor(Math.random()*data.length);
        setindex(i);
    }
    function dechandler(){
        i=(i+data.length-1)%data.length;
        setindex(i);
    }
    function inchandler(){
        i=(i+1)%data.length;
        setindex(i);
    }
    return (
        <div className='relative flex flex-col justify-center items-center'>
        <div >
        <div className='rounded-full bg-purple-500 h-[150px] w-[150px] absolute left-[0.2rem] bottom-[21.4rem]'></div>
        <img src={data[i].image} alt="bnde ki gitimage" className='h-[150px] w-[150px] absolute left-[0.07rem] bottom-[21rem] rounded-full'></img>
        </div>
        <div>
        <h2 className='mt-10 text-2xl  leading-1 font-bold '>{data[i].name}</h2>
        </div>
        <div>
        <h3 className='mt-4 text-purple-200 text-lg font-semibold'>{data[i].job}</h3>
        </div>
        <div>
        <RiDoubleQuotesL className='mt-4 text-2xl text-purple-500'></RiDoubleQuotesL>
        </div>
        <div>
        <p className='mt-4'>{data[i].text}</p>
        </div>
        <div>
        <RiDoubleQuotesR className='mt-4 text-2xl text-purple-500'></RiDoubleQuotesR>
        </div>
       
      
        <div className='mt-5'>
            <button className='mr-6 mb-5 text-violet-300 text-2xl hover:text-violet-600' onClick={inchandler}><FiChevronLeft></FiChevronLeft></button>
            <button className=' text-2xl  text-violet-300 hover:text-violet-600' onClick={dechandler}><FiChevronRight></FiChevronRight></button>
        </div>
        <div className='mb-6 bg-purple-400 hover:bg-purple-500 transition-all duration-200 p-[5px] pr-14 pl-14 rounded-[5px]'>
        <button className=' hover:text-violet-600 text-lg text-white font-semibold' onClick={randomm}>Select</button>
        </div>
        </div>
    )
}
export default Card;