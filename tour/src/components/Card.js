import { useState } from "react";


function Card({id, image,info,price,name, pppremovetour}){
//    not a correct way to use object value direct object key write instead of props
    // const id=props.id;
    // const image=props.image;
    // const info=props.info;
    // const price=props.price;
    // const name=props.name;


  


    const [readmore,setreadmore]=useState(false);
    const description=  readmore?info:`${info.substring(0,200)}....`;

    function Readmore_Handler(){
        setreadmore(!readmore);
    }
    return (
        <div className="card">
            <img src={image} className="image" alt="card_tourimg"></img>
            <div className="tour-info"> 
            <div className="tour-details">
                <h4 className="tour-price">₹ {price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
                    {description}
                    <span className="read-more" onClick={Readmore_Handler}>
                    {readmore ? `Show Less`: `Read More`}
                       {/* if u use below method then span tag directly print it
                       if(readmore){
                            `showless`
                        }
                        else{
                            `Read More`
                        } */}
                    </span>

            </div>
            </div>
            <button className="btn-red" onClick={()=>pppremovetour(id)}>NOT INTRESTED</button>


        </div>
    );
}
export default Card;