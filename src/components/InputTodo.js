import React, { Component } from 'react'

export default class InputTodo extends Component {
  state = {
    title: ""
  }

  onChange = (e) => {
    // console.log("Changed", e.target);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.title);
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.onChange}
          placeholder="Add Todo..."
          name="title"
          value={this.state.title}
        />
        <button>Submit</button>
      </form>
    )
  }
}
