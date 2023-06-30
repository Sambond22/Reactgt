import React from 'react'
import Card from './Card.js';
function Cards({ind,pp}) {
    // let name=pp.name;
    // let url=pp.url;
    // let index=pp.index;
    // console.log(ind);
    // console.log(name);
  // const {datafetch,pokemon}=useGif();
  // {datafetch(1)}


  return (
    <div >
    <div >
   <Card name={pp.name} ind={ind} url={pp.url}></Card>
   </div>
    </div>

  )
}

export default Cards