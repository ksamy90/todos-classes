import React, { Component } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: []
        }
    }
    create = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }
  render() {
    const todos = this.state.todos.map(todo => {
        return <Todo task={todo.task} />
    })
    return (
      <div>
        <TodoForm createTodo={this.create} />
        {todos}
      </div>
    )
  }
}

export default TodoList
