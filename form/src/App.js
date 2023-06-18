import "./App.css";
import { useState } from "react";

function App() {

  const[formdata,setformdata]=
  useState({fname:"",lname:"",email:"",country:"India",
  address:"",city:"",state:"",pincode:"",isvisible1:false,
  isvisible2:false,isvisible3:false,pushNotifications:""
})
//  console.log(formdata);
  function changehandler(event){
    const {name,value,checked,type}=event.target;

    setformdata(prev=>{
      return{...prev,
      [name]:type==="checkbox"?checked:value
    }
    });
  }

 function submithandler(event){
event.preventDefault();
console.log("ok you submit it");
console.log(formdata);
  }
 
  return (
    <div className="flex flex-col justify-center items-center mt-5 pt-5">  
     <h1 className="font-bold text-lg">Form with the help of React HOOKS!!</h1><br></br>
   <div className=" h-2 rounded-md border-b-orange-500 border-8 w-[55rem]"></div>
   <br></br>
   <form onSubmit={submithandler}>
    <label className=" text-lg font-bold">First Name</label><br></br>
    <input  type="text"
    name='fname'
    placeholder="Firstname"
    onChange={changehandler}
    value={formdata.fname}
      className="border-2 border-t-pink-600 border-b-blue-400 w-[45rem] h-8"  >
      
    </input><br></br>

    <br></br>
    <label className=" text-lg font-bold" >Last Name</label><br></br>
    <input  type="text"
    name='lname'
      placeholder="Lastname"
      onChange={changehandler} 
      value={formdata.lname}
      className="border-2 border-b-pink-600 border-t-blue-400 w-[45rem] h-8"  >
      
    </input><br></br>
    <br></br>
    <label className=" text-lg font-bold" >Email </label><br></br>
    <input  type="email"
      placeholder="Email" 
      name='email'
      value={formdata.email}
    
      onChange={changehandler}
   className="border-2 border-t-pink-600 border-b-blue-400 w-[45rem] h-8"  >
      
    </input><br></br>
    <br></br>


    <label className=" text-lg font-bold" >Country </label><br></br>
    <select name="country"
     onChange={changehandler} 
     value={formdata.country} 
     className="border-2 border-b-pink-600 border-t-blue-400 w-[10rem] h-8" >
      <option>India</option>
      <option>U.K</option>
      <option>NewZealand</option>
      <option>Dubai</option>
    </select>
    <br></br>
    <br></br>
    
    <label className=" text-lg font-bold" >Address </label><br></br>
    <input  type="text"
      placeholder="Address" 
      name="address"
      onChange={changehandler}
      value={formdata.address}
     className="border-2 border-t-pink-600 border-blue-400 w-[45rem] h-8"  >
      
    </input><br></br>
    <br></br>
    <label className=" text-lg font-bold" >City </label><br></br>
    <input  type="text"
    name='city'
      placeholder="City" 
      onChange={changehandler}
      value={formdata.city}
       className="border-2 border-b-pink-600 border-t-blue-400 w-[45rem] h-8"  >
      
    </input><br></br>
    <br></br>
    <label className=" text-lg font-bold" >State </label><br></br>
    <input  type="text"
      placeholder="State" 
      name='state'
      onChange={changehandler}
      value={formdata.state}
      className="border-2 border-t-pink-600 border-blue-400 w-[45rem] h-8"  >
      
    </input><br></br>
    <br></br>
    <label className=" text-lg font-bold" >PIN CODE </label><br></br>
    
    <input  type="text"
      placeholder="Pincode" 
      name='pincode'
      onChange={changehandler}
      value={formdata.pincode}
       className="border-2 border-b-pink-600 border-t-blue-400 w-[45rem] h-8"  >
      
    </input><br></br>
    <br></br>

    <fieldset >
    <legend>By Email</legend>
    <br></br>
  <div className="flex mt-3">
    <input   
          type="checkbox"
          onChange={changehandler}
          name="isvisible1"
          id="comm"
          checked={formdata.isvisible1}
         className=" w-6 h-6 "  >
    </input>
    <div className="ml-5">
        <label htmlFor="comm">Comments</label>
        <p>Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>
      <br></br>

    
    <div className="flex ">
    <input   
          type="checkbox"
          onChange={changehandler}
          name="isvisible2"
          id="com"
          checked={formdata.isvisible2}
          className=" w-6 h-6"  >
    </input>
    <div className="ml-5">
        <label htmlFor="com">Candidates</label>
        <p>Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>
      <br></br>

    
    <div className="flex">
        <input   
          type="checkbox"
          onChange={changehandler}
          name="isvisible3"
          id="comme"
          checked={formdata.isvisible3}
          className=" w-6 h-6" >
    </input>
    <div className="ml-5 ">
        <label htmlFor="comme"> Offers</label>
        <p>Get notified when someones posts a comment on a posting.</p>
      </div>
      </div>
      <br></br><br></br>
    </fieldset>

    <br></br>
    <br></br>
    <fieldset>
      <legend>Push Notifications</legend>
      <p>These are delivered via SMS to your mobile phone.</p>

      <input
        type="radio"
        id="pushEverything"
        name="pushNotifications"
        value="Everything"
        onChange={changehandler}
        checked={formdata.pushNotifications==="Everything"}
        className="mb-5 w-4 h-4 mr-5"
      />

      <label htmlFor="pushEverything">  Everything</label>

      <br/>
      <input
        type="radio"
        id="pushEmail"
        name="pushNotifications"
        value="Same as email"
        onChange={changehandler}
        checked={formdata.pushNotifications==="Same as email"}
        className="mb-5 w-4 h-4 mr-5"
      />

      <label htmlFor="pushEmail">  Same as email</label>

      <br/>
      <input
        type="radio"
        id="pushNothing"
        name="pushNotifications"
        value="No Push Notifications"
        onChange={changehandler}
        checked={formdata.pushNotifications==="No Push Notifications"}
        className="mb-5 w-4 h-4 mr-5"
      />

      <label htmlFor="pushNothing">No Push Notifications</label>

    </fieldset>




   <button
   className="bg-blue-500 text-white font-bold rounded py-2 px-4"
   >Save</button>
   </form>
   </div>

  );
}

export default App;
