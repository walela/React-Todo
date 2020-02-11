import React, { Component } from "react"
import styled from "styled-components"

const StyledTodo = styled.div``
class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: props.todo
    }
  }
  render() {
    return <StyledTodo></StyledTodo>
  }
}

export { Todo }
