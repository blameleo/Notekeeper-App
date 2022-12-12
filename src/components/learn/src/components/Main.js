import React from "react";
import {add,multiply,subtract,divide} from './calculator.js'

export default function Main() {
  return (
    <div>
      <ul>
        <li>{add(1,9) }</li>
        <li>{multiply(2,3)}</li>
         <li>{subtract(7,2)}</li>
         <li>{divide(5,2)}</li>

      </ul>
      <p>lorem ipsum calabae</p>
    </div>
  );
}