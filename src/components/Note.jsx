import React from "react";


export default function Note (props) {
    return (
 <div className="note">
    <h1 className="note-h1">{props.title}</h1>
    <p className="note-p">{props.content}</p>
 </div>
    )
}