
import Card from "./Card";

function Tour({ptour, premovetour}){
    return(
        <div className='container'>
        <div>
            <h2 className='title'>
                Plan Your Weekends.....
            </h2>
        </div>
            
            <div className='cards'>
            {
                ptour.map((pp) => {
                    return <Card key={pp.id}{...pp} pppremovetour={premovetour}></Card>
                })

            }
            </div>
        </div>
    );
}
export default Tour;