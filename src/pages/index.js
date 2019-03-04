import React from "react"
import { Link } from "gatsby"

import { FaCoffee } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <FaCoffee />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default IndexPage
