import { useContext, useEffect } from "react";
import Blogs from "./components/Blogs";
import Page from "./components/Page";
import { Appcontext } from "./context/Appcontext";
import "./App.css"

export default function App() {
const {fetchBlogposts}=useContext(Appcontext);
  useEffect(()=>{
    fetchBlogposts();
  },[]);


return <div className="w-full h-full flex flex-col justify-center items-center gap-3" >
    <div className=" fixed h-12 top-0 bg-white border-1 text-center  shadow-xl w-full  ">
      <h1 className="text-2xl mt-2  font-bold">Apne Apne Blogs</h1>
    </div>
    <Blogs></Blogs>
    <Page></Page>
  </div>;
}
