import React, { Component } from "react"
import styled from "styled-components"

const InputField = styled.input`
  width: 30vw;
  padding: 1.2rem;
`
class TodoForm extends Component {
  render() {
    return (
      <form>
        <InputField placeholder="Add Todo" />
      </form>
    )
  }
}

export { TodoForm }
