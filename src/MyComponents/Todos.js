import React from 'react'
import {Todo} from "./Todo";

export default function Todos(props) {
  return (
    <div className='container'>
        <h3 className=''>TechStack</h3>
        {props.todos.length==0 ? "No Todos to Display":

        props.todos.map((data)=>{
            return <Todo todo = {data} key={data.sno} onDelete={props.onDelete}/>

        })}

    </div>
  )
}
