import React from 'react';

// Function Component Version
const TodoItem = (props) => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.completed}
      onChange={() => console.log("Changed")}
    />
    {props.todo.title}
  </li>
)

export default TodoItem;

// Class Component Version
// export default class TodoItem extends React.Component {
//   render() {
//     // console.log(this.props.todo);
//     return (
//       <div>
//         <li>{this.props.todo.title}</li>
//       </div>
//     )
//   }
// }
