import React from "react";
import data from "./data";
import Tour from './components/Tour'

import { useState } from "react";




const App = () => {



  const [tour,settour]=useState(data);

  function removehandler(id){
   const newtour=tour.filter(pp=>pp.id!==id);
    settour(newtour);
  }
    if(tour.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => settour(data)}>
            Refresh
          </button>
        </div>
    );
  }
  return (
    <div className="App">
        <Tour ptour={tour} premovetour={removehandler}></Tour>
    </div>
  );
};

export default App;
