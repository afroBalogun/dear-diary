import {React, useState} from "react";


export default function Piece(props){

    const [isSelected, setIsSelected] = useState(false)
    const content = [props.data.piece_content]



    console.log(content)

    function showContent(){
        setIsSelected(true)
    }

    function hideContent(){
        setIsSelected(false)
    }
 

    return(
        <article className="piece">
            <div className="piece_img">
                <img src={`images/${props.data.piece_img}`} alt="" />
            </div>
            
            <div className="piece_about" onClick={showContent}>
                <div className="piece__title"> 
                    <h2>{props.data.piece_title}</h2>
                </div>
                <div className="piece_desc">
                    <p>{props.data.piece_description}</p> 
                </div>
            </div>

            {isSelected && (
                 <div className="piece_content">
                     <img src="images/aside-note2.png" alt="" className="aside-note" />
                     <img 
                        src="images/close_icon.png" 
                        alt=""  
                        className="close"
                        onClick={hideContent}
                        />
                     <h2>{props.data.piece_title}</h2>
                     {content.map((item, index) => (
                         <p key={index}>{item}</p>
                     ))}
                 </div>
            )}
            
        </article>
    )
}