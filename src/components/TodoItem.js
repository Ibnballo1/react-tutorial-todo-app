import React from 'react';

// Function Component Version
const TodoItem = (props) => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.completed}
      onChange={() => props.handleChangeProps(props.todo.id)}
    />
    {props.todo.title}
  </li>
)

export default TodoItem;

// Class Component Version
// export default class TodoItem extends React.Component {
//   render() {
//     console.log(this.props.handleChangeProps);
//     return (
//       <li>
//         <input
//           type="checkbox"
//           checked={this.props.todo.completed}
//           onChange={() => console.log(this.props.handleChangeProps())}
//         />
//         {this.props.todo.title}
//       </li>
//     )
//   }
// }
