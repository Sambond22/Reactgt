import {FcLike ,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify"


const Card=({course,likecourses,setlikecourses})=>{
    
   
    // copy kiya clickhandler fun
    function clickhandler() {
        //logic
        if(likecourses.includes(course.id)) {
            //pehle se like hua pada tha
            setlikecourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
            toast.warning("like removed");
        }
        else {
            //pehle se like nahi hai ye course
            //insert karna h ye course liked courses me 
            if(likecourses.length === 0 ) {
                setlikecourses([course.id]);
            }
            else {
                //non-empty pehle se
                setlikecourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="bg-bgDark opacity-80 overflow-hidden flex-col flex-wrap w-[300px] rounded-md">
           <div className="relative">
            <img src={course.image.url} alt="card img" className=""></img>
                <div className="w-[35px] h-[35px] bg-white rounded-full absolute
                right-1 bottom-3 grid place-items-center">
                    <button onClick={clickhandler}>
                      { likecourses.includes(course.id)? (<FcLike fontSize="1.8rem"></FcLike>):
                      (<FcLikePlaceholder fontSize="1.85rem"></FcLikePlaceholder>)
                       
                      } 
                    </button>
                </div>
            </div>

            <div className="p-4 ">
          
                <p className="text-white text-lg leading-6 font-bold ">{course.title}</p>
                <p className="text-white mt-2">{course.description.length>100?
                (course.description.substr(0,100)+`...`):(course.description)}
</p>
            </div>
        </div>
    );
}
export default Card;