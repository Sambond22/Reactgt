import React, {useState, useEffect } from "react";
import {filterData,apiUrl} from "./data"
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import {toast} from "react-toastify"
import Spinner from './components/Spinner'
const App = () => {

const[courses,setcourses]=useState('');
const[loading,setloading]=useState(true);
const[category,setcatergory]=useState(filterData[0].title);


  useEffect(()=>{
    const fetchdata=async()=>{
      setloading(true);
    try{
      const response = await fetch(apiUrl);
    const output = await response.json();
    // console.log(output);
    // console.log("first")
    setcourses(output.data);
    }
    catch(error){
        toast.error("Something went wrong");
    }
    setloading(false);
   
  }
  fetchdata();
  },[]);
  return (
    <div className="flex  flex-col min-h-screen bg-bgDark2 ">
    <div>
  <Navbar></Navbar>
  </div>
  <div >
  <div>
  <Filter filterdata={filterData} 
  category={category} 
  setcatergory={setcatergory}>

  </Filter>
</div>
<div className="w-11/12 max-w-[1200px] mx-auto flex justify-center min-h-[50vh] items-center
flex-wrap">
  {
    loading?(<Spinner></Spinner>):(<Cards courses={courses} category={category}></Cards>)
  }
</div>
</div>

    </div>
  );
};

export default App;
