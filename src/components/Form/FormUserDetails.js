import React from "react";
import Layout from "../layout";
import Head from "../head";
import bookingStyle from "./booking.module.scss";
import PhotosDetails from "../photosdetails";
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
            <div className="hidden">
              <label>Name:</label>
              <br />
              <input
                required
                name="name"
                placeholder="Your Name"
                defaultValue={values.name}
                // value={this.state.name}
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
                // value={this.state.email}
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
                // value={this.state.persons}
                defaultValue={values.persons}
                onChange={e => this.props.handleChange(e)}
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
                // value={this.state.room}
                defaultValue={values.room}
                onChange={e => this.props.handleChange(e)}
              >
                <option hidden selected>
                  Select type of room
                </option>
                <option name="8bed" value="10">
                  8 bed Dorm
                </option>
                <option name="4beda" value="11">
                  4 yellow bed Dorm
                </option>
                <option name="4bedb" value="12">
                  4 orange bed Dorm
                </option>
                <option name="double" value="28">
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
                  // value={this.state.from}
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
                  // value={this.state.to}
                  defaultValue={values.to}
                  onChange={e => this.props.handleChange(e)}
                />
              </label>
            </div>
            {values.total !== "" ? (
              <p className={bookingStyle.total}>{values.total}</p>
            ) : null}
            {/* <div className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}></div> */}

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
