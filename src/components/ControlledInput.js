// Code ControlledInput Component Here
import React, {Component} from 'react'

export default class ControlledInput extends Component {
    constructor() {
      super();
      this.state = {
        inputText: ""
      }; //
    } // end of constructor

    handleInputChange(event) {
      console.log(event.target.name);
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    render() {
      return(
        <input type="text" name="inputText" onChange={(event) => this.handleInputChange(event)} value={this.state.inputText} />
      )
    }
} //eoc
