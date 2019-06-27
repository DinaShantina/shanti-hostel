import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import bookingStyle from "./booking.module.scss"

class Booking extends React.Component {
  state = {
    name: "",
    email: "",
    persons: "",
    room: "",
    from: "",
    to: "",
  }
  // let cost={
  //   "8Bed":10;
  //   deee:20
  // }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value,
      // da proveram vo if dali postojat vo state, if site se razlichno !==""
      // cost[this.state.room] * date * person +"eur"
      // vo ifot date
      // cont date = new Date(this.state.to).getTime()-new Date(this.state.from).getTime()
    })
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
            <p className="hidden">
              <label>
                Name:
                <br />
                <input
                  name="name"
                  placeholder="Your Name"
                  value={this.state.name}
                  onChange={e => this.change(e)}
                />
              </label>
            </p>
            <hr />
            <p>
              <label>
                Email:
                <br />
                <input
                  placeholder="Your Email"
                  value={this.state.email}
                  onChange={e => this.change(e)}
                  type="email"
                  name="email"
                />
              </label>
            </p>
            <hr />
            <p>
              How many people? <br />
              <select
                name="persons"
                value={this.state.persons}
                onChange={e => this.change(e)}
              >
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
            </p>
            <p>
              Room type?
              <br />
              <select
                name="room"
                value={this.state.room}
                onChange={e => this.change(e)}
              >
                <option value="8bed"> 8 bed Dorm</option>
                <option value="4beda">4 yellow bed Dorm</option>
                <option value="4bedb">4 orange bed Dorm</option>
                <option value="double">Private Double Room</option>
              </select>
            </p>

            <hr />
            <div className={bookingStyle.date}>
              <span className={bookingStyle.field}>
                Check in: <br />
                <input
                  type="date"
                  name="from"
                  value={this.state.from}
                  onChange={e => this.change(e)}
                />
              </span>
              <span className={bookingStyle.field}>
                Check out: <br />
                <input
                  type="date"
                  name="to"
                  value={this.state.to}
                  onChange={e => this.change(e)}
                />
              </span>
            </div>

            <p>
              <button onClick={e => this.onSubmit(e)} type="submit">
                Send
              </button>
            </p>
          </form>
        </div>
      </Layout>
    )
  }
}

export default Booking
