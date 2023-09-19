import React from "react";


export default function Note (props) {


    return (
<div className="note" >
        <h1 className="note-h1">{props.title}</h1>
        <p className="note-p">{props.body}</p>
       <button className="add-btn" onClick={()=>{
         props.del(props.id)
       }}>delete</button>
     </div>
    )
}