import React, { Component } from 'react';

class FormGoog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      input: event.target.value
    }, () => console.log("State: ", this.state.input))
  }

  clearInputValue = () => {
    this.setState({input: ''})
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <a href={`https://www.google.co.uk/search?q=react+${this.state.input}`}
          onClick={() => setTimeout(this.clearInputValue, 10)}
          target="_blank" >TAKE ME THERE</a>
      </div>
    );
  }
  //google searches "react" + input value, clears the input field on redirect
}

export default FormGoog;
