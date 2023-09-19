import React from "react";
import { useState } from "react";

const InputNote = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
    body: "",
  });

  function handleChange(e) {
    let note = e.target.value;
    let name = e.target.name
    setInputText((prev)=>{
        if (name === 'title'){
            return {
                title: note,
                body: prev.body
            } 
        } else {
            return {
                title: prev.title,
                body: note
            } 
        }
    })
  }

  return (
    <div className="">
      <form onSubmit={e=>e.preventDefault()} action="" className=" form-body">
        <input
          onChange={handleChange}
          value={inputText.title}
          type="text"
          className="note-title"
          placeholder="Enter note title"
          name="title"
          
        />
        <textarea
          onChange={handleChange}
          value={inputText.body}
          type="textarea"
          className="note-body"
          placeholder="Enter note body"
          
        />
        <button onClick={()=>{
            props.add(inputText,setInputText)
            
        }} className="add-btn">add</button>
      </form>
    </div>
  );
};

export default InputNote;
