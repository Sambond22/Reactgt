import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'

function Page() {
const {page,pagehandler,totalpages}=useContext(Appcontext);
  return (
     
    <div className='mt-1 fixed  bottom-1 bg-white w-full flex justify-center items-center border  border-black'>
      <div className='w-11/12 max-w-[500px] flex justify-between '>
<div className='flex gap-2'> {page > 1 &&    
    (<button className='rounded-md border-black border shadow-sm px-4 py-1' onClick={()=>pagehandler(page-1)}>
    Previous
    </button>)
    }

  {page < totalpages && 
  (<button className='rounded-md border border-black shadow-sm px-4 py-1' onClick={()=>pagehandler(page+1)}>
  Next
  </button>)
  }</div>
   
    
<p className=' flex font-bold mt-2 text-sm text-center'>Page {page} of {totalpages}</p>
    </div>
    </div>

  )
}

export default Page;