import React from "react"
import './App.css';
import { useState } from "react";

function Square(){
  const [value,setValue]=useState(null);
  function handleClick (){
    setValue('X')
  }
  return(<div>
    <button className="square" onClick={handleClick}>{value}</button>
  </div>)
}

export default function  Board (){
  const[squares,setSquares]= useState(Array(9).fill(null));
  return (<div>
    <div className="board-row">
    <Square />
    <Square />
    <Square />
    </div>
    <div className="board-row">
    <Square />
    <Square />
    <Square />
    </div>
    <div className="board-row">
    <Square />
    <Square />
    <Square />
    </div>
    
    
  </div>)
}
