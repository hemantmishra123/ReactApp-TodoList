import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"; 
import Todos from "./MyComponents/Todos";
import AddData from "./MyComponents/AddData";
import {Footer} from "./MyComponents/Footer";
import React ,{useState} from 'react';

function App() {
  const onDelete = (todo) =>{
      console.log("I am on Delete todo",todo)
      //JavaScript Higher Order Function & Implementation.

      setTodos(todos.filter((e)=>{
        return e!==todo
      }))
  }
  
  const addTodo = (Name,Technology,Language) =>{
     console.log("I am Adding this todo")
     if(todos.length==0)
     {
       var sno=1;
     }
     else
     {
      var sno  = todos[todos.length-1].sno+1;
     }
     const newTodo = {
      sno:sno,
      name:Name,
      technology:Technology,
      language:Language
     }
     setTodos([...todos,newTodo]);


  }

  const [todos, setTodos]= useState([])
return (
      <>
       <Header title ="ChatCode" searchBar={true}/>
       <AddData addTodo ={addTodo}/>
       <Todos todos = {todos}    onDelete={onDelete}/>
       <Footer/>
      </>
  );
}

export default App;