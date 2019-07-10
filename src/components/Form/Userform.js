import React from "react"
import FormUserDetails from "./FormUserDetails"
import Success from "./Success"

class UserForm extends React.Component {
  state = {
    step: 1,
    name: "",
    email: "",
    persons: 0,
    room: 0,
    from: "",
    to: "",
    total: "",
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
  }

  render() {
    const { step } = this.state
    const { name, email, persons, room, from, to, total } = this.state
    const values = { name, email, persons, room, from, to, total }
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return <Success />
    }
  }
}

export default UserForm
