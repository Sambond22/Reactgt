// import React from "react";
const Filter=({filterdata,setcatergory,category})=>{

    function filterhandler(title)
    {
        
    setcatergory(title);
    }
    return(
        <div className="flex w-11/12 flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center ">
        {filterdata.map((data) => {
            return(
            <button key={data.id}  className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === data.title ? 
            "bg-opacity-60 border-white" :
            "bg-opacity-40 border-transparent"}
            `}
                  onClick={()=>filterhandler(data.title)}>
            {data.title}
            
            </button>
            )
    })}
    </div>

    )
}
export default Filter;