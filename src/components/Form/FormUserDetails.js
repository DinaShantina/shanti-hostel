import React from "react";
import Layout from "../layout";
import Head from "../head";
import bookingStyle from "./booking.module.scss";
import PhotosDetails from "../photosdetails";
// import { redirectTo } from "@reach/router";
// import images from "../images.js"

class Booking extends React.Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values } = this.props;
    return (
      <Layout>
        <Head title="Booking" />
        <div className={bookingStyle.fleX}>
          <PhotosDetails />
        </div>
        <div className={bookingStyle.flexForm}>
          <form className={bookingStyle.bookingForm}>
            <h4>YOUR RESERVATION</h4>
            <p className={bookingStyle.error}>* All fields are required!</p>

            <div className="hidden">
              <label>Name:</label>
              <br />
              <input
                required
                name="name"
                placeholder="Your Name"
                defaultValue={values.name}
                onChange={e => this.props.handleChange(e)}
              />
            </div>
            <hr />
            <div>
              <label>Email:</label>
              <br />
              <input
                required
                placeholder="Your Email"
                defaultValue={values.email}
                onChange={e => this.props.handleChange(e)}
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
                defaultValue={values.persons}
                onChange={e => this.props.handleChange(e)}
              >
                <option hidden>Select N persons</option>
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
                defaultValue={values.room}
                onChange={e => this.props.handleChange(e)}
              >
                <option hidden>Select type of room</option>
                <option name="8bed" value="10">
                  8 Bed Dorm
                </option>
                <option name="4beda" value="11">
                  4 Bed Yellow Dorm
                </option>
                <option name="4bedb" value="12">
                  4 Bed Orange Dorm
                </option>
                <option name="double" value="28">
                  Private Double Room
                </option>
              </select>
              <div style={{ fontSize: 12, color: "red" }}>
                {values.roomError}
              </div>
            </div>
            <hr />
            <div className={bookingStyle.date}>
              <label className={bookingStyle.field}>
                Check in: <br />
                <input
                  required
                  type="date"
                  name="from"
                  defaultValue={values.from}
                  onChange={e => this.props.handleChange(e)}
                />
              </label>

              <label className={bookingStyle.field}>
                Check out: <br />
                <input
                  required
                  type="date"
                  name="to"
                  defaultValue={values.to}
                  onChange={e => this.props.handleChange(e)}
                />
              </label>
            </div>
            {
              <p
                className={
                  this.props.isEnabled
                    ? `${bookingStyle.total} ${bookingStyle.opa1}`
                    : `${bookingStyle.total} ${bookingStyle.opa2}`
                }
              >
                {values.total}
                <br />
                <span className={bookingStyle.spanche}>
                  in the price is included tourist tax
                </span>
              </p>
            }
            <hr />
            <div>
              <button
                onClick={this.saveAndContinue}
                disabled={!this.props.isEnabled}
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}

export default Booking;
