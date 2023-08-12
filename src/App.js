
import './App.css';
import './new.css';
import Header from "./Component/Header";
import {Footer} from './Component/Footer';
import Todos from "./Component/Todos";
import React, { useState } from 'react';
import { Add } from './Component/Add';

function App() {

const ondelete =(todo)=>{
    console.log("I am deleted",todo);

    setodos(todos.filter((task)=>{
        return task!==todo;
    }));

}
const addtodo=(title,descrip)=>{
    console.log("A new todo has been added ", title,descrip);
    let Num = todos[todos.length-1].Num+1;
    const mytodo={
      Num:Num,
      title:title,
      descrip:descrip,
      
    }
    setodos([...todos,mytodo]);
    console.log(mytodo);
}

  const [todos,setodos] =useState([
    {
      Num : 1,
      title:"Buy Groceries for the week",
      descrip: " Need to buy kitchen items and all"

    },
    {
      Num : 2,
      title: "Make a project in python",
      descrip: "Need to make a python project using Pygame and Tkinter"
    },
    {
      Num : 3,
      title: "Go on a candle light dinner",
      descrip: "Plan to take her on a dinner"
    },
    {
      Num : 4,
      title: "Go to play football with Messi and Ronaldo",
      descrip: "Plan to play a football match with international players"
    },
    {
      Num : 5,
      title: "Just Sleep",
      descrip: " After doing all of it, I might get tired. So, Just sleep!!!!"
    }

  ])

  return (
    <> 
      <Header title="Nirajan's Todos" />
      <Add  addtodo={addtodo}/>
      <Todos todos={todos} ondelete={ondelete}/>
       
       <Footer/>
    </>
  );
}
export default App;
