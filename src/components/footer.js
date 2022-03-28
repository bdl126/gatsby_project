import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title,
                author
            }
        }
    }
    `)
    return (
        <footer>
            <p> Created by {data.site.siteMetadata.author} © 2022</p>
        </footer>
    )
}

export default Footer;