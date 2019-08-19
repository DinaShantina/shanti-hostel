import React from "react";
import FormUserDetails from "./FormUserDetails";
import Success from "./Success";
import First from "../../img/1.jpg";
import Second from "../../img/2.jpg";
import Third from "../../img/3.jpg";
import Fourth from "../../img/4.jpg";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

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
    roomName: "",
    totalError: "",
    isEnable: false,
  };

  async nextStep() {
    // e.preventDefault();
    const { step } = this.state;

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    });
    this.setState({
      step: step + 1,
    });
  }
  handleChange = e => {
    if (e.target.name === "room") {
      this.setState({
        roomName: e.target.options[e.target.selectedIndex].text,
      });
    }
    // e.persist()
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (
          this.state.name &&
          this.state.email &&
          this.state.room &&
          this.state.persons &&
          this.state.to &&
          this.state.from
        ) {
          this.setState({
            isEnable: true,
          });
          let oneDay = 1000 * 60 * 60 * 24;
          let date1 = new Date(this.state.to).getTime();
          let date2 = new Date(this.state.from).getTime();
          let date = date1 - date2;
          let finalDate = Math.round(date / oneDay);
          let otherName = this.state.name;
          let otherEmail = this.state.email;
          if (otherName.length && otherEmail.length > 0) {
            this.setState({
              total: this.state.room * this.state.persons * finalDate + `€`,

              // displayImg: images.find(img=>{img.id === mapImg[e.target.value]})// find src
            });
          }
        } else {
          this.setState({
            isEnable: false,
          });
        }
      }
    );
  };

  render() {
    const { step } = this.state;
    const {
      name,
      email,
      persons,
      room,
      from,
      to,
      total,
      totalError,
    } = this.state;

    const values = {
      name,
      email,
      persons,
      room,
      from,
      to,
      total,
      totalError,
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={() => this.nextStep()}
            handleChange={this.handleChange}
            values={values}
            isEnabled={this.state.isEnable}
          />
        );
      case 2:
        return <Success />;
      default:
    }
  }
}

export default UserForm;
