import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todoList: [
        {
          id: 0,
          input: "Write my ToDo list!"
        }
      ],
      nextId: 1
    }

    // Binding to avoid undefined, due to this keyword.
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  // Add todo, by user input.
  addTodo(todoInput){
    /*
     * Create variables for state properties, because can't change state directly.
     * Pass values to new variables and after changes, update state with setState();
     */
    let todoList = this.state.todoList;
    let nextId = this.state.nextId + 1;

    todoList.push({
      id: this.state.nextId,
      input: todoInput
    });
    this.setState({
      todoList: todoList,
      nextId: nextId
    });
  }

  // Remove todo, based on id.
  removeTodo(id){
    this.setState({
      todoList: this.state.todoList.filter((todo) => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="toDoListWrapper">
          <Header />
          <TodoInput todoInput="" addTodo={this.addTodo}/>
          <div className="list">
            <ul>
              {
                this.state.todoList.map((todo) => <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>)
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
