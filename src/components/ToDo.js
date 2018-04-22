import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
<<<<<<< HEAD
      <li> A todo will go here </li>
=======
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } />
        <span>{ this.props.description }</span>
      </li>
>>>>>>> state-and-props
    );
  }
}

export default ToDo;
