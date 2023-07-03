import {createSlice} from "@reduxjs/toolkit"

const initialState={value:0,}
 
export const Counterslice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement: (state)=>{
            state.value-=1;
        }
    }

})
export const {increment,decrement}=Counterslice.actions;
export default Counterslice.reducer;