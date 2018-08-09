// Code ControlledInput Component Here

export default class ControlledInput extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
  this.setStaet({
    firstName: event.target.value
  })
}

handleLastNameChange = event => {
  this.setStaet({
    lastName: event.target.value
  })
}

  render() {
    return (
      <form>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)}value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)}value={this.state.lastName} />
      </form>
    )
  }
}
