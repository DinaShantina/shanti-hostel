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
    isSubmitted: false,
  };

  nextStep = async () => {
    const { step } = this.state;

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    });
    // .then(() => alert("Success!"))
    // .catch(error => alert(error));

    e.preventDefault();

    this.setState({
      step: step + 1,
    });
  };
  handleChange = e => {
    // e.persist()
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (
          this.state.room &&
          this.state.persons &&
          this.state.to &&
          this.state.from
        ) {
          let oneDay = 1000 * 60 * 60 * 24;
          let date1 = new Date(this.state.to).getTime();
          let date2 = new Date(this.state.from).getTime();
          let date = date1 - date2;
          let finalDate = Math.round(date / oneDay);
          this.setState({
            total: this.state.room * this.state.persons * finalDate + `€`,
            // displayImg: images.find(img=>{img.id === mapImg[e.target.value]})// find src
          });
        }
      }
    );
  };

  render() {
    const { step } = this.state;
    const { name, email, persons, room, from, to, total } = this.state;
    const values = { name, email, persons, room, from, to, total };
    // const { total } = this.state
    const isEnabled = total.length > 0;
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            isEnabled={isEnabled}
          />
        );
      case 2:
        return <Success />;
    }
  }
}

export default UserForm;
