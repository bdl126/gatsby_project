import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import * as footerStyle from "./footer.module.scss"

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
        <footer className={footerStyle.footer}>
            <p> Created by {data.site.siteMetadata.author} © 2022</p>
        </footer>
    )
}

export default Footer;