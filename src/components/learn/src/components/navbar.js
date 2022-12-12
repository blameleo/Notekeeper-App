import React from "react";

export default function navbar() {
   let date = new Date();
  let  time = date.getHours()
   let greeting;
   const heading = {
    color: 'yellow'
   }
   if (time < 12){
    heading.color = 'red'
     greeting = 'good morning'
   } else {
    heading.color = 'blue'

    greeting = 'good evening'
   }
    return (
  <h1 style={heading}> {greeting}</h1>
    );
}

