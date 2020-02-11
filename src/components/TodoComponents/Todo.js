import React, { Component } from "react"
import styled from "styled-components"

const StyledTodo = styled.div`
  font-family: "Rubik";
  padding: 12px;
`
class Todo extends Component {
  render() {
    return <StyledTodo>{this.props.text}</StyledTodo>
  }
}

export { Todo }
