import React from "react";
import FormUserDetails from "./FormUserDetails";
import Success from "./Success";

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
    displayImg: "",
    info: "All the fields are required",
  };

  async nextStep() {
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
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        let img1 = require("../../img/1.jpg");
        let img2 = require("../../img/2.jpg");
        let img3 = require("../../img/3.jpg");
        let img4 = require("../../img/4.jpg");

        if (this.state.room === "9") {
          this.setState({
            displayImg: img1,
          });
        } else if (this.state.room === "10") {
          this.setState({
            displayImg: img2,
          });
        } else if (this.state.room === "11") {
          this.setState({
            displayImg: img3,
          });
        } else if (this.state.room === "25") {
          this.setState({
            displayImg: img4,
          });
        } else {
          this.setState({
            displayImg: null,
          });
        }
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
          // otherEmail = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          if (otherName.length && otherEmail.length > 0) {
            this.setState({
              total: this.state.room * this.state.persons * finalDate + `€`,
            });
          }
        } else {
          this.setState({
            isEnable: false,
          });
        }
      }
    );
    console.log("room", this.state.room);
    console.log("img", this.state.displayImg);
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
      displayImg,
      info,
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
      displayImg,
      info,
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
