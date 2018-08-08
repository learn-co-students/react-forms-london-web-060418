import React, { Component } from 'react';

class ControlledInput extends Component {

  state = {
    firstName: "John",
    lastName: "Henry",
    happy: true
  }

  handleNameChange = (event) => {
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value
      //name, i.e., "firstName": input value
    })
  }

  handleChange = (event) => {
    console.log(this.state)
    this.setState({
      happy: event.target.checked
    })
  }

  render() {
    return (
      <div>
        <h2>Hello, {this.state.firstName} {(this.state.happy) ? "!" : ":(" } </h2>
        <form>
          <input type="text" name="firstName" onChange={event => this.handleNameChange(event)}
            value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleNameChange(event)}
            value={this.state.lastName} />
          <label>
          Happy?
            <input type="checkbox" onChange={this.handleChange} checked={this.state.happy}/>
          </label>
        </form>
      </div>
    )
  }

}

export default ControlledInput
