import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../assets/Logo.svg"
import {toast} from "react-hot-toast"

function Navbar(props) {
   let isloggin=props.isloggin;
    let setloggin=props.setloggin;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to ="/">
            <img src={Logo} alt='logo ' width={160} height={32} loading='lazy'></img>
        </Link>

        <ul className='text-richblack-100 flex gap-x-6'>
            <li >
                <Link to="/">Home</Link>
            </li>
            <li >
                <Link to="/">About</Link>
            </li>
            <li >
                <Link to="/">Contact</Link>
            </li>
            
        </ul>

        <div className='flex items-center gap-x-4'>
           {!isloggin &&
            <Link to="/login">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
            </Link>
           }
           {!isloggin &&
            <Link to="/signup">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Signup 
                    </button>
            </Link>
           }
           {isloggin &&
            <Link to="/">
            <button onClick={()=>{setloggin(false)
            toast.success("Logged Out")}}                   
              className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>Logout</button>
            </Link>
           }
           {isloggin &&
            <Link to="/dashboard">
            <button
             className='bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>            </Link>
           }
        </div>
        
    </div>
  )
}

export default Navbar