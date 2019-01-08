import React, { Component } from 'react';
import './TodoItem.css';

export default class TodoItem extends Component{
   removeTodo(id){
     this.props.removeTodo(id);
   }

   render(){
     return(
       <div className="todoItemWrapper">
        <button className="removeButton" onClick={(event) => this.removeTodo(this.props.id)}><b>X</b></button>{this.props.todo.input}
       </div>
     )
   };
}
