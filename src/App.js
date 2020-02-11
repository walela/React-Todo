import React from "react"
import uuid from "uuid"
import styled from "styled-components"
import { TodoForm } from "./components/TodoComponents/TodoForm"
import { TodoList } from "./components/TodoComponents/TodoList"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: [],
      text: ""
    }
  }
  handleInputChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.text.length) {
      return
    }
    const newTodo = {
      text: this.state.text,
      id: uuid()
    }
    this.setState(prevState => ({
      todos: prevState.todos.concat(newTodo),
      text: ""
    }))
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          text={this.state.text}
          onChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App
