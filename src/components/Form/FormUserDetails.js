import React from "react"
import Layout from "../layout"
import Head from "../head"
import bookingStyle from "./booking.module.scss"
import PhotosDetails from "../photosdetails"
import UserForm from "./Userform"
// import images from "../images.js"

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
      // displayImg:""
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
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }
  render() {
    return (
      <Layout>
        <Head title="Booking" />
        <UserForm />
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
              <button
                onClick={e => {
                  this.onSubmit(e)
                  this.continue(e)
                }}
                type="submit"
              >
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
