import React, { Component } from "react"
import Layout from "../layout"
import Head from "../head"

export class Success extends Component {
  continue = e => {
    e.preventDefault()
    // PROCESS FORM //
    this.props.nextStep()
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }
  render() {
    return (
      <Layout>
        <Head title="Success" />
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructions</p>
      </Layout>
    )
  }
}

export default Success
