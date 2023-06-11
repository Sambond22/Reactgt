import './Spinner.css'
const Spinner=()=>{
    return(
        <div className='flex flex-col  items-center gap-6 '>
<div className="custom-loader">              
            </div>
            <p className='text-bgDark text-lg font-semibold'>Loading....</p>
        </div>
    );
}
export default Spinner;