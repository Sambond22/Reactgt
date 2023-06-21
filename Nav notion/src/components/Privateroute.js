// import React, { children } from 'react'
import { Navigate} from 'react-router-dom';
function Privateroute({isloggin, children}) {
    
  if(isloggin){
    return children;
  }
  else{
    return <Navigate to="/login"></Navigate>
  }
}

export default Privateroute