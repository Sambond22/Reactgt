import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment,decrement } from '../redux/slices/Counterslice';
function Countt() {

    const count=useSelector((state)=>state.counter.value);
const dispatch=useDispatch();
    return (
    <div>
        <button onClick={()=>{
            dispatch(  increment())
        }}>Increment</button>
        <br></br><br></br>
        <div>{count}</div>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </div>
  )
}

export default Countt