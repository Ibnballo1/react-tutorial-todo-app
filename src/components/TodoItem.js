import React from 'react';
import styles from './TodoItem.module.css';

// Function Component Version
const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { id, title, completed } = props.todo;
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={completed}
        className={styles.checkbox}
        onChange={() => props.handleChangeProps(id)}
      />
      {/* {props.todo.title} */}
      <button
        type="button"
        onClick={() => props.handleDeleteProps(id)}
      >
        Delete
      </button>
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
    </li>
  )
}

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
