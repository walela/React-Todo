import React, { Component } from "react"
import styled from "styled-components"

const InputField = styled.input`
  width: 30vw;
  padding: 1.2rem;
  border: 1px solid grey;
  border-radius: 8px;
  font-size: 1.5rem;
  font-family: "Rubik";
`

const StyledButton = styled.button`
  font-family: "Rubik";
  font-size: 1.8rem;
  margin-left: 12px;
  border-radius: 2px;
  box-shadow: 2px 2px 5px grey;
  margin-right: 12px;
  padding: 5px;
  background-color: ${props => props.bgColor || "lightgreen"};
`
class TodoForm extends Component {
  render() {
    return (
      <div>
        <InputField placeholder="Add Todo" />
        <StyledButton bgColor="lightblue">Add Todo</StyledButton>
        <StyledButton>Clear Completed</StyledButton>
      </div>
    )
  }
}

export { TodoForm }
