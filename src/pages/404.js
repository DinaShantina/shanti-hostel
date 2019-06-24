import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head tile="404" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">head home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
