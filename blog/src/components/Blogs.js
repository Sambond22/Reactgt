import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext';
import Spinner from "../components/Spinner"

function Blogs() {
  // Appcontext likhane jarrure he konsa provider use kr rhe ho ye btaṭa he
  const {post,loading}=useContext(Appcontext);
  return (
    <div className='mb-[55px] p-2 mt-14 h-screen gap-6 flex justify-center items-center flex-col w-11/12 max-w-[650px]'>
{loading?
<Spinner ></Spinner>
:
post.length===0?
(<div>"NO POST FOUND"</div>):

(post.map((postt)=>(

  <div key={postt.id}>
    <p className='font-bold text-sm'>{postt.title}</p>
    <p className='text-[10px]'>
      By <span className='italic'>{postt.author}</span>on <span className='underline font-bold'>{postt.category}</span>
    </p>
    <p className='text-[10px]'>Posted on {postt.date}</p>
    <br></br>
    <p className=' text-[12px]'>{postt.content}</p>
    <div className='flex  gap-x-2'>
      {postt.tags.map((tag,index)=>{return <span className='underline mt-1  text-[10px] font-bold text-blue-500' key={index} >{`#${tag}`}</span>})}
    </div>
  </div>
  
)))}
    </div>
  )
}

export default Blogs