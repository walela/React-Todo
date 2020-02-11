import React, { Component } from "react"
import styled from "styled-components"

const InputField = styled.input`
  width: 30vw;
  padding: 0.8rem;
  border: 1px solid grey;
  border-radius: 8px;
  font-size: 1.55rem;
  font-family: "Rubik";
`

const StyledButton = styled.button`
  font-family: "Rubik";
  margin-left: 12px;
  min-height: 2.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3125rem;
  line-height: 1.25;
  font-weight: 600;
  padding: 0.8rem 1.5rem;
  color: white;
  border-color: #e44232;
  background-color: #e44232;
`
class TodoForm extends Component {
  handleClear = e => {
    const todos = document.querySelectorAll(".todos .completed")
    new Array(todos.forEach(todo => todo.remove()))
  }
  render() {
    return (
      <div>
        <InputField
          placeholder="Add Todo"
          value={this.props.text}
          onChange={this.props.onChange}
        />
        <StyledButton onClick={this.props.onSubmit}>Add Todo</StyledButton>
        <StyledButton onClick={this.handleClear}>Clear Completed</StyledButton>
      </div>
    )
  }
}

export { TodoForm }
