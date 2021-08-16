//import logo from './logo.svg';
//import './App.css';
import {useState} from "react";
import Card from "./card";

function App() {
//using usestate hook we take initial state as an argument and return array of two entries
  const[colors,setColors]=useState([
    {id:1,value:"yellow",count:0},
    {id:2,value:"green",count:0},
    {id:3,value:"blue",count:0}
  ])

  const resetHandler=()=>{
    colors.map((obj)=>{
      obj.count=0;
        return obj;
      
    })
    setColors([...colors])
  }


  const incrementHandler=(id)=>{
    const countindex=colors.findIndex((obj)=>obj.id==id);
    colors[countindex].count++;
    setColors([...colors]);
  }



  return (
    <div className="container">
      <button className="reset-button" onClick={resetHandler}>RESET</button>
      <div className="content">
        {
          colors.map((obj)=>{
return <Card data={obj.id} obj={obj} clickHandler={incrementHandler}></Card>
          })
        }
      </div>
     
    </div>
  );
}

export default App;
