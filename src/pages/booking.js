import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import bookingStyle from "./booking.module.scss"
// import First from "../images/slides/slide1.jpg"
// import Second from "../images/slides/slide2.jpg"
// import Third from "../images/slides/slide3.jpg"
// import Fourth from "../images/slides/slide4.jpg"

class Booking extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      persons: 0,
      room: 0,
      from: "",
      to: "",
      total: "",
    }
  }

  change = e => {
    e.persist()
    let oneDay = 1000 * 60 * 60 * 24
    let date1 = new Date(this.state.to).getTime()
    let date2 = new Date(this.state.from).getTime()
    let date = date1 - date2
    let finalDate = Math.round(date / oneDay)
    this.setState(prevState => ({
      [e.target.name]: e.target.value,
      total: prevState.room * prevState.persons * finalDate + `€`,
    }))
  }
  show = e => {}
  onSubmit = e => {
    e.preventDefault()
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.persons !== "" &&
      this.state.room !== "" &&
      this.state.from !== "" &&
      this.state.to !== ""
    ) {
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
            {/* <First /> */}
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
            <p className={bookingStyle.total}>{this.state.total} </p>
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
