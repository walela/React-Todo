import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTodo = styled.div`
  margin-top: 12px;
  background-color: lightsteelblue;
  width: 30vw;
  padding: 0.8rem;
  font-family: 'Rubik';
  font-size: 1.3rem;
`;
class Todo extends Component {
  handleClick = id => {
    this.props.toggleComplete(id);
  };
  render() {
    console.log('todo', this.props);
    return (
      <StyledTodo
        onClick={e => {
          e.target.classList.toggle('completed');
          this.handleClick(this.props.id);
        }}
      >
        {this.props.text}
      </StyledTodo>
    );
  }
}

export { Todo };
