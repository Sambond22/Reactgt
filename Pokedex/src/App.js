import "./App.css";
import Cards from "./components/Cards";
import useGif from "./hook/useGif";
import imk from "./img/pp.jpeg"
import images from "./img/bb.png"




       function App() {
        const stylemy={backgroundImage:`url(${imk})`,
      height:'100vh',width:'100vw',backgroundSize:'cover',}
        const {pokemon}=useGif(0);
        const results=pokemon.results;
        console.log(results);
        let ind=1;
  return (

<div  className="  w-full overflow-x-hidden hero-pattern bg-no-repeat h-full" style={stylemy}>

    <div>
    <h1 className="text-8xl translate-x-[34rem] mt-20
     font-extrabold gap-[85px] text-white flex">P<span><img src={images} alt="O"className="z-[66] absolute left-16 -top-20 w-25 h-34"></img></span> kedex</h1>
    <div className="h-2 w-[30rem] rounded-md m-auto bg-green-600 mb-20" ></div>
   <div className=" flex flex-wrap justify-center items-center ">
   {
    results.map((pp,index)=>{
     return <Cards key={index} ind={ind++} pp={pp}></Cards>
    })
   }
   </div>  
   </div>
   </div>

  );
}

export default App;
