import React from 'react'
import signimg from "../assets/signup.png"
import Templet  from '../components/Templet'
export const Signup = ( {setloggin}) => {
  return (
    <div>
    <Templet
    title={"Join the mmillions learning to code with StudyNotion for free"}
    desc1={"Build skills for today, tomorrow,and beyond."}
    desc2={"Education to future-proof your career."}
    image={signimg}
    formtype={"signup"}
    setloggin={setloggin}
    ></Templet>
  </div>
  )
}
export default Signup;
