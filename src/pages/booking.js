import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import bookingStyle from "./booking.module.scss"

class Booking extends React.Component {
  state = {
    name: "",
    email: "",
    persons: "",
    from: "",
    to: "",
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value,
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
            <p className="hidden">
              <label>
                Name:
                <input
                  name="name"
                  placeholder="Your Name"
                  value={this.state.name}
                  onChange={e => this.change(e)}
                />
              </label>
            </p>
            <p>
              <label>
                Email:
                <input
                  placeholder="Your Email"
                  value={this.state.email}
                  onChange={e => this.change(e)}
                  type="email"
                  name="email"
                />
              </label>
            </p>
            <p>
              How many persons?
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
              From:
              <input
                type="date"
                name="from"
                value={this.state.from}
                onChange={e => this.change(e)}
              />
            </p>
            <span>
              To:
              <input
                type="date"
                name="to"
                value={this.state.to}
                onChange={e => this.change(e)}
              />
            </span>
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
