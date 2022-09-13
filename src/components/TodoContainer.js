import React from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  // Handle Change
  handleChange = (id) => {
    // const { todos } = this.state;
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    }));
  };

  // Handle Delete
  handleDelete = (id) => {
    // console.log('Deleted', id);
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
      })]
    })
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    };
    this.setState({
      todos:[
        ...this.state.todos,
        newTodo
      ]
    })
  }

  render() {
    // console.log(this.addTodoItem);
    return (
      <section>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          handleDeleteProps={this.handleDelete}
        />
      </section>
    )
  }
}
export default TodoContainer