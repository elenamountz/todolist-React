import React, { Component} from 'react';
import './TodoInput.css';

export default class TodoInput extends Component{
  constructor(props){
    super(props);

    this.state = {value: ""};

    // Binding to avoid undefined, due to this keyword.
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  // Handling text from user input.
  handleChange(event){
    this.setState({value: event.target.value});
  }

  // Adding a new todo.
  addTodo(todo){
    // Ensure the todo text isn't empty
    if(todo.length > 0){
      this.props.addTodo(todo);
      this.setState({value: ""});
    }
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button className="btn addButton" onClick={() => this.addTodo(this.state.value)}><b>Add</b></button>
      </div>
    )
  };
}
