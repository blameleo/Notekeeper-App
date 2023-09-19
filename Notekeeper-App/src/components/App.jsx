import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import InputNote from "./InputNote.js";
import { useState } from "react";
import Note from "./Note.jsx";



export default function App() {

  const [lists,setLists] = useState([])

  function add(inputText,setInputText){
setLists((prev)=>{
  return [...prev,inputText]
})
setInputText({
  title: "",
  body: ""
})
  }

  function handleDel(id) {
    setLists((prev)=>{
      return prev.filter((item,index)=>{
        return index !== id
      })
    })
  }

  return (
    <div>
      
      <Header />
      <InputNote add={add} />

      {lists.map((item,index)=>{
        return  <Note id={index} key={index} del={handleDel} title={item.title} body={item.body}/>
      })}

      <Footer />
    </div>
  );
}
