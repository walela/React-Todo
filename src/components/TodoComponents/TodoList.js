// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react"
import { Todo } from "./Todo"

class TodoList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.todos.map(todo => {
          return (
            <Todo
              text={todo.text}
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              toggleComplete={this.props.toggleComplete}
            />
          )
        })}
      </div>
    )
  }
}

export { TodoList }
