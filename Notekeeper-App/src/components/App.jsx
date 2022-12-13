import React from "react";
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Note from './Note.jsx'
import notes from "./notes.js"

export default function App () {
    return (
        <div>
        <Header />
        <Footer />
        <Note title={notes[0].title} content={notes[0].content}/> 
        <Note title={notes[1].title} content={notes[1].content}/> 
        <Note title={notes[2].title} content={notes[2].content}/> 
        <Note title={notes[3].title} content={notes[3].content}/> 



        </div>
    )
}


