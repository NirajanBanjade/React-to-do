
import './App.css';
import './new.css';
import Header from "./Component/Header";
import {Footer} from './Component/Footer';
import Todos from "./Component/Todos";
import React, { useState } from 'react';

function App() {

const ondelete =(todo)=>{
    console.log("I am deleted",todo);

    setodos(todos.filter((task)=>{
        return task!==todo;
    }));

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
      descrip: " After doing all of it, might be tired. So, Just sleep"
    }

  ])

  return (
    <> 
      <Header title="Nirajan's Todos" />
      <Todos todos={todos} ondelete={ondelete}/>
      <Footer/>
    </>
  );
}
export default App;
