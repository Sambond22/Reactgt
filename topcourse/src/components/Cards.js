import { useState } from 'react';
import Card from './Card'

const Cards = ({courses,category })=>{
   

    const [likecourses,setlikecourses]=useState([]);   


    let allcources=[];
   
   const getcourses=()=>{
    if(category==="All")
    {
        Object.values(courses).forEach((coursecategory)=>{
            // console.log(coursecategory) 
            coursecategory.forEach((course)=>{
                //  console.log(course);
                allcources.push(course);
            })
    })
    return allcources;
    }
    else{
        return courses[category];
    }
   

}
  
    
    return (
        <div className=' flex flex-wrap justify-center gap-4 mb-4'>
            {getcourses().map((course)=>{
                return(
                    <Card key={course.id} course={course} likecourses={likecourses} 
                    setlikecourses={setlikecourses}></Card>
                );
            })}
    
            
            
        </div>
    );
}
export default Cards;