import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


function Signupform({setloggin}) {
    const navigate = useNavigate();

    
    const[formdata,setformdata]=useState({firstname:"",lastname:"",email:"",password:"",confirmpassword:""})
    function changehandler(event)
    { 
          setformdata((prevdata)=>{
              return{
                  ...prevdata,
                  [event.target.name]:event.target.value
              }
          })
  
    }
    const [accountType, setAccountType] = useState("student");
    const[showpassword,setshowpassword]=useState(false);
 
    function submitHandler(event){
        event.preventDefault();
        if(formdata.password !== formdata.confirmpassword) {
            toast.error("Passwords do not match");
            return ;
        }

        setloggin(true);
        toast.success("Account Created");
        const accountData = {
            ...formdata
        };

        const finalData = {
            ...accountData,                                                                                                                                                   
            accountType
        }

        console.log("printing Final account data ");
        console.log(finalData);

        navigate("/dashboard");
    }

 

    return (
    <div>
        <div
        className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full  max-w-max'>

            <button
            className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>
                Student
            </button>

            <button
            className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}
            >
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
        <div className='flex gap-x-4 mt-[20px]'>

        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup>*</sup></p>
            <input
            required
            type='text'
            name='firstname'
            onChange={changehandler}
            placeholder='Enter first name'
            value={formdata.firstname}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

            >

            </input>
        </label>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name</p>
            <input
            type='text'
            name='lastname'
            onChange={changehandler}
            value={formdata.lastname}
            placeholder='Enter last name'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'

            >

            </input>
        </label>
        </div>
        <label >
            <p>
                Email Address<sup>*</sup>
            </p>
            <input
            type='email'
            name='email'
            placeholder='Enter email address'
            value={formdata.email}
            onChange={changehandler}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
></input>
        </label>
        <div className='w-full flex gap-x-4 mt-[20px]'>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Create Password<sup>*</sup>
            </p>
            <input
            type={showpassword?('text'):("password")}
            name='password'
            onChange={changehandler}
            value={formdata.password}
            placeholder='Enter Password'
            className='bg-richblack-800 text-sm rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
            <span       
            className='absolute right-1 top-[38px] cursor-pointer'
            onClick={()=>setshowpassword((prev)=>!prev)}>{showpassword?  (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}</span>
        </label>
        <label className='w-full relative' >
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Confirm Password<sup>*</sup>
            </p>
            <input
            type='password'
            name='confirmpassword'
            onChange={changehandler}
            value={formdata.confirmpassword}
            placeholder='Confirm Password'
            className='bg-richblack-800 text-sm rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
             <span          
            className='absolute right-1 top-[38px] cursor-pointer'
            onClick={()=>setshowpassword((prev)=>!prev)}>{showpassword  ?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}</span>
  
        </label>
        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account
        </button>
        </div>
        </form>
    </div>
  )
}

export default Signupform