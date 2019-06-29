import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import bookingStyle from "./booking.module.scss"

class Booking extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      persons: "",
      room: "",
      from: "",
      to: "",
      total: "",
      cost: {
        "8Bed": "9",
        "4beda": "10",
        "4bedb": "10",
        double: "28",
      },
    }
  }
  change = e => {
    let date =
      new Date(this.state.to).getTime() - new Date(this.state.from).getTime()
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.persons !== "" &&
      this.state.room !== "" &&
      this.state.from !== "" &&
      this.state.to !== ""
    ) {
      this.state.total =
        parseInt(this.state.cost[this.state.room]) * date * this.state.person
      // ReactDOM.findDOMNode(<instance-of-outermost-component>).getElementsByClassName('snap')
    }
    this.setState({
      [e.target.name]: e.target.value,
    })
    console.log(this.state.total)
  }

  onSubmit = e => {
    e.preventDefault()
    // this.props.onSubmit()
    console.log(this.state)
    this.setState({
      name: "",
      email: "",
      persons: "",
      room: "",
      from: "",
      to: "",
      total: "",
    })
  }
  render() {
    return (
      <Layout>
        <Head title="Booking" />
        <div className={bookingStyle.flexForm}>
          <form
            className={bookingStyle.bookingForm}
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <h4>YOUR RESERVATION</h4>
            <div className="hidden">
              <label>Name:</label>
              <br />
              <input
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
                placeholder="Your Email"
                value={this.state.email}
                onChange={e => this.change(e)}
                type="email"
                name="email"
              />
            </div>
            <hr />
            <div>
              How many people? <br />
              <select
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
                name="room"
                value={this.state.room}
                onChange={e => this.change(e)}
              >
                <option hidden selected>
                  Select type of room
                </option>
                <option value="8bed"> 8 bed Dorm</option>
                <option value="4beda">4 yellow bed Dorm</option>
                <option value="4bedb">4 orange bed Dorm</option>
                <option value="double">Private Double Room</option>
              </select>
            </div>
            <hr />
            <div className={bookingStyle.date}>
              <label className={bookingStyle.field}>
                Check in: <br />
                <input
                  type="date"
                  name="from"
                  value={this.state.from}
                  onChange={e => this.change(e)}
                />
              </label>
              <label className={bookingStyle.field}>
                Check out: <br />
                <input
                  type="date"
                  name="to"
                  value={this.state.to}
                  onChange={e => this.change(e)}
                />
              </label>
            </div>
            <p className={bookingStyle.total}>{this.state.total}EU</p>
            <hr />
            <div>
              <button onClick={e => this.onSubmit(e)} type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </Layout>
    )
  }
}

export default Booking
