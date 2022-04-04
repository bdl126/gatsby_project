import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head from "../components/head"
import { documentToReactComponents } from "gatsby-source-contentful/node_modules/@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}){
      title
      publishedDate(formatString:"MMMM Do, yyyy")
      body {
        raw
        references {
          title
          filename
          url
          contentful_id
          __typename
        }
      }
    }
  }
`

const Blog = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div>
            <img
              src={node.data.target.url}
              alt={node.data.target.title}
            />
          </div>
        )

      },
    },
  }
  console.log(options);
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(props.data.contentfulBlogPost.body, options)}
    </Layout>

  )
}

export default Blog