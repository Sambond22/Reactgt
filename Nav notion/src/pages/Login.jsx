import React from 'react'
import logimg from "../assets/login.png"
import Templet from "../components/Templet"

export const Login = ({ setloggin}) => {
  return (
    <div>
      <Templet
      title={"Welcome Back"}
      desc1={"Build skills for today, tomorrow,and beyond."}
      desc2={"Education to future-proof your career."}
      image={logimg}
      formtype={"login"}
      setloggin={setloggin}
      ></Templet>
    </div>
  )
}
 export default Login;