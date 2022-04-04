import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About my self</h1>
            <p>I am a developer, freenlancer and a CEP (candidate to the engineering profession).</p>
            <Link to="/contact"> Contact me</Link>
        </Layout>
    )
}

export default AboutPage

