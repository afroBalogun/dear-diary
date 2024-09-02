import Piece from "./Piece"
import oeuvreData from "../oeuvre-data";

export default function Oeuvre(){
    const Datas = oeuvreData.map( data => {
        return(
                 <Piece 
                    key={data.id}
                    data ={data}
                 />
            )
        })


    return(
        <div className="oeuvre" id="oeuvre">
            <h2>Oeuvre</h2>
            {Datas}
        </div>
    )
}