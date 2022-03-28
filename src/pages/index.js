import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {

  return (
    <Layout>
      <h1>Hello</h1>
      <h2> I'm Bruno, a full-stack developer living in the beautiful montreal</h2>
      <p>Need a developer?<Link href="/contact"> Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage