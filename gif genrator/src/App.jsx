// custom hook use in this project
import Random from "./components/Random"
import Tag from "./components/Tag"
export default function App() {
  return(
    <div className="flex flex-col w-full h-screen background relative items-center  overflow-x-hidden">
      <h1 className="bg-white  w-[95%] text-center mt-[40px]
        px-10 py-2 text-3xl rounded-2xl font-bold ">...Random GIF...</h1>
      <div className="flex w-full items-center flex-col">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
