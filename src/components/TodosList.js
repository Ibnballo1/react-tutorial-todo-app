import React from 'react';
import TodoItem from './TodoItem';

export default class TodosList extends React.Component {
  render() {
    // console.log(this.props.handleDeleteProps);
    return (
      <div>
        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              handleDeleteProps={this.props.handleDeleteProps}
            />
          ))}
        </ul>
      </div>
    )
  }
}
