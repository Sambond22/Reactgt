// import React, { useState } from "react";
import reviews from "./data"
import Testimonial from "./components/Testimonial.js"
const App = () => {
  

  return( <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
  <h1 className="text-5xl font-bold leading-6">Our Testimonial</h1><br></br>
    <div className="mt-1 rounded-md mx-auto bg-purple-500 h-[10px] w-1/5 "></div>
    <Testimonial data={reviews}></Testimonial>
  </div>
  )
};

export default App;
