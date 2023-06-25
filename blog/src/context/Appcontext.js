import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"
// create context
export  const Appcontext=createContext();

// provider create 
export default function AppcontextProvider({children}){
  
    // pass all data
    const[loading,setloading]=useState(false);
    const[page,setpage]=useState(1);
    const[post,setpost]=useState([]);
    const[totalpages,settotalpages]=useState(null);

// data filling 
    async function fetchBlogposts(page=1){
        setloading(true);
        let url=`${baseUrl}?page=${page}`;
       
        try{
                const result=await fetch (url);
                const data=await result.json();
                setpage(data.page);
                setpost(data.posts);
                settotalpages(data.totalPages);
                console.log(data);
        }
        catch(error){
            console.log("Error in fetching Data");
            setpage(1);
            setpost([]);
            settotalpages(null);
        }
        setloading(false);
    }

    function pagehandler(page){
        setpage(page);
        fetchBlogposts(page);
    }

    // genric code esa he hota he 
    // instead of value what you want write it make a obj with name value/xyz
    const value={
        loading,
        setloading,
        post,
        setpost,
        page,
        setpage,
        totalpages,
        settotalpages,
        fetchBlogposts,
        pagehandler
    };

    // sytax of return
    // childern ko value send hogyi
    // line no.4 name use than.Provider
    return <Appcontext.Provider value={value}>
        {children}
    </Appcontext.Provider>
}