import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {Link, useNavigate} from "react-router-dom"
import { toast } from 'react-hot-toast';

function Loginform( {setloggin}) {
const navigate=useNavigate();
    const[formdata,setformdata]=useState({email:"",pasword:""})
  function changehandler(event)
  { 
        setformdata((prevdata)=>{
            return{
                ...prevdata,
                [event.target.name]:event.target.value
            }
        })

  }
  const[showpasword,setpasswordtype]=useState(false);
function subhandler(event){
event.preventDefault();
setloggin(true);
toast.success("Logged IN");
navigate("/dashboard");

}
    return (
    <div>
        <form   className="flex flex-col w-full gap-y-4 mt-6" onSubmit={subhandler}>
            <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>              
              <input
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

                required
                type='email' 
                name="email"
                value={formdata.email}
                onChange={changehandler}
                placeholder='Enter email address'
                   ></input>
            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                    Password
                </p>
                <input
                required 
                name='pasword'
                type={showpasword?("text"):("password")}
                value={formdata.pasword}
                onChange={changehandler}
                placeholder='Enter Password'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input> 
                <span  
                className='absolute right-3 top-[38px] text-slate-400  text-2xl cursor-pointer'
            onClick={()=>{setpasswordtype((prev)=>{
                return(!prev);
            })}}>
            {showpasword?(<AiOutlineEyeInvisible></AiOutlineEyeInvisible>):(<AiOutlineEye></AiOutlineEye>)}</span>

            <Link to="#"><p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p></Link>
            </label>

            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>
           
        </form>
    </div>
  )
}

export default Loginform