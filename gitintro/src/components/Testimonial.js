import Card from "./Card.js"
function Testimonial({data}){
    
    return(
        <div className="mt-10 p-10 transition-all duration-200 flex justify-center items-center flex-col max-w-[1080px] h-content w-[55vw] md:[700px] bg-white hover:shadow-2xl">
        <Card data={data}></Card>
        </div>
    );
}
export default Testimonial;