import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import bookingStyle from "./booking.module.scss"
import PhotosDetails from "../components/photosdetails"
import Success from "../components/Form/Success"
// import UserForm from "../components/Form/Userform"
// import images from "../images.js"

class Booking extends React.Component {
  constructor() {
    super()
    this.state = {
      step: 1,
      name: "",
      email: "",
      persons: 0,
      room: 0,
      from: "",
      to: "",
      total: "",
      errors: [],
      isSubmitted: false,
    }
  }

  change = e => {
    e.persist()
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
          let oneDay = 1000 * 60 * 60 * 24
          let date1 = new Date(this.state.to).getTime()
          let date2 = new Date(this.state.from).getTime()
          let date = date1 - date2
          let finalDate = Math.round(date / oneDay)
          this.setState({
            total: this.state.room * this.state.persons * finalDate + `€`,
            // displayImg: images.find(img=>{img.id === mapImg[e.target.value]})// find src
          })
        }
      }
    )
  }
  onSubmit = e => {
    e.preventDeafult()
    this.setState({ isSubmitted: true })
  }
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
  }

  render() {
    const { total } = this.state
    const isEnabled = total.length > 0
    const { step } = this.state
    console.log(isEnabled)
    switch (step) {
      case 1:
        return (
          <Layout>
            <Head title="Booking" />
            <div className={bookingStyle.fleX}>
              <PhotosDetails />
            </div>

            <div className={bookingStyle.flexForm}>
              <form
                className={bookingStyle.bookingForm}
                name="contact"
                method="POST"
                netlify-honeypot="bot-field"
                data-netlify="true"

                // onSubmit={this.handleSubmit}
              >
                <h4>YOUR RESERVATION</h4>
                <div className="hidden">
                  <label>Name:</label>
                  <br />
                  <input
                    ref={nameInput => (this._nameInput = nameInput)}
                    name="name"
                    placeholder="Your Name"
                    value={this.state.name}
                    onChange={e => this.change(e)}
                  />
                </div>
                <hr />
                <div>
                  <label>Email:</label>
                  <br />
                  <input
                    ref={emailInput => (this._emailInput = emailInput)}
                    placeholder="Your Email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    type="email"
                    name="email"
                  />
                </div>
                <hr />
                {/* <img
              src={First}
              alt="8bed dorm"
              style={{
                width: "40%",
                float: "right",
                border: "1px solid white",
                display: "none",
              }}
            /> */}
                <div>
                  How many people? <br />
                  <select
                    ref={selectInput => (this._selectInput = selectInput)}
                    name="persons"
                    value={this.state.persons}
                    onChange={e => this.change(e)}
                  >
                    <option hidden selected>
                      Select N persons
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>

                <div>
                  Room type?
                  <br />
                  <select
                    ref={selectInput => (this._selectInput = selectInput)}
                    id="room"
                    name="room"
                    value={this.state.room}
                    onChange={e => this.change(e)}
                  >
                    <option hidden selected>
                      Select type of room
                    </option>
                    <option name="8bed" value="10">
                      8 bed Dorm
                    </option>
                    <option name="4beda" value="12">
                      4 yellow bed Dorm
                    </option>
                    <option name="4bedb" value="11">
                      4 orange bed Dorm
                    </option>
                    <option name="double" value="25">
                      Private Double Room
                    </option>
                  </select>
                </div>
                <hr />
                <div className={bookingStyle.date}>
                  <label className={bookingStyle.field}>
                    Check in: <br />
                    <input
                      ref={dateInput => (this._dateInput = dateInput)}
                      type="date"
                      name="from"
                      value={this.state.from}
                      onChange={e => this.change(e)}
                    />
                  </label>
                  <label className={bookingStyle.field}>
                    Check out: <br />
                    <input
                      ref={dateOutInput => (this._dateOutInput = dateOutInput)}
                      type="date"
                      name="to"
                      value={this.state.to}
                      onChange={e => this.change(e)}
                    />
                  </label>
                </div>
                <p className={bookingStyle.total}>{this.state.total} </p>
                <hr />
                <div>
                  <button
                    type="submit"
                    disabled={!isEnabled}
                    onClick={this.onSubmit}
                  >
                    Send
                  </button>
                </div>
              </form>
              {this.state.isSubmitted && <Success />}
            </div>
          </Layout>
        )
      case 2:
        return (
          <Layout>
            <Head title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions</p>
          </Layout>
        )
    }
  }
}
export default Booking
