import React, { Component } from "react"
import styled from "styled-components"

const StyledTodo = styled.div`
  margin-top: 12px;
  background-color: lightsteelblue;
  width: 30vw;
  padding: 0.8rem;
  font-family: "Rubik";
  font-size: 1.3rem;
`
class Todo extends Component {
  handleClick = e => {
    e.target.classList.toggle("completed")
    console.log(e.target)
  }
  render() {
    return (
      <StyledTodo onClick={this.handleClick}>
        {this.props.text}
      </StyledTodo>
    )
  }
}

export { Todo }
